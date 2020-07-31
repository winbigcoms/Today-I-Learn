# ANTD

```jsx
*package.json

"bable":{
	plugins:[
		"import",{
			"libaryName":"antd"
		}
	]
}

npm i bable-plugin-import --save -D
```

## HOC

reusing component  logic - 인자로 컴포넌트를 받아서 컴포넌트를 리턴해준다.

보통 이름에 with이 들어간다.

형태

1. widthRouter형 widthRouter(컴포넌트) ⇒ return (new Component)

2. connect형 connect() ⇒ return function 결국 connect()(component)

   connect(1)(2) → 1은 설정, 2는 컴포넌트

3. createFragmentComtainer형 / createFragmentContainer(컴포넌트, 설정)

사용하는 이유 reuing component logic

## REST API

# 강의 정리

### ANTD

스타일의 구성 기본 css의 문제

1. 클래스 선택자의 중복 가능성
2. 스타일의 부분 사용 불가 항상 전체사용

```jsx
npm i antd

* index.js
import 'antd/dist/antd.css'

사용할 컴포넌트에서 import

*App.js
import {DatePicker}from 'antd';

일부 스타일만 사용하고 싶을 때
import 'antd/es/date-picker/style/css';

이 import 를 자동으로 해주고 싶을 때?
eject후 바벨의 플러그인 추가
npm i bable-plugin-import

"plugins":[
	"import",
	{
     "libraryName": "antd",
     "libraryDirectory": "es",
     "style": "css"
	}
]

아이콘 사용
npm i --save @ant-design/icons
그리드 방식의 레이아웃 짜기
import {Row,Col} from 'antd';

Row 는 가로줄 Col은 가로 줄 내부의 공간 tr th같은 느낌
Row 내부의 Col은 최대 24개 까지 가능하다.
<Row>
	<Col span={12}>a</Col>
	<Col span={12}>a</Col>
</Row>
span 값에 24중 차지할 비율을 적어 준다.
Col 사이의 간격을 주기 위해서 Row에 gutter를 준다
gutter의 값은 16+8n
<Row gutter={16}>   -> 두 Col사이에 16px의 공백을 만들어준다. 좌우 8px씩
	<Col span={12}>a</Col>
	<Col span={12}>a</Col>
</Row>

offset 빈 공간을 생성한다.
<Row>
	<Col span={12} offset={12}>a</Col> -> 12칸 만큼 빈 공간 생성 후 12칸
</Row>

Row의 스타일링 flex의 스타일링하듯이 해야한다.
<Row
	style={{
		height:100vh,
	}}
	justify="center";
	align="middle"
>
	<Col span={12} offset={12}>a</Col> -> 12칸 만큼 빈 공간 생성 후 12칸
</Row>
프로젝트 my-books

1. root에 .nvmrc 파일 생성 후 12.18.2 -> 현제 노드 버전
npm i react-router-dom react-error-boundary antd
2. .prettierrc 파일 생성
{
	"singleQuote":true,
	"trailingCOmma":"all"
}
index.html 에 
<link
      href="<https://fonts.googleapis.com/css?family=Roboto&display=swap>"
      rel="stylesheet"
    /> 추가
index.css 에
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}추가
```

# HOC

고차 컴포넌트

- react의 컴포넌트의 기능을 재사용하기 위한 부가적인 기술
- 그렇다고 react와 상관은 없음. 일종의 패턴

HOC : 컴포넌트를 인자로 받아서 컴포넌트를 반환하는 함수

보통 with가 붙은 경우가 많음

특징

- withRouter형 : withRouter(컴포넌트) ⇒new 컴포넌트
- connect형 : connect() ⇒ return function / connect(컴포넌트 설정)(컴포넌트)⇒new컴포넌트
- createFragementContainer형 : createFragementContainer(컴포넌트, 설정) ⇒ 뉴 컴포넌트

### 사용법

- 페이지의 기능 상 여러번 사용되는 로직을 재사용하기 위함

- 기존의 컴포넌트를 변화시키면 안됨 a>b x,  a+b > c o react의 상태 유지 철학과 일맥상통

- 재사용과 연관되지 않는 props를 감싸지는 컴포넌트에 전달(여러번 사용 될 때 마다 사용되는 props는 relative, 조건에 따라 사용되는 props는 unrelative)

  ```jsx
  export default withRouter(빼빼로);
  
  import LoginButton from "./"
  <LoginButton name=""/>
  HOC로 반환된 컴포넌트에 프롭스를 넣는 것은 HOC에 담긴 컴포넌트가 받는 것이 아닌 HOC에
  감싸는 컴포넌트가 전달받는다.
  function withRouter(props){ -> 여기로 들어간다. 근데 연관되지 않는 props는 인자로 받
  	은 컴포넌트에 바로 패스할 수 있어야 한다. 연관된 props는 전달 
  	약간 관련있는 애는 이름 붙여서 따로 두고 관련 없으면 {...props} 뭉태기로 던지는 느낌
  	return (
  	<div>
  		<뺴뺴로 props={...props} {history, match, location}/> 
  	</div>
  	)
  }
  ```

- 디버깅 시에 해당 컴포넌트가 HOC의 컴포넌트인지 알기 힘들기 때문에

  ```jsx
  HOC.display = ` withRouter(${뺴뺴로의 이름})` -> 보여질 이름으로 감싼다.
  ```

### 주의할 점

1. render메소드에서 사용하지 말기
2. 스태틱메소드를 복사 HOC.스태틱메소드 = 인자.스태틱매소드

## Controlled Component

- react가 상태를 관리하느냐 안하느냐의 차이

1. controlled Component

   - 실시간 확인

2. uncontrolled Component

   - 이벤트 성 확인(클릭) → Ref 한번 만들어지면 그대로인 것

   ```jsx
   passwordRef = React.createRef(null);
   ```

   function과 class의 차이 랜더 할 때마다 function은 다시 전부돌고 class는 인스턴스만 생성

   ```jsx
   <input type="password" ref={this.passwordRef}/> -> ref를 설정해준다.
   
   passwordRef.current -> DOM element에 접근 할수 있게 된다.
   ```