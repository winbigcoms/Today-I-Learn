# immer

react에서 객체나 배열을 고칠 때 기존의 상태를 유지하면서 새로운 상태를 만들어야한다.

```
npm install immer
```

라이브러리 이기 때문에 설치 해야함.

```
import producer from "immer"

producer(기존상태, draft => {
	상태를 변경할 방법
})
```

라이브러리를 사용하지 않는 native코드보다는 약간 느리지만 사용자들이 체감하기 힘든 차이를 보여준다.

setState의 함수업데이트를 사용할 시에 유용한데, 첫 파라미터에 기존 상태를 주지 않고 업데이트 할 방법을 갖는 함수를 준다면 업데이터로 역할을 한다.

```
const [state,setState] = useState({
	id:1,
	name:"백승일"
})
const onClick = useCallback(()=>{
	setState(
		produce(draft => {
			draft.name="삭제";
		})
	)
},[])
```

