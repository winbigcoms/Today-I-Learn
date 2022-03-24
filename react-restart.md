# React

## 목차

- 리액트란
  - 특징
  - 동작원리
- life cycle
  - class
  - function
- hook
- 성능 최적화
- 상태 관리

## 리액트란

리액트란 javascript를 이용한 SPA(single page application) 라이브러리이다. SPA란 말 그대로 하나의 페이지를 갖는 어플리케이션이라는 말이다. 기존 페이지는 라우트마다 html하나씩 내려주는 방식으로 만들어졌다면, SPA는 하나의 html만으로 화면을 그리는 기술을 말한다. react는 component라는 화면을 구성하는 작은 조각으로 이루어진 화면을 하나의 html안에서 그려내는 SPA라이브러리 라고 할 수 있다.

### 특징

- virtual DOM
  웹을 만들다 보면, javascript를 이용하여 html을 제어하는 상황을 자주 마주친다. 상태가 변경되면 html의 노드를 선택하고 이벤트를 등록하고 하는 작업을 하게된다. 하지만 웹이 커지고 이벤트도 많아지면 코드가 굉장히 복잡해지기 마련이다. React는 상태가 변경되었을 때, 이벤트 핸들러는 등록하는 방식처럼 동작에 대한 규칙을 정하는게 아니라 그냥 다 바꿔버린다.
  그러나 부분의 변화에 의한 모든 DOM요소를 갈아치우는 것은 매우 비효율 적이고 많은 리소스를 잡아먹는다. 때문에 리액트에서는 이를 virtual DOM을 이용하여 변화가 필요한 부분만 수정하여 성능을 높힌다.
  Virtual DOM은 화면에 그려지는 DOM이 아니라 메모리에만 존재하는 가상의 DOM이다. react는 상태가 변하여 변경할 DOM을 virtual DOM으로 그린 후, 이전에 그렸던 virtual DOM과 비교한 후 변경된 부분만 실제 DOM에 반영하는 방식으로 랜더링을 최적화한다.
- JSX
  react에서는 JSX라는 문법을 사용한다. JSX는 bable에 의해서 javascript로 변경되고 캡슐화되어 독립적으로 동작한다. JSX문법은 React.createElement()함수의 호출로 컴파일 되고 랜더링 되기전 주입된 값은 이스케이프 되어 XSS공격(값에 script를 넣는 공격)을 방지할 수 있다.
- component
  react는 재사용가능한 ui의 조각인 component를 사용하여 재사용성을 높였다. 이 component에는 class형과 function형이 있다.
- state/props
  react는 상태에 따라 화면을 랜더링한다. 이때 상태에는 크게 부모 컴포넌트로 부터 받은 props와 본인 컴포넌트에 있는 state이다.
- 생명주기
  react에는 컴포넌트의 생명주기 라는 것이 존재한다. 컴포넌트가 준비되어 화면에 랜더링되고 화면에서 사라지기 까지의 주기를 의미하며 해당 주기에 조건에 따라 다음 주기로 이동할지 결정할 수도 있고, 값을 주입할 수도 있다.

### 동작원리

react의 동작 특히 어떻게 jsx문법으로 컴퍼넌트들을 render하고 상태의 변화에 따라 virtual DOM을 이용하여 화면을 갱신하는지, 또 상태의 변화는 어떻게 감지하는 지가 중요한 키가 된다.

- jsx문법
  jsx문법이란 자바스크립트의 확장 문법으로 babel에 의해서 일반 자바스크립트 형태의 코드로 변환된다.
  ```jsx
  const Header = () => {
    return (
      <header id="lost">
        ark<h1>goldRiver</h1>
      </header>
    );
  };
  ```
  이 코드는 다음과 같이 변환된다.
  ```jsx
  const header = () => {
    return React.createElement(
      "header",
      { id: "lost" }, // 태그명, 프로퍼티
      "ark", //3번째 인자부터는 children이 들어온다.
      React.createElement("h1", null, "goldRiver")
    );
  };
  ```
  변환되는 JSX문법은 React.createElement함수에 의해 호출된다.
  ```jsx
  React.createElement(
  	type:태그명|리액트 컴포넌트|Fragment,
  	[props:컴포넌트에 전달해주는 프로퍼티],
  	[...children]: 컴포넌트의 children으로 전달받는 것들
  )
  ```
- render
  이렇게 JSX문법에 의해서 React의 컴포넌트들은 재귀적으로 객체를 만들어 낸다. 만들어진 객체를 가지고 render를 하면 이제 화면에 보여지는 것이다. createElement함수의 내부를 예시로 만들어보자
  ```jsx
  createElement(tagName,props=null,...children){ // children은 얼마나 들어올지 모르니 rest parameter로 받아준다.
  	if(typeof tagName === 'function'){ // tagName이 함수인 경우는 JSX로 만들어진 component, 문자열인 경우 html 태그를 의미한다.
  		return tagName.apply(null,[props,children])
  	}

  	return {tagName,props,children}
  }

  예시)
  const Icon = ()=>{
  	return (
  		<button id='iconButton'>
  			<span></span>
  			<span></span>
  		</button>
  	)
  };

  const CustomHeader = ()=>{
  	return (
  		<header>
  			<Icon />
  			헤더입니다!
  		</header>
  	)
  };

  => babel로 변환~ =>
  CustomHeader() = {
  	tagName:'header',
  	props:null,
  	children: [
  		{
  			tagName:'button',
  			props:{
  				id:'iconButton'
  			},
  			children:[
  				{
  					tagName:'span',
  					props:null,
  					children:[]
  				},
  				{
  					tagName:'span',
  					props:null,
  					children:[]
  				}
  			]
  		},
  		"헤더입니다!"
  	]
  }
  ```
  그렇다 createElement자체는 들어온 값을 객체로 만들어서 전달해 줄 뿐이다. 그러면 render함수를 만들어보자
  ```jsx
  renderRealDOM(component){
  	if(component === 'string'){
  			return document.createTextNode(component) //컴포넌트가 아닌 문자가 오는 경우
  	}

  	if(component === undefined) return; // component가 들어오지 않는 경우

  	const element = document.createElement(component.tagName);

  	for(let property in component.props){
  			element.setAttribute(property,component.props[property])
  	}

  	component.children.map(child=>renderRealDOM(child)).forEach(childNode=>{
  		element.appendChild(childNode);
  	});

  	return element;
  }

  render(component,container){
  	container.appendChild(renderRealDOM(component));
  }
  ```
  이렇게 재귀적으로 renderRealDOM을 호출하여 DOM을 생성하는데, React는 상태의 변화에 따라 변경된 부분만 다시 랜더링을 한다. 그렇다면 변경이란 것을 알아차리려면 변경 이전의 값과 이후의 값을 비교해야한다.
  이후의 값은 들어오는 parameter에서 확인한다고 하지만 위의 render 함수 구조상 이전 상태를 저장하지 못한다. 때문에 내부적으로 상태를 저장하기 위해서 클로저를 사용한다. 정확한 구현은 아니지만 컨셉을 흉내내보자.
  ```jsx
  export const redner = (function () {
    let prevDOM = null;

    return function (component, container) {
      if (prevDOM === null) prevDOM = component;
      // diff알고리즘

      container.appendChild(renderReadlDOM(component));
    };
  })();
  ```
  참고 :[https://velog.io/@dnr6054/React를-만들어보자-1-createElement와-render](https://velog.io/@dnr6054/React%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90-1-createElement%EC%99%80-render)
- virtual DOM의 비교(Reconciliation)
  위 처럼 render함수를 실행할 때, 이전 virtual DOM과 새로운 virtual DOM을 diff 알고리즘을 통해 비교한다. 이때 react는 두 가지 가정을 기반하여 동작한다.
  1. 서로 다른 타입(태그,component)는 다른 트리를 만들어낸다.
  2. 개발자가 key props를 통해서 변경되지 않을 자식 엘리먼트를 알려줄 수 있다.
  위 가정을 가지고 비교 동작을 알아보자
  컴포넌트의 루트 엘리먼트 타입이 다르면 react는 이전의 트리를 버리고 완전 새로운 트리를 만들어낸다. 컴포넌트의 라이프 사이클 함수인 ‘componentWillUnmount’가 실행되고 이전 DOM노드들과 이전 트리의 state가 다 사라진다. 새로운 트리가 만들어지고 ‘componentDidMount’가 실행된다.
  컴포넌트의 타입이 같은 경우 두 엘리먼트의 속성을 확인하여 변경된 속성만 갱신한다. 이는 트리를 새로 만드는 것이 아닌 갱신이기 때문에 state가 유지되고 react는 변경된 속성을 반영하기 위해서 컴포넌트의 props를 갱신한다. 이때 ‘componentDidUpdate’
  를 호출한다. 그 다음 render함수를 호출하고 diff알고리즘이 결과를 비교하여 처리한다.
  이렇게 컴포넌트의 갱신으로 DOM노드 자식들을 재귀적으로 처리할 때, map을 이용하여 만든 react의 component는 기본적으로 두 개의 리스트를 순회하면서 차이점이 있다면 변경한다. 물론 좋게좋게 리스트의 마지막만 변경되면 하나만 업데이트 하면 되지만, 그 중간 최악으로 맨 앞의 아이템이 추가 혹은 삭제되면 두 번째 부터 같다고 해도 react는 모든 요소를 업데이트 친다.
  이런 문제를 해결하기 위해서 key props를 이용한다. react는 child node에 key가 있다면, key를 통해서 기존 트리와 업데이트 된 트리의 자식들을 비교한다. 고유한 키로 인해 변하지 않은 자식 노드들을 특정할 수 있고, 효율적으로 동작할 수 있게된다. 그렇기 때문에 index를 키로 주는 것은 맨 뒤의 아이템만 변경되는 이상적인 상황에서는 문제 없지만, 항목의 순서가 변경되고 맨 앞 아이템이 변경되고 하면 의도치 않게 동작하거나 성능이 떨어질 수도 있으니 key는 고유한 값을 잘 주도록 하자.
  참조: [https://ko.reactjs.org/docs/reconciliation.html](https://ko.reactjs.org/docs/reconciliation.html)
- 최적화
  앞서서 본 map으로 배열을 순회하며 만든 요소들의 변경을 더 정확히 감지하기 위해서 key를 사용하는 것 처럼, 최적화를 하는 것은 중요하다. 여기서 말하는 최적화란, 쉽게 말해서 상태가 변화할 때 변경할 필요가 없는 것들은 유지하고 변경이 필요한 것들만 새로 만드는 것이다.
  이 최적화를 위해서 사용하는 몇 가지 함수가 있다.
  - useCallback - 의존성 배열의 요소들을 기준으로 함수를 기억
  - useMemo - 의존성 배열의 요소들을 기준으로 함수의 리턴 값을 기역
  - memo - props를 기준으로 component를 기억
  이때 react의 의존성 배열은 얕은 비교 연산을 사용한다. 얕은 비교란 참조값의 비교로 내부의 값들은 비교하지 않고 참조가 변경되었는지만 확인한다.
- useState의 업데이트
  ‘react의 주요 개념은 상태의 변화에 따라 화면을 바꾼다.’ 이다. 때문에 useState에 의해서 상태가 변경될 때 화면은 바뀌게 된다. 이 작업을 동기적으로 동작하게 하면, 여러개의 state를 변경하는 동작에서 화면이 setState의 호출수 만큼 랜더링 될것이다. 하지만 react는 이 부분에서 최적화를 위해 setState를 비동기적으로 처리한다.
  react의 상태 업데이트를 batch update라고 하며 16ms동안 변경된 상태의 값들을 모아서 업데이트한다.
  때문에 setState로 변경한 값을 바로 사용하면, 이전 값이 보이는 것이다.
  [https://medium.com/tapjoykorea/react-batched-update-그리고-react-redux-connect-함수-c9779e8db1fe](https://medium.com/tapjoykorea/react-batched-update-%EA%B7%B8%EB%A6%AC%EA%B3%A0-react-redux-connect-%ED%95%A8%EC%88%98-c9779e8db1fe)
  [https://velog.io/@seongkyun/React의-setState가-비동기-처리되는-이유](https://velog.io/@seongkyun/React%EC%9D%98-setState%EA%B0%80-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0)

1. 라이프 사이클

   react의 라이프 사이클이란 react 컴포넌트의 생명주기를 말한다. react컴포넌트의 생명주기는 컴포넌트의 실행, 업데이트, 제거 시에 발생하는 이벤트들이 존재한다.

   [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

   1. 컴포넌트의 실행

      컴포넌트가 최초로 실행될 때는 Mount라고 한다. 이때 클래스 컴포넌트와 함수형 컴포넌트가 구분된다. 라이프 사이클 메소드는 클래스형 컴포넌트에서만 사용이 가능하고 함수형에서는 useEffect hook정도가 사용이 가능하다.

      클래스형 컴포넌트의 실행에서 먼저 constructor로 state를 생성하고 부모로 부터 상속받은 컴포넌트의 state를 사용하기 위해 super() 함수를 사용한다.

      이후 getDerivedStateFromProps매소드를 사용하는데 state를 갱신하는 객체를 반환하거나 null을 반환한다.

      그 다음 render함수를 호출하고 마지막으로 componentDidMount 매소드를 호출한다. 이 매소드가 호출되는 타이밍엔 render함수 이후이기 때문에 DOM을 사용하는 작업을 할 수 있다. DOM생성 이후 노드의 사이즈 등의 정보를 사용하여 모달등을 띄우는 경우 해당 메소드 내부에서 setState할 수 있으나, setState할 경우 새로 랜더링이 일어기 때문에 주의 해야한다.

   2. 업데이트

      react는 부모로 부터 받은 props가 변경되거나 내부 state의 변화가 있을 때 다시 랜더링 된다. forceUpdate함수를 써도 마찬가지 이다.

      위의 경우에 먼저 getDerivedStateFromProps 메소드가 실행된다. 그리고 shouldComponentUpdate메소드가 호출된다. 이 메소드에서 컴포넌트가 업데이트될지 없데이트 될지 결정한다. 없데이트라면 render함수를 실행하지 않는다.

      render함수가 실행되면 getSnapshotBeforeUpdate 매소드를 실행한다. 이 메소드에서 DOM의 정보를 가져와서 사용할 수 있고, return하는 값은 이후 호출되는 componentDIdUpdate메소드의 인자로 전달된다.

      ```jsx
      getSnapShotBeforeUpdate(prevProps,prevState){
      	if(prevProps.list.length < this.props.list.length){
      // 기존 props로 넘어오던 리스트 길이보다 현재 state의 리스트 길이가 길면
      			const listElement = this.listRef.current;
      			return list.scrollHeight - list.scrollTop;
      	}
      	return null;
      }
      -> snapshot의 인자로 들어간다.
      componentDIdUpadte(prevProps,prevState,snapshot){
      	// 업데이트 전 값과 render이후 값 비교
      }
      ```

   3. unmount

      컴포넌트가 제거될 때 unmount된다고 하고 이때 componentWillUnmount메소드가 실행된다. 이 메소드 내부에선 컴포넌트가 지워지기 직전이기 때문에 state의 변경 등의 작업을 하면 안되고, 컴포넌트에서 실행했던 타이머나 네트워크 요청 등을 중지시키는 등의 정리 작업이 요구 된다.

2. render함수
3. createElement함수
4. hook
5. fiber를 이용한 랜더링
