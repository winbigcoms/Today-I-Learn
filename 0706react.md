# react

 ## 배열의 랜더링

React 내부에서 컴포넌트를 여러개 생성할 수 있음 즉 랜더링할 아이템을 만들어주는 컴포넌트와 App에 배포하는 컴포넌트로 구분

```
function MakeTag ({user}) => {<div><b>{user.name}</b><span>{user.age}</span></div>}
export default function UserList () => {
	return (
		<MakeTag user={userList[0]}
		<MakeTag user={userList[1]}
		<MakeTag user={userList[2]}
	)
}
```

리액트는 DOM에 그려지는 부분의 컴포넌트에 return 의 배열이 있으면 랜더링함

```
return (
	[
		<div>하이</div>
		,<div>하이</div>
		,<div>하이</div>
	]
)
```

때문에 map함수를 사용하면 편리함

```
let UserList = [
	{
		id:1,
		name:"백승일"
	},
	{
		id:2,
		name:"백승일"
	},
	{
		id:3,
		name:"백승일"
	}
]
return (
	UserList.map(user => {
		return (<div>{user.id}</div>)
	})
)
```

단 jsx문법상 return 되는 태그는 항상 하나의 태그 혹은 하나의 태그로 감싸져 있어야한다.

```
return (
	UserList.map(user => {
		return (
			<>
				<div>{user.id}</div>
				<div>{user.name}</div>
			</>
		)
	})
)
```

또한 배열을 랜더링할 때 경고로 primaryKey가 없다고 알려주는데 이는 랜더링 성능에 관련된 문제이다. 만약 키가 없다면 react가 배열을 랜더링 할 시에 아이템이 추가되면 추가된 아이템의 인덱스 번호와 같은 아이템을 추가된 아이템으로 변경시키고 그 뒤로 다시 변경하거나 만들어낸다. 하지만 고유 키가 존재한다면 변경할 것 없이 키만 변경되고 그 사이에 끼워넣는 형식이 된다. 이는 아이템의 삭제에서도 마찬가지 인데, 고유키가 없는 상태에서 배열 중간 아이템이 삭제되면 삭제된 인덱스 부터 모두 변경하지만 키가 있으면 중간에서 빼내는 식으로 움직인다. 이 키가 존재하지 않을 경우 인덱스 번호를 키로 사용하기도 하지만 그닥 효율적인 방식은 아니라고 한다.



## useRef로 변수 만들기

useState로 변수를 선언하면 DOM이 리랜더링 된다. 하지만 useRef로 변수를 선언하면 리랜더링 없이 기존에 가지고 이던 변수를 재할당할 수 있다.

```
const nextId = useRef(4);
function onCreate = () => {
	nextId += 1;
}
```

https://www.codebeast.dev/usestate-vs-useref-re-render-or-not/