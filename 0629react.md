# react 인강 1

```
react의 시작 import React from "react";
```

1. 컴포넌트의 이름은 대문자로

   ```
   function Hello (){ <div></div>}
   ```

2. 컴포넌트 방출은 export

   ```
   export default Hello
   ```

3. 컴포넌트 가져오기

   ```
   import Hello from "상대경로"
   ```

   

# jsx의 규칙

1. 태그는 반드시 닫혀있어야 한다. 닫는 태그가 없는 셀프 클로징 태그는 뒤에 닫기 슬래쉬를 쓴다

2. 두개 이상의 태그는 반드시 하나의 태그로 감싸져 있어야한다. 이때 불필요한 랩퍼를 사용하지 않으려면 fragment를 사용하면 된다.

   ```
   <>
   	<h2></h2>
   	<p></p>
   </>
   ```

3. jsx내부에서의 상수사용은 중괄호로 감싸줘야한다.

   ```
   const name = "백"
   return( <div>{name}</div>);
   ```

4. 인라인 스타일의 설정은 객체를 사용해서 한다. 숫자입력시 기본 단위는 px이다.

   ```
   const style ={
   	backgroundColor :"red",
   	zIndex : 1
   }
   <div style={style}></div>
   ```

   때문에 다이렉트로 쓰려면 중괄호로 두번 감싸줘야한다.

   ```
   <div style={{backgroundColor="red"}}></div>
   ```

   

5. 클래스 설정은 class 대신 className을 이용한다.

   ```
   <div className = "main"></div>
   ```

6. 주석의 처리는 동일하게 한다.



# props 의 전달

props란 부모 컴포넌트로 부터 자식컴포넌트로 전달되는 정보

상위 컴포넌트에서 태그의 어트리뷰트의 형식으로 정보를 전달하면 함수형 자식 컴포넌트의 경우 매개변수로 받을 수 있음. 이때의 자료구조는 객체형으로 이 것을 props라고 한다.

```
App컴포\
<Hello name="react"/>
Hello컴포\
function Hello = props => {
	return (
		<div>{props.name}</div>
	)
}
이때 비구조화 할당을 통해서 필요한 키만 가져올 수 있다.
function Hello = {name} => {
	return <div>{name}</div>
}

실수로 값이 넘어오지 않을 경우를 대비한 디폴트 값의 설정은 defaultProps객체를 설정해주면된다.
Hello.defaultProps = {
	name: "미지정 ";
}
```

컴포넌트 내부에서 다른 컴포넌트를 사용할 때 props.children을 사용해야한다.

```
App 컴포 \ 
<Wrapper>
	<hello/>
</Wrapper>
Wrapper 컴포 \ 
function Wrapper = ({children}) {
	<>
		{children}
	</>
}
```

# 조건부 랜더링

부모 컴포넌트로부터 상태를 props로 받고 그 조건에 따라 삼항조건 연산자를 사용해서 랜더링하는 방식

```
App 컴포 \ 
<Wrapper>
	<Hello isTrue={true}/>
</Wrapper>
Hello컴포 \ 
function Hello = ({isTrue}) {
	<>
		{isTrue?<h1>안녕</h1> : <H1>꺼져</H1>}
	</>
}
조건이 간단할 경우 진리값을 이용하면 편하다
{isTrue&&<h1>안녕</h1>}

```

# useState를 통한 상태관리

 react 에서 useState함수를 import 

```
import React,{useState} from "react";
```

useState 함수는 인수로 최초 상태를 입력해 줄 수 있음

```
const numberState = useState(0)
```

이 함수의 return 값은 배열로 첫 아이템은 최초상태, 두 번째 아이템은 아이템의 상태를 업데이트할 함수이다.

```
const number = numberState[0]
const settingNumberFunction = numberState[1]
```

두 번째 아이템은 settingNumberFunction을 호출 할 때 인수로 함수나 변경로직을 넣어 준다.

```
settingNumberFunction(number+1);
settingNumberFunction( number => number + 1);
```

함수 호출의 결과로 useState의 최초 상태값이 변경된다.



































