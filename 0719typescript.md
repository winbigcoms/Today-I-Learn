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

1. count - number(디폴트) 등등

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

   ## interface

   ```
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
   	name:string;
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
   ```

## generics

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