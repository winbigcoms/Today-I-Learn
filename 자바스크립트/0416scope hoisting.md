scope = 선언 

​	global( 전역변수 선언과, 지역변수 선언)

```
함수 외부에서 선언 -  전역
함수 내부에서 선언 -  지역

단 var로 선언할 경우 scope의 단위가 function으로 변하기 때문에 함수 내부의 모든 변수에 영향을 준다. const, let은 block단위 이다 {} 단위

var val = "hi"
function asd(){
	var val = "hehe";
	if(1){
		val ="soshowa";
		console.log(val) >>>> soshowa
	}
	console.log(val) >>>> soshowa
}
console.log(val) >>> hi
```

hoisting = 아직 선언되지 않은 함수 혹은 변수를 끌어다가 사용할 수 있는 기능

```
my();
function my(){} 
>> 잘 작동, 하지만 흐름상 이해하기 힘들 수 있으니 피하자
또 const, let은 hoisting이 발생하지 않는다. 선언의 서순이 중요하다.
```

