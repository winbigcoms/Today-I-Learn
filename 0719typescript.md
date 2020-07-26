# 타입스크립트 

자바스크립트의 타입 : 약한 타입으로 코드가 실행되어야 실수한지 안한지 알 수 있다. > 타입스크립트에서 한번 컴파일 할 때 에러 체크를 해준다.

장점 : 

​	IDE에서 많은 도움을 받을 수 있다. 

​	실수를 방지할 수 있다.

tshandbook > 타입스크립트 설명서

``` 
yarn init -y
yarn add typescript ts-node
```

ts-node : 타입 스크립트를 콘솔에서 실행할 수 있게 해주는 API

```
yarn run tsc --init
```

설정하는 코드

타입스크립트의 확장자는 ts

```
const message : string = "hi"; // 선언 형식
터미널에 yarn run tsc > 타입스크립트를 변환 / tsconfig 파일에 설정따라 감
tsconfig 의 outDir 은 컴파일한 파일을 저장할 경로를 지정
```



## 타입스크립트의 기본 타입들

1. count - number, boolean, string 등등

   ```
   let count : number = 1;
   const message : string = "hi";
   const done : boolean = false;
   const numbers : number[] = [1,2,3];
   const messages : string[] = ["hell o world","hihi"];
   
   둘중 하나 일 경우
   let mightBeStr : string|undefined = "asd";
   let nullableNumber : number|null = 1;
   
   let color : "red"|"green"|"blue";
   
   readonly 속성을 이용해서 읽기전용으로 만들 수 있다.
   ```

   ```
   function sum(x : number, y: number) : number {
   	return x+y
   }
   매개변수의 타입을 따로 정의하지 않으면 any타입으로 지정된다.
   매개변수 선언 다음에 반환값의 타입도 선언이 가능하다.
   ```

   ```
   function sumArry(numbers: number[]):number {
   	return numbers.reduce((acc,cur) => acc+cur,0)
   }
   함수의 반환값이 명시적이지 않으면 void타입이 return된다.
   
   function strOrNum() : string|number {
   	return 3;
   }
   ```

   2. 배열

      ```
      let names : string[] = ["백","tmd"] -> 타입[]
      
      여러 타입을 갖는 배열
      let infos : (string|number)[] = ["ㅇㅁㅇ",56]
      let infos : Array<string|number> = ["ㅇㅁㅇ",56]
      
      아무런 타입이나 갖는 배열
      let data : any[] =[1,"1",[],{}]
      
      커스텀 타입
      interface User{
      	name: string,
      	age: number,
      	job: boolean
      }
      
      let users : User[] = [
      	{
      		name: "beak",
      		age: 26,
      		job: false
      	},
      	{
      		name: "min",
      		age: 26,
      		job: false
      	},
      	{
      		name: "ga",
      		age: 28,
      		job: false
      	}
      ]
      ```

   3. 튜플 - 정해진 타입의 고정된 길이를 갖는 배열을 표현

      ```
      let tuple: [string, number];
      
      tuple = ["a",2]
      tuple = ["c",2]
      
      2차원 배열
      let monster : [string,string,boolean][];
      or
      let monster : Array<[string,string,boolean]>
      
      monster =[
      	["넬기","고대숲",true],
      	["진오우가 아종","빙설지역",true],
      	["네로미에로","육산호",true]
      ]
      
      정의시에 타입을 검사하긴 하지만 동적으로 push하는 등의 값을 넣어주는 것을 막을 수 는 없다.
      ```

   4. 열거형 : Enum - 숫자 혹은 문자열 값 집합에 이름을 부여할 수 있는 타입, 기본적으로 0부터 시작해서 1씩 증가한다.

      ```
      enum week {
      	sun,
      	mon, tue,wed,
      	thu,fri,sat
      }
      ->
      enum Week {
      	sun:0,
      	mon:1,
      	tue:2,
      	wed:3,
      	thu:4,
      	fri:5,
      	sat:6
      }
      이 타입은 역방향매핑도 지원한다. sun -> 0 , 0 ->sun
      결국
      enum Week {
      	sun:0,
      	mon:1,
      	tue:2,
      	wed:3,
      	thu:4,
      	fri:5,
      	sat:6,
      	0:"sun",
      	1:"mon",
      	2:"tue",
      	3:"wed",
      	4:"thu",
      	5:"fri",
      	6:"sat"
      }
      
      숫자값 뿐 아니라 문자열로 초기화 할 수 있는데, 이 때에는 역방향 매핑을 지원하지 않는다.
      ```

   5. 객체 - object : typeof가 object인 타입을 나타낸다

      ```
      let obj : object ={}, [] , function, null,new Date()
      ```

   6. 유니언 - 한번에 2개 이상의 타입을 허용하는 경우

      ```
      let union: string|number
      ```

   7. 함수 - 매개변수, 리턴값의 타입을 지정할 수있다.

      ```
      let make: (a:number, b:number) => number;
      make = function(x,y) {
      	return x+y
      }
      
      아무것도 없는 경우
      let make: ()=> void
      ```

   ### 데이터 타입의 추론

   명시적으로 타입이 지정되어 있지 않는 경우에 타입스크립트는 타입을 추론해서 제공한다. 

   ``` 
   let num = 12;
   num = "hi" // error ts2322 
   ```

   초기화하면서 숫자를 할당하면서 타입스트립트는  num을 숫자 타입으로 추론하고 문자열로 재할당하려 할 때 에러를 발생시킨다.

   타입 스크립트가 타입을 추론하는 경우는 

   	1. 초기화된 변수
    	2. 기본값이 설정된 매개변수
    	3. 반환값이 있는 함수

   가 된다.

   ### 데이터 타입의 단언

   ```
   function some(val: string | number, isNum : boolean) {
   	if(isNum) {
   		(val as number).toFixed(2);
   	}
   }
   ```

   as 키워드를 사용해서 타입을 단언할 수 있다.

   ### interaction

   2개 이상의 타입을 조합하는 경우 이를 인터렉션이라 한다.

   ```
   interface UI {
   	level: number,
   	hp : number,
   	mp: number,
   	inventory: any[]
   }
   
   interface Sys {
   	menu: any[]
   }
   
   const user : UI & Sys = {
   	level: 12,
   	hp : 300,
   	mp: 500,
   	inventory : [weapon,shild],
   	meni : [exit, setting]
   }
   ```

   

   ### guards

   변수의 타입을 보장하기 위해서 매번 동일한 단언을 사용할 경우에

   ## interface - 객체를 정의하는 규칙, 구조

   ```
   클래스 
   
   interface shape {
   	getArea(): number;
   }
   
   class Circle implements Shape {
   	radius: number;
   	constructor(radius) {
   		this.radius = radius
   	}
   	getArea(){
   		return this.radius * this.radius *Math.PI
   	}
   }
   
   class Squire implements Shape {
   	width: number;
   	height: number;
   	constructor(width:number, height:number) {
   		this.width = width;
   		this.height = height;
   	}
   	getArea(){
   		return this.width * this.height
   	}
   }
   
   const circle : Circle = new Circle(5);
   const squire : Squire = new Squire(2,3);
   
   const shapes : shape[] = [circle, squire];
   shapes.forEach(shape => console.log(shape.getArea()))
   
   constructor의 자동 할당
   constructor(public radius:number) {} -> 인스턴스에서 참조가 가능
   constructor(private radius:number) {} -> 인스턴스에서 참조 불가능
   ```

   ```
   interface Person {
   	readonly name:string; -> 읽기전용
   	age ?:number; -> ? 있을 수도 있고 없을 수 도 있음
   }
   
   interface Developer {
   	name: string;
   	age?:number;
   	skills: string[]
   }
   -> 인터페이스의 상속
   interface Person {
   	name:string;
   	age ?:number;
   }
   
   interface Developer extends Person{
   	skills: string[]
   }
   
   타입 엘리어스 > 인터페이스에서 할 수 없는 몇 가지 가능
   type Person = {
   	name:string;
   	age ?:number;
   }
   
   type Developer = Person & {
   	skills: string[]
   }
   
   타입을 커스텀하는 느낌
   type Color = 'red'|"blue"|"sky"
   const color : Color = "red";
   
   사용에 큰 차이는 없으나 일관성 있는 코드 작성, API를 위한 사용에 서는 interface를 사용하는 것을 권장하고 있다.
   
   함수 타입
   interface Iname {
   	(param : type) : return_type
   }
   
   const get User : Iname = function (n) {
   	return asd ;
   }
   ```

## generics - 재사용을 목적으로 함수나 클래스의 선언 시점이 아닌, **사용 시점에 타입을 선언**할 수 있는 방법을 제공합니다.

```
function merge ( a:any, b:any) {
	return {
		...a,
		...b
	}
}

파라미터의 타입 유추가 용이해짐
const merged = merge({foo:1},{bar:2})

function wrap<T>(param: T) {
	return {
		param
	};
}
-> 파라미터의 타입이 고정되지 않을 경우 사용, any의 경우 결과값이 any로 나오지만 제너릭스로 만들면 호출한 값의 타입이 유추됨

interface Items<T>  {
	list: T[];
};
type Items<T> = {
	list : T[];
}
const items: Items<number> = {
	list : [1,2,3]
};

결론 내부 값이 어떤 거든 되지만 any를 쓰고 싶지 않을 때 사용
```



# react 에서 typescript 사용해보기

```
npx create-react-app ts-react-tuto --typescript -> 타입스크립트 적용 상태로 react 생성

react에서의 typescript 파일 확장자는 .tsx
```

# 타입스크립트 사용하기
확장자는 ts로 자바스크립트 쓰듯이 사용한 후
tsc 파일명 --target js버전

이라는 명령어를 이용해서 컴파일한다.

