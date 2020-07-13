# useMemo

useState에 의해서 상태가 변경이 되면 컴포넌트가 다시 랜더링이 된다. 때문에 그때마다 컴포넌트 내부의 함수가 다시 실행이 되는데 이런 메모리 낭비를 막기위해서 기존의 계산된 값을 재사용하는 목적으로 useMemo를 사용한다.

구조는 useEffect와 동일하다

```
import {useMemo} from"react'
function counter(user){}
const useCounter = useMemo(()=>counter(user), [관리할 상태정보])
```

# useCallBack

 컴포넌트가 생성될 때마다 함수를 생성하는 것은 그리 큰 자원소모는 아니나 재사용이 가능하다면 하는 것이 좋다. 때문에 useCallBack을 이용해서 deps의 상태변화가 없을 경우 기존에 만든 함수를 사용하기 위해서 사용한다.

```
import {useCallBack} from "react";
function fuc1 = ()=> {}
const useFuc1 = useCallBack(()=> fuc1(), [states])
```

# React.memo

컴포넌트가 하나 바뀌는데 모든 컴포넌트가 리랜더링 되는 것을 방지하기 위해서 관리하는 상태가 변경되지 않으면 컴포넌트의 리랜더링을 막아주는 함수. 컴포넌트에 사용해준다.

```
export default function React.memo(function)
```

이때 컴포넌트 내부에서 사용되는 함수가 보고있는 deps도 잘 봐야하는데, 만약 어떤 이벤트 때문에 상태가 변경되고 그 상태를 컴포넌트 내부의 함수가 감지하고 있다면, 해당 함수는 변경이 되고, 그 함수를 props로 가져오는 컴포넌트도 변경이 되기 때문에 리렌더링이 일어난다. 이때 useState의 함수 상태를 등록해주면 된다.

```
setState(관리상태 => 함수)
```

# Reducer

useState와 다르게 다르게 action객체를 기반으로 업데이트를 진행한다.

먼저 초기 상태를 컴포넌트 밖에 선언해준다.

```
const initState = {
	inputs:{},
	users:[]
}
```

컴포넌트 내부에서 useReducer를 선언함으로 준비한다. 첫 인수는 상태 변경이 일어날 시에 실행될 함수, 두번째는 초기 값을 넣어준다.

```
useReducer(reducer,initState);
```

동시에 reducer내부의 상태를 사용하기 위해 비구조화 할당을 한다.

```
const [state,dispatch] = useReducer(reducer,initState);
지금 state에 inputs와 user 가 들어있는데 이를 사용해주기 위해서 비구조화할당해준다.
const {user} = state;
const 
```

이때의 state는 useReducer에 넣은 초기값 initState가 되고, dispatch는 reducer를 실행할 함수가 된다.

reducer의 실행 구분은 보통 switch로 한다. 

```
dispatch({
	type:"???",
	name:"",
	age:""
})
```

이렇게 dispatch의 인수로 객체를 넘겨줄 때 이벤트의 타입을 적어서 호출하면 reducer함수에서 받을 수 있다.

```
function reducer(state,action) {
	switch (action.type) {
		case: "???" :
			return 
		default ;
	}
}
```

dispatch함수를 호출하면 useReducer를 선언 할 때 인수로 넘겨준 첫 번째 함수가 호출이 되어진다.  여기서는 reducer함수가 호출이 되는데, 이 reducer함수의 첫 인수는 useReducer의 초기값이 들어가며 두 번째 인수로는 dispatch에서 넘어온 인수가 들어간다. 이 두 번째 인수를 action이라고 한다.

```
dispatch({
	type:"???",
	name:"",
	age:""
}) ----> 실행

function reducer(state,action) {
	switch (action.type) {
		case: "???" :
			return 
		default ;
	}
}
---- 
이때 state 는 {
	inputs:{},
	users:[]
}
action은 {
	type:"???",
	name:"",
	age:""
}
```

