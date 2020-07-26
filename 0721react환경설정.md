scaffoling - 환경세팅

각 프레임워크의 공식 scaffolding 툴이 존재 / angular.cli, vue.cli, create-react-app

npx란 - npm 5.2버전 이상부터 함께 설치된 명령어

존재 이유 - 버전을 체크하여 높은 버전을 사용하게 만든다.

노드 모듈즈의 .bin폴더 파일을 실행

react - 컴포넌트 만드는 놈

react-dom - 컴포넌트로 DOM트리 만드는 놈

react-scripts - create-react-app 에서 사용

### package.json

npm start : 개발서버로 연다

npm run build : 미니파이 된 상태에서 보여줌, build폴더 생성, 제품으로 생각

자바스크립트 해쉬값으로 파일의 고유성: 브라우저 캐시에 문제 없도록

npm serve -s   → 없는 페이지를 index.html로 설정해주는것 s= spa

test → 테스트용(jest)

eject → 소스코드를 빼는 용도 / npm run eject / create-react-app에서 추가적인 환경설정을 위해서 세팅(webpack, babel 설정은 eject하지 않으면 세팅 불가능 왜? react가 자체적으로 가지고 있어서)

Ci - continueous integreaction ( 지속적 통합)

-D : 개발할 때만 사용하려고 할때

npx eslint —init :

prettier > 코드 정렬해주는 기기, eslint와 충돌  나지 않게 eslint-config-prettier 를 설치 후 설정

## husky

-git hook made easy / commit 시에 코드를 이쁘게 해주는 기기

반드시 git 이 있는 상태에서 설치, create-react-app에서는 자동으로 .git 설치

lint-staged

"lint-staged":{

"**/*/js?(x)":["eslint --fix","prettier --write","git add"]

},

# 환경 설정 정리

1. npm init -y

2. npx create-react-app test

3. prettier 설치

   ```jsx
   npm i prettier eslint-config-prittier -D
   ```

4. 허스키 설치

   ```jsx
   npm i husky -D
   ```

5. lint-staged 설치 : commit한 것만 lint,prettier돌려줌

   ```jsx
   npm i lint-staged -D
   ```

6. package.json에서 코드 설정

   ```jsx
   "eslintConfig": {
       "extends": [
         "react-app",
         "prettier"
       ],
       "rules": {
         "semi": []
       }
     },
     "husky":{
       "hooks": {
         "pre-commit":"lint-staged"
       }
     },
     "lint-staged":{
       "**/*js?(x)" : [
         "eslint --fix",
         "prettier --write",
         "git add"
       ]    -> js나 jsx파일만을 컴파일한다.
     },  
   ```

# React 컴포넌트 만들기

class / function

## 클래스형

```jsx
import React,{Component} from "react";

class ClassComponent extends Component{
	render(){
		return(
			<div>
					<h1>난 클래스형 컴포넌트야</h1>
			</div>
		)
	}
}
```

1개의 파일에 1개의 컴포넌트 - 컴포넌트 명은 파일명에서 나옴

### 상태 - props, state

props란? 컴포넌트 외부에서 컴포넌트에게 주는 데이터

<ClassComponent name="백승일" age={26}>자식들</ClassComponent>

→ {name:"백승일", age: 26, children: 자식들} = props

props의 기본 값 children → 없으면 undefined

/여담 /

라이브러리를 받을 때 props의 사용법을 알아야하는 데 알려주는 것

1. flow
2. typescript

/여담/

컴포넌트별 props접근

```jsx
/ class
render(){
	this.props
}

/Function
function({children, name, ...}){
}
```

컴포넌트별 defaultProps 설정

```jsx

```

props가 변하면 render함수를 다시 호출!