# createContext, useContext

react의 컴포넌트 구조상 props를 여러번 태워서 하위 컴포넌트에 전달해줘야할 때가 있다. 이때 여러번 태워서 보내기 보다 하위 컴포넌트가 바로 참조할 수 있는 전역 상태를 사용해주면 편리하다.

```
app에서 먼저 전역 상태를 만들어준다.

import {CreatContext} from "react"

하위 컴포넌트에서 참조 가능하도록 반출
export const userDispatch = CreateContext("초기값");

전역 상태를 사용할 컴포넌트를 CreateContext로 감싸기
return (
	<UserDispatch value={전달할 값}>
		<component/>
	</UserDispatch>
)
```

이렇게 감싸주면 하위 컴포넌트와 공유하는 전역 상태를 만들어준다.

```
import {useContext} from "react"
import {UserDispatch} from "./App"

const dispatch = useContext(UserDispatch)
```

이렇게 하위 컴포넌트에서 바로 사용이 가능하다.



<hr>

헷깔려서 다시 

```
const myContext = createContext('defaultValue') // context기본값 설정

const text = useContext(myContext) ; //context기본값 사용법

<myContext.provider value="fixedText"> // 변경된 값을 사용
	<parent>
</myContext.provider>
```



