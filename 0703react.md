# react

## 여러개의 인풋들 관리

​	react 에서는 여러개의 인풋들의 상태를 관리하기 위해서 useState를 여러개 사용 할 수 있지만, 좋은 방법은 처음부터 데이터 덩어리로 관리하는 방법이다. useState의 인수로는 객체도 들어갈 수 있기 때문에 각 input에서 관리할 데이터를 넣어준다.

```
const [inputs,setInput] = useState({name:"",nickname:""});
```

비구조화 할당으로 useState의 첫 아이템을 inputs에 두번 째 아이템을 setInput에 할당한다. 그 후에 관리할 데이터의 상태를 inputs에서 가져온다. 

```
const {name,nickname} = inputs
```

react에서 useState를 이용한 배열의 업데이트는 불변성을 지키기 위해서 기존의 배열을 한번 복사하고 업데이트해야한다.

```
setInputs({
	...inputs,
	[name]:value
})
```



변화되는 데이터를 들을 담는 곳은 input의 어트리뷰트 이기 때문에 input태그에 해당 데이터를 담을 어트리뷰트가 있어야한다.

```
<input value={name} name={name}>
<input value={nickname} name={nickname}>
```



## useRef로 DOM 선택하기

react에서는 document.getElementById 나 querySelector등 을 이용해서 돔을 컨트롤 할 수 없다. 때문에 ref함수를 import해서 사용해야 한다. 

```
inport {useRef} form "react"
```

그 후에 ref함수를 호출하고 난 반환값을 넣어줄 변수를 선언한다.

```
const nameInput = useRef();
```

그리고 컨트롤 해야하는 혹은 이벤트에 연관되어 있는 DOM에 ref 어트리뷰트를 부여한다.

```
<input type="text" name="name" ref={nameInput}
```

이렇게 되면 이 ref함수의 반환값을 담은 변수 nameInput의 current라는 키에 DOM객체가 들어가게 된다.

```
nameInput.currentTarget.classList 등의 함수를 사용할 수 있음
```

