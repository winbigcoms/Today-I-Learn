지금 까지 이야기

### props : 부모컴포넌트에서 자식 컴포넌트에게 주는 값, 상태

## state : render를 다시 하게 하는 상태((항상 객체)

// 라이프 사이클 훅

컴포넌트의 생명주기(컴포넌트마다 생명주기가 다름)

첫 랜더 한 직후 : componentDidMount

state의 경우 직접적인 변경을 하는 것이 아닌 setState함수를 통해서 변경하도록 경고한다.(뮤테이트 금지) → 최적화와 관련

setState() 사용법

1. 객체를 인수로 할당(this가 존재할때)
2. 함수를 인수로 할당(this없을때)

state의 초기화 방법

1. state에 초기화
2. constructor

JSX에서는 객체를 파싱할 수 없으니 JSON.stringfy를 이용한다. 단 여러 키가 존재하면 setState할 때 모두 써줘야한다. 그래서 스프레드 문법을 많이 사용한다.

state가 변경되어야 props가 변경된다. props는 부모가 주는것, 주는 것은 가지고 있는 것, 가지고 있는 것은 state

## 이벤트 핸들링

in jsx

<button onClick={()⇒{}}/>

in js button.addEventListener("",()⇒{})

인라인으로 이벤트 핸들러를 작성하는 것은 최적화에 좋지 않음

클래스의 함수로 만드는 방법

1. click1 () {} ⇒ this가 undefined, this 바인딩을 위해서 constructor 안에서 bind(this)를 해줘야한다. 혹은 데코레이터를 사용한다.(@autobind)
2. click2 = ()⇒{} this가 컴포넌트

## 컴포넌트의 라이프 사이클

...클래스 컴포넌트의 랜더링부터 화면에서 사라 질 때 까지

생명주기를 통한 코딩 - Declarative

1. initalizatino, Mount탄생
   - constructor를 통한 state,props 세팅,
   - componenetDidMount
2. 탄생 후
   - render
3. 사라지기 직전
   - componentDidMount

*componentWillReceiveProps ( props만 변경시에 state와 같이 변경 시 시작지점*

*shouldComponentUpdate ( state만 변경시에 시작지점*

*componentWillUpdate ( 인수로 nextProps,nextState가 들어옴. 함수의 리턴 값이 true일 경우만 다음 단계 진행, false인 경우 렌더링을 하지 않음. 중요한 이유는 조건부 랜더링의 분기점이 된다.*

***render\***

*componentDidUpdate*

componentWillUnmount

/*

DidMount에서 실행한 코드를 WillUnmount에서 타이머 같은 코드를 ㄴ정리한다. 또 서버에 요청한 자료가 오지 않았으면 WillUnmount에서 res 중단시키기

*/

componentWillMount → getDerivedStateFromProps = static 메소드로 this를 사용할 수 없다. return은 state,  시점은 render 전

componentDidMount

*shouldComponentUpdate*

render

*componentWillUpdate (DOM 적용)*

*componentDidUpdate*

componentWillUnmount

## Component 에러 캐치

ComponentDidCatch → 하위 컴포넌트의 에러를 캐치하면 실행됨. react-error-boundary API를 사용한다. 하위 컴포넌트의 에러를 잡기위해서 최상위 컴포넌트인 index.js에 위치해야한다.

# 리액트 라우팅하기

react-router-dom사용

# 수업 정리

### 이전의 이야기

- 상태는 state와 props, 부모가 주는 것은 props, 상태가 변경되면 render함수가 실행된다.

### state를 이용한 상태 관리

```jsx
클래스형
state = {
	count : 0
}
render(){
	const count = this.state.count;
	return(
		<div> {count}</div>
	)
}
```

이 state를 업데이트하는 함수는 랜더링 할 때 마다 생성할 필요가 없다. 때문에 render함수 밖에 선언한다. 또한 랜더링 시점에 따라 여러 라이프 사이클 훅이 존재하며 컴포넌트가 랜더링 된 직후의 시점은 componentDidMount(){}함수를 이용해서 접근 가능하다.

```jsx
export default Class Timer extends Component{
	state = { count:0};
	componentDidMount(){
		//this.state.count ++ -> react에서 상태값을 직접적으로 변경하는 것은 금지
		this.setState({...this.state,count: this.state.count++});
		this.setState(state=>({count:state.count+1}))
		// setState의 두 가지 방법, 차이는 this를 쓰냐 안쓰냐
	}
	render(){
		return()
	}
}
```

## 이벤트 핸들링

```jsx
jsx 
	<button onClick={함수}>버튼</button>
js
	button.addEventListener("click",함수)
```

jsx에서 만든 코드는 js처럼 변경된다. 때문에 이벤트는 항상 카멜케이스를 써야한다.

```jsx
export default class Button extends component {
	//this 함수 내부에서 this를 사용할 때 this 바인딩
	constructor(props){
		super(props);
		this.click = this.click.bind(this);
	}
	//근데 그냥 화살표 함수를 사용하면 된다.
	render(){
		return (
			<button onClick={this.click}></button>
		)
	}
}

click(){
	console.log()
}

click = ()=>{
	console.log(this)
}
```

## 컴포넌트의 라이프 사이클

- 여러 지점에서 개발자가 작업 가능하도록 오버라이딩 가능하게 만들어 준다.
- 생명주기 오버라이딩 : Declarative
- 3단계 : Mounting / update / unmount

Mounting - initalization,Mounting

- initialization : props와 state를 세팅한다. (constructor)

  ```jsx
  constructor(props){
  	super(props)
  	this.state = {}
  }
  ```

- Mounting : 세팅 직후

  - componentWillMount : 컴포넌트가 보이기 직전
  - render : 컴포넌트 렌더링 과정
  - componentDidMount : 컴포넌트 랜더링 직후

16.3v 이후에 이름이 변경됨

componentWillMount → getDerivedStateFromProps: props에서 state를 가져옴

Update - props,state의 업데이트

- componentWillReceiveProps

  props가 변경 될 때에만 호출되는 훅, state가 변경될 땐 호출하지 않음, 단 props와 state가 동시에 변경될 때 호출한다.

- shouldComponentUpdate

  state가 변경될 때 라이프 사이클 시작지점

  ```jsx
  shouldComponentUpdate(nextprops,nextState){
  	return true
  }
  ```

  인수로 변경된 props와 state가 들어오며 return 값은 boolean이다. true인 경우 다음 단계인 componentWillUpdate로 넘어가며 false인 경우 렌더 하지 않는다.

- componentWillUpdate

- render

- componentDidUpdate

Unmount - 화면에서 사라짐

- componentWillUnmount - componentDidMount에서 건 타이머나 코드의 마무리를 해주는 시점. 중요하다. 또한 비동기 통신으로 요청한 데이터가 도착하기 전에 화면에서 내려가게 되면, 요청을 중지하는 코드도 필요

16.3v 변경 사항

componentWillMount , componentWillReciveProps ⇒ getDerivedStateFromProps / prop로 부터 state를 만드는 시점

```jsx
getDerivedStateFromProps(nextProps,preState){
	변경된 props와 기존의 state를 비교해서 다르면 변경 같으면reutn
}
```

componentWillUpdate ⇒ getSnapshotBeforeUpdate

- 가상 돔과 현재 돔을 비교한 직후 실제 DOM의 변경 직전
- 변경전과 후의 DOM의 정보가 필요할 때( 스크롤 위치 값의 고정 등)

```jsx
getSnapshotBeforeUpdate(){} -> return 값은 snapshot으로
componentdidUpdate의 3번째 인자로 들어감
```

변경 된 순서

1. constructor
2. getDerivedStateFromProps
3. shouldComponentUpdate
4. redner
5. getSnapshot(dom에 적용_
6. componentDidUpdate

## Component의 에러캐치

렌더 실패했음을 알려주는 페이지를 보여준다. 에러는 컴포넌트를 따라 흐름으로 최상위 부모 컴포넌트에 설정을 해준다.

- componentDidCatch

  ```jsx
  npm i react-error-boundary
  ```

  때문에 index.js에서 app컴포넌트를 감싸준다.

  ```jsx
  <ErrorBoundaries fallback=({<ErrorPage/>})>
  	<App/>
  </ErrorBoundaries>
  ```

## React Routing

기존의 라우팅은 주소를 이용해서 서버에 요청을 하는 방식이지만 ,csr의 경우 이미 최초 요청에서 모든 페이지를 가져왔기 때문에 따로 요청을 할 필요는 없다.

1. 브라우저에 최초에 '/' 경로로 요청하면 페이지를 보여준다.

```jsx
npm i react-router-dom
return App(){
	return(
		<BrowserRouter>
				<Route path="/" component={}/ exact> // 기본 주소는 완벽히 일치해야한다는 조건 exact
				<Route path="/about" component={} exact/>
				<Route path="/about/test" component={}/>
				<Route path="/profile" component={}/>
		</BrowserRouter>
	)
}
```

## Dynamic 라우팅

- url 뒤에 /data 이렇게 사용하는 요청을 인식해서 랜더링

```jsx
<Route path="/profile/:id" component={}/>

profile

	export default function Profile(props){
		//react-router-dom이 props에 주소값을 넣어준다.
		//props = {history:{},location:{},match:{}}
		// id로 넘어오는 값은 props.match.params.id로 들어온다.
		// 단 이때 숫자가 아닌 문자열이 들어온디.
		if(isNan(props.match.params.id)) reuturn <div>profile</div>
		return (<div>{+props.match.params.id}</div>)
	}
```

- 쿼리스트링 받기

  ```jsx
  About
  
  	export default function About(props){
  		// props.location.search  에서 쿼리스트링을 얻어낸다.
  		// urlSearchParams - 브라우저 전역 객체로 쿼리스트링을 뽑아준다.
  		const name =	new URLSearchParams((props.location.search)).get('name'); 
  		// 반환값은 문자열 혹은 null이다.
  
  // 위 처럼 값을 찾아가기 힘드니 라이브러리를 사용한다.
  // npm i query-string
  		const {name} = queryString.parse(props.location.search);
  		if(name === undefined) {
  			return <h1></h1>
  		}
  		return (<div>{name}</div>)
  	}
  ```

## Switch 와 NotFound

```jsx
<BrowerRouter>
	<Switch>
		<Route path="/about" component={} exact/>
		<Route path="/about/test" component={}/>
		<Route path="/profile" component={}/>
		<Route component={notFound}
	</Switch>
</BrowserRouter>
```

path에 일치하지 않는 주소라면 not Found페이지를 보여준다. switch를 사용할 때 path를 역순으로 정리해줘야한다.

## Link로 라우팅

기본적으로 a 태그를 이용해서 페이지를 이동하지만, Link를 이용하면 통신없이 변경가능하다.  결국 a태그로 랜더링 되긴한다.

```jsx
<Link to="">여기로</Link>
```

### NavLink

active 되면 특정 행위를 하도록 설정이 가능하다.

## js로 라우팅

```jsx
location.href = "/" 를 이용 할 수 있지만 하지 않는다.

function About({histroy}) {
	return(
		<button onClick={click}></button>
	);

	function click(){
		history.push("/"); // 페이지 이동
	}
}
```

### withRouter

withRouter() 를 이용해서 props를 전달해준다.. 이런 것을 HOC라고한다.

HOC는 컴포넌트를 인자로 받아서 새로운 컴포넌트를 리턴하는 함수이다.

```jsx
기존이라면 부모 컴포넌트에서 하위 컴포넌트로 props를 넘겨주어야 하지만 하위 컴포넌트가 어느
위치에 있든 조상이 가지고 있는 props를 사용할 수 있다.
/login
import {widthRouter} form "react-router-dom"

	export defualt function Login({history}) {
		<LoginBtn/>
	}

/LonginBtn
	function LoginBtn({history}) {
		return (
			<div><button onClick = {click}>로그인</button></div>
		)
		function click(){
			setTimeout(()=>{
				history.push("/");	
			},1000)
		}
	}
export default widthRouter(LoginBtn);  ->login 컴포넌트에서 Btn컴포넌트로 props를
주지 않았지만 widthRouter라는 react-router-dom의 함수를 이용하면 부모의 props를 사용할 수
있다.
```

## redirect

특정 조건에서 화면을 랜더링 해야 할 때 사용한다. ex) 로그인이 필요한 페이지

```jsx
/About 
isLogin ? <Redirect to="/"/> : <Login/>
-> 로그인을 체크하는 상태를 확인하여 로그인되어 있으면 메인 페이지로 이동, 비로그인 상태라면
로그인 페이지로 이동
```