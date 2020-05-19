# String

## String 생성자 함수

String 객체는 생성자 함수 객체임으로 new 연산자로 인스턴스를 생성할 수 있다. 이 생성자함수에 인수르 전달하지 않고 new연산자와 호출하면 StringData라는 내부 슬롯에 빈 문자열을 할당한 String 래퍼 객체를 생성한다. 인수를 문자열로 주면 그대로 문자열로 나오고 문자열이 아닌 인수를 주면 형변환이 일어난다.

## length 프로퍼티

문자열의 갯수를 반환한다.

## String 메소드

String객체의 모든 메소드는 언제나 문자열을 반환한다. 문자열은 원시값으로 변경이 불가능 하기 때문이다.



### String.prototype.indexOf

indexOf메소드는 문자열에서 인수로 전달한 문자열을 검색해서 그 첫번째 결과의 인덱스를 반환한다. 실패하면 -1을 반환한다.

```
const str = "qweasd"
str.indexOf("a") // 3
str.indexOf('as') //3
```

### String.prototype.includes

es6에서 도입된 메소드로 인수로 전달받은 문자열이 호출한 문자열에 존재하는지 불리언 값으로 나타낸다.

```
const str = "qwerasdf"
str.includes('r') //true
str.includes('q',1)//false 두 번째 인수는 검색을 시작할 인덱스 번호 w부터 검색
```



### String.prototype.startsWith

es6에서 도입된 startsWith메소드는 문자열이 인수로 전달된 문자열로 시작되는지 확인하여 그 결과를 불리언 값으로 반환한다. includes와 마찬가지로 두 번째 인수로 검색을 시작할 인덱스를 준다.

```
const str = "qwer";
str.startsWith('qw') //true
str.startsWith('we',1) //true 검색을 w부터 시작
```



### String.prototype.endsWith

es6에서 도입된 endsWith메소드는 문자열이 전달받은 인수로 끝나는 지 체크한다. 두 번째 인수로 체크할 인덱스의 끝 길이를 준다.

```
const str = 'qwertasd';
str.endsWith('asd'); // true
str.endsWith('r',3); //true 0에서 3번째 인덱스까지의 문자열의 끝이 r인지 체크
```



### String.prototype.charAt

인수로 전달한 인덱스에 위치한 문자를 반환한다.

```
const str = 'hell o';
str.charAt(2) // l
```

문자열의 길이보다 큰 인수를받으면 빈 문자열을 반환한다.



### String.prototype.substring

subString메소드는 첫 번째 인수로 전달한 인덱스에 위치하는 문자부터 두 번쨰 인수로 전달한 인덱스의 위치하는 이전 문자까지의 문자열을 반환한다.

```
const srt = 'helloworld';
str.subString(5,9) // world
str.subString(5) //world
```

두 번째 인수는 생략가능하다. 이때에는 첫 번째 인수의 인덱스 부터 끝까지 반환한다. 이 메소드의 인수는 특징이 존재한다. 보통 첫 번째 인수가 두 번째 인수보다 작아야 정상인데 첫 번쨰 인수가 두 번째 인수보다 크면 두 인수는 교환되서 동작한다. 또 인수가 0보다 작거나 NaN이면 0으로 취급된다. 인수가 문자열의 길이보다 크면 인수는 길이로 취급된다. 인수가 숫자로 들어가니 indexOf메소드를 이용해서 원하는 문자열 까지 잘라낼수 있다.

```
const str = '아잉흫행홓';
str.subString(0,str.indexOf('행')) // 처음부터 행까지 자르기
```



### String.prototype.slice

slice매소드는 subString메소드와 동일하게 동작하지만 인수에 음수를 전달할 수 있다. 음수 인수는 뒤에서 부터 시작한다.

```
const str = "가나다라마바사";
str.slice(-4); // 라마바사 뒤에서 부터 4개
```



### String.prototype.toUpperCase , toLowerCase

문자열의 모든 문자를 대문자 혹은 소문자로 변경하여 반환한다.



### String.prototype.trim

문자열 앞 뒤의 공백을 제거해준다.

```
const str = " ads ";
str.trim(()) // "ads"
```



### String.prototype.repeat

문자열을 인수로 전달한 숫자만큼 반복해서 이어붙인 문자열을 반환한다. 0이면 빈 문자열을 반환하고, 유리수는 정수로 내림된다. 음수를 인수로 주면 에러가 난다.



### String.prototype.replace

문자열중에서 첫 번째 인수로 준 문자열을 검색하여 두 번째 문자열로 치환한다. 이때 검색된 문자열이 여러개 일 경우 첫 번째 문자열만 치환한다.

### String.prototype.split

첫 번쨰 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색, 구분한 후 분리된 문자열로 이루어진 배열을 반환한다. 인수가 없으면 문자열 전체를 배열로 반환한다.

```
const str = "qwe rt"
str.split("") // ['q','w','e',' ','r','t'] 모든 문자열을 쪼개서 반환
str.split(' ') // ["qwe","rt"] //빈 공백을 기준으로 

```

