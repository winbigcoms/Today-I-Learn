# React 

useState를 사용하여 관리중인 배열에 항목을 추가하기

React에서는 배열의 불변성을 위해서 기존의 배열을 변경하면 안되고 새로운 배열을 생성해야한다. 때문에 스프레드연산자를 이용하거나 concat메소드를 사용해서 업데이트를 한다.

```
const [user,setUsers] = setState([
	id:1,
	name:"나"
	age:12
]);

const {name, age} = user

setUsers([...user,{
	id:2,
	name:"너",
	age:12
}])
let updatedUserInfo = {
	id:2,
	name:"너",
	age:12
}
setUsers(user.concat(updatedUserInfo))
```

이와 마찬가지로  배열의 아이템을 삭제하는 것도 새로운 배열을 만들어내는 형식으로 해야한다.