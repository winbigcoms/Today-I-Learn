# 웹 성능 업그레이드

## 지연 로딩

지연 로딩이란 쉽게 말해서 처음부터 모두 준비해놓고 시작하는게 아니라 필요할때 가져다가 쓰는 거라고 생각하면 된다.

그럼 이 동작의 목적은 무엇이냐 함은, 초기 랜더링 속도를 높임으로 사용자 경험 UX를 증진하고 성능의 향상으로 SEO에 좋은 점수를 받기 위함이다.

먼저 React

SPA 인 REACT는 하나의 html에서 모든 js를 가져다가 사용자 측면에서 동작함으로 만약 그 앱의 크기가 크고 최적화가 되어 있지 않는다면, 최초 로딩이 매우 느려질 수 있다.

그러나 각 페이지 별로 필요한 부분만 가져다가 보여준다면, 웹에서 가장 중요한 초기 랜더링 속도를 증가시킬 수 있다.

React공식 홈페이지 문서에서는 이를 "코드 분할"이라고 한다.

코드 분할의 방법으로는 동적 import를 이용하는 방법과 React.lazy함수를 이용하는 방법이 있다.

```
  const about = import('./me').then(info=>{
    console.log(info)
  })
```

이는 특정 함수를 지연 로딩으로 가져올 때 유용해 보인다. 만약 어떤 계산을 하는 함수에서 사용하는 라이브러리가 무거운 경우, 해당 계산이 필요할 때 무거운 라이브러리를 가져오는 느낌이다.

```
  const myPage = React.lazy(()=>import("./myPage"));
```

구조가 특정 컴포넌트를 지연시켜 가져오기 좋아보인다. react-router처럼 라우팅으로 특정 컴포넌트만을 보여주는 경우, 보여줄 페이지에 해당하는 청크js를 그때 그때 가져와서 보여준다.

그렇다면 Next.js는?

Next.js는 파일 기반 라우팅을 해준다. 때문에 라우팅에 관해서는 파일별로 자동 번들링이 되기 때문에 기본적인 라우팅 세팅이 편안하다. 따로 크게 할게 없기 때문 그럼에도 페이지 내부에서 사용하지 않고 있는건
lazy로딩을 쓰는게 좋겠다.

그럼에도 성능이 영 시원찮다면 어떻게 해야할까

일단 우리는 전체 서비스에서 현재 보이는 '페이지'에 들어간 콘텐츠만 가져왔다. 그럼에도 느리면 어떻게 해야겠는가, 그렇다 그럼 일단 보이는 것만 먼저 랜더링 해보면 된다.
그렇다고 막 display:block때리면 쉽지 않아 진다. 랜더 트리 만들 때, display:block인 요소는 아주 그려버리지 않기 때문에 크롤러가 들어와서 보면 보이지 않는다.

먼저 next가 어떻게 브라우저에다가 화면을 그리는지 생각해볼 필요가 있다.

nextjs는 서버에서 먼저 document 소스로 랜더링하고 브라우저로 보낸다. 그리고 DOM에 필요한 script를 보낸다. 그렇게 DOM과 script가 매칭되서 페이지가 동작하게 된다. 이를 Hydrate라고 한다.

이 과정에서 보낸 document에 있는 DOM요소의 모든 script를 모두 가져온다. 그렇다고 위에서 말한 dynamic import를 쓰기도 크롤러 생각하면 애매하다. dynamic import로 지연로딩 시키면, 맨 처음
만들어지는 document에도 들어가지 않기 때문에 크롤러는 못볼 수 있다.

그러면 결국 dom은 냅두고 script만 필요할 때 불러오는 수 밖에 없다.

방법은 다음과 같다.

1. 웹팩 플러그인 설정
2. next.js 내부 설정
3. react-lazy-hydration모듈

### 웹팩 플러그인 설정

nextjs는 document만들어서 브라우저로 보내고 그걸 브라우저가 읽으면서 script코드의 소스를 서버에 요청한다. 이때 이 소스 요청을 컨트롤 할 수 있게, 지연시켜서 가져올 소스에 표시를 해둬야한다.
물론 빌드 타임에

```
/// next.config.js
const stampLazyIdx = fn => complier => {
  const {context} = compiler.options;

  compiler.hooks.compilation.tap('ChangeModuleIdsPlugin', compilation => {
    compilation.hooks.beforeModuleIds.tap('ChangeModuleIdsPlugin', modules =>{
      const {chunkGraph} = compilation;

      for (const module of modules) {
        if (module.libIdent){
          const originId = module.libIdent({context});

          if( !originId) continue;

          const namedModuleId = fn(originId,module.debugId);
          if(namedModuleId){
            chunkGraph.setModuleId(module,namedModuleId);
          }
        }
      }
    });
  });
};

const moduleExports = {
  ... 다른 설정
  webpack: (config,options)=>{
    const lazyTargetComponent = [
      '/src/components/...'
    ]

    config.plugins.push(
      stampLazyIdx((id,debugId)=>{
        const isTarget = lazyTargetComponent.some(target=>target.includes(id));

        return isTarget? `lazy-${debugId}`: false
      })
    );

    return config;
  }
}

module.exports = moduleExports;
```

웹팩이 컴파일 할 때, script 파일을 돌면서 지연 로딩할 타겟 파일앞에 lazy를 붙여준다. 나중에 이게 붙은 건 지연해서 받을 것이다.

이제 nextjs 내부 설정이다.

나중에 받은 파일에 스탬프를 찍어놨으니 해당 스탬프를 조건으로 prerendering후 script불러올 때 스탬프 안찍힌 것만 요청하도록 만든다.

```
/// _document.tsx
import Head from 'next/head';

class LazyHead extends Head{ // next/head의 확장
  getLazyChunks(files){
    const lazyChunks = super.getDynamicChunks(files);

    try{
      // 청크 리스트 가져오기
      const loadableManifest = __non_webpack_require__('../../react-loadable-manifest.json');

      // 마커(lazy)를 기준으로 찾아서 필터링
      const chunksToExclude = Object.values(loadableManifest).filter(
        manifestModule => manifestModule?.id?.startsWith?.('lazy') || false
      );

      const excludeMap = chunksToExclude?.reduce?.((acc,chunks)=>{
        if (chunks.files){
          acc.push(...chunks.files);
        }
        return acc
      },[]);

      const filteredChunks = lazyChunks?.filter?.(script => !excludeMap?.includes(script?.key));

      return filteredChunks;
    }catch(err){
      // 에러나면 기존에 있던 곳으로 보내기
      return lazyChunks;
    }
  }

  const backupScript = NextScript.getInlineScriptSource;

  NextScript.getInlineScriptSource = props =>{
    if(props?.__NEXT_DATA__?.dynamicIds){
      const filteredDynamicModuleIds = props?.__NEXT_DATA__?.dynamicIds?.filter?.(moduleId=>!moduleId?.startsWith?.('lazy));

      if(filteredDynamicModuleIds){
        props.__NEXT_DATA__.dynamicIds = filteredDynamicModuleIds;
      }
    }

    return backupScript(props);
  }
}

export default class MyDocument extends Document{
  render(){
    return (
      <Html>
        <LazyHead />
        <body>
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

여기 까지가 script 를 부르는 로직의 수정이다. 이제 마지막 작업이다.

react-lazy-hydration을 이용하여 hydration이 일어날 때 깜빡임을 방지해준다.

```
  import LazyHydrate from 'react-lazy-hydration';

  const Footer = dynamic(()=> import('/src/component/..'));

  const Home = ()=> {
    return (
      <>
        <LazyHydrate>
          <Footer />
        </LazyHydrate>
      </>
    )
  }
```

https://helloinyong.tistory.com/323
https://velog.io/@yejinh/Intersection-Observer%EB%A1%9C-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
