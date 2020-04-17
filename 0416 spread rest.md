spread  - 기존 객체를 복사하고 추가 정보를 넣어줄 때

```
const monster ={
	level:1,
	name:mushroom,
}

const orangeMushroom ={
	...monster,
	// ...객체명 하면 그 객체의 내용이 다 들어온다.
	color: orange
}
const blueMushroom ={
	...orangeMushroom,
	color: blue
	// 이렇게 키값이 중복되서 선언되면 덮어 씌워진다, 단 컬러를 스프레드 이전에 선언하면 스프레드값이 들어가겠지
}
const mushMom{
	...orangeMushroom,
	size: big
}
```

spread 연산자는 배열에서도 사용이 가능하다.

```
const monster =[ 달팽이, 파란달팽이, 빨간달팽이];
const 리스항구몬스터 =[...monster,슬라임,돼지,리본돼지];

또 spread 연산자는 한 배열 안에서 중복 사용도 된다.

const 헤네시스몬스터 = [...monster, 주황버섯, ...monster]
```



rest : 객체, 배열, 함수의 파라미터에서 사용

객체에서의 사용 - 비구조화 할당

```
const 주황버섯 = {
	레벨: 6,
	이름:주황버섯,
	서식지:[헤네시스, 커닝시티]
}

const { 레벨, ...rest} = 주황버섯;
이때 레벨에는 주황버섯.레벨 이들어가고 rest에는 그 나머지 객체가 들어간다.
console.log(rest) > 
obj{
	이름:주황버섯,
	서식지:[헤네시스, 커닝시티]
}

이때 rest라는 이름이 고정된 건 아니다. 파라미터처럼 사용된다.
```

배열에서의 사용 - 비구조화 할당

```
const 버섯 =[주황버섯,파랑버섯,좀비버섯,머쉬맘,좀비머쉬맘]

const [one,two,...rest] = 버섯;
이때 one = 주황버섯, two = 파랑버섯 rest는 나머지 배열의 아이템들이 들어 간다. rest= [좀비버섯, 머쉬맘, 좀비머쉬맘]

단 나머지라는 의미이기 때문에 비구조화 할당 선언에서 가장 먼저 사용 될 수는 없다.
ex) const [...rest,last] = 버섯 ( X )
```

함수 파라미터에서의 사용 

```
함수의 파라미터가 몇 개가 될 지 예상할 수 없을 때 사용
function 잡을몬스터(...rest){
	return rest.reduce((sum,parms) => 
		if parms.length < sum ? sum++ : return sum;
    	return `잡을 몹은 ${rest}이고 ${sum}종`
	,0)
}

const 일퀘 = 잡을몬스터(스톤골램, 이블아이, 주니어네키);
> 잡을 몹은 
```

함수 인자에서의 사용

```
const 몹 = [달팽이, 파란달팽이, 빨간달팽이];
const 퀘스트 = 잡을몬스터(...몹)
> 인자의 위치에 배열이 들어감
```

