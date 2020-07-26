# react-router

라우팅 : 주소에 따른 UI변화

- browserRouter : 주소만 바꾸고 재랜더링 안함

```
npx create-react-app 이름
yarn add react-router-dom
```

```
index.js

import {BrowserRouter} from "react-router-dom"

<BrowserRouter>		// BrowserRouter 페이지 이동을 브라우저에서 할 수 있게
	<App/>			// 또 이동할 때 새롭게 통신하는게 아닌 필요한 부분만 리렌더링하도록
</BrowserRouter>
```

```
App.js

import {Router, Link} from "react-router-dom"
import Home from './home'
import About from "./about"

return (
	<>
		<ul>
			<Link to="/">홈</Link> //a태그처럼 사용하나 페이지 이동시 새로고침 안함
		</ul>
		<Router path="/" component={Home} exact/> //주소에 따라 보여지는 컴포넌트
		<Router path="/" component={About}/>
	</>
)
```



```
주소에 파라미터,쿼리 넘기기

app.js

<Router path="/data/:title" component={Data}/> // 주소뒤에 콜론에 정보를 붙여보내면

data.js

function Data({match}) { 	//match에 파라미터정보 더미가 들어와서
	const {title} = match.params; // .params로 받는다.
}

about.js

import qs from "qs";	// 쿼리로 넘어오는 데이터를 파싱하기 위한 라이브러리
function About({location}) { //location에 정보 뭉치가 오면
	const query = qs.parse(location.search,{ // .search로 잡는데 모두 문자열타입
		ignoreQueryPrefix: true // 쿼리 입력시 넣은 물음표를 떼어준다.
	})
}
```

서브 라우트 > 페이지 만들시 탭이 있는 경우 활용

사용법 - 라우트 안에 라우트를 담고있는 컴포넌트

```
app.js

<Link to="/profiles">목록</Link>
<Route path="/profiles" component={Profiles}/>

profiles.js

	<li><Link to="/profiles/me">me</Link></li>
	<li><Link to="/profiles/nickname">nick</Link></li>
	<Route path="/profiles" exact render={()=> <div>선택해라</div>}/>
    <Route path="/profiles/:username" exact component={Profile}/>
```

2단 으로 구성된 페이지 링크를 만든다. 그냥 목록을 클릭하면 me,nick과 함께 선택해라가 나오고

링크를 또 클릭하면 프로파일 컴포넌트를 랜더링한다.