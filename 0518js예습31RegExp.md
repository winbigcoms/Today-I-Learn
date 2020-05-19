# 정규 표현식

일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어. 패턴 매칭기능을 제공한다.

패턴매칭이란 특정 패턴과 일치하는 문자열을 검색하거나 추출, 치환할 수 있는 기능을 말한다.



## 정규 표현식의 생성

정규표현식의 생성은 표현식과 생성자 함수가 존재한다. 

```
const regexp = /regexr/i  >>> regexr:패턴 i:플래그
```

| 플래그 | 의미        | 설명                                      |
| :----: | :---------- | :---------------------------------------- |
|   i    | Ignore Case | 대소문자를 구별하지 않고 검색한다.        |
|   g    | Global      | 문자열 내의 모든 패턴을 검색한다.         |
|   m    | Multi Line  | 문자열의 행이 바뀌더라도 검색을 계속한다. |

플래그의 조건에 따라 패턴의 내용을 검색하는 게 주요한 역할

패턴의 조건

| 기호   | 역할                                                         |
| :----- | ------------------------------------------------------------ |
| ...    | .의 숫자만큼의 자릿수의 문자열을 검색                        |
| +      | +앞의 문자가 한번 이상 반복되는 문자열을 모두 검색           |
| \|     | or, \|양옆의 문자열중 하나라도 포함된 문자를 검색(글자로 쪼개짐) </br> <br />안쪼개 지게 하려면A+\|B+이렇게 해야함 |
| []     | 대괄호 내부의 문자는 or로 동작한다. [AB] = A\|B              |
| -      | 대괄호 내부에서 범위를 지정 [A-Za-z] : 대소문자 모두 검색,[0-9]: 숫자검색 |
| /d,/D  | /d = [0-9] /D는 /d와 반대로 동작 즉 숫자가 아닌 문자 검색    |
| /w, /W | /w = [A-Za-z] /W는 /w와 반대로 동작 [^A-Za-z 즉 영문알파벳이 아닌문자열 |
| ^      | 패턴에서 문자열의 처음을 의미 /^hi/ :hi로 시작하는지 검사    |
| $      | 문자열의 끝을 의미 /hi$/  : hi로 끝나는지 검사               |
| \s     | 공백                                                         |
| {}     | 범위지정 {1-9} : 1에서 9자리                                 |



### RegExp.prototype.exec

문자열에서 패턴을 검색하여 매칭 결과를 배열로 반환, 없는 경우 null

```
regExp.exec(target); // -> ["is", index: 5, input: "Is this all there is?", groups: undefined]
```

exec는 g플래그를 세워도 첫 번째 결과가 나오면 끝난다.



### RegExp.prototypr.test

문자열에서 패턴을 검색하여 매칭결과를 불리언 값으로 반환한다.

```
const target = 'Is this all there is?';
const regExp = /is/; >> 문자열 is가 있는지 검사

regExp.test(target); // -> true
```

### String.prototype.match

정규표현식을 인수로 받아 호출한 문자열과의 매칭정보를 문자열로 반환한다. 정규식에 g플래그가 존재하면 결과만 배열로 반환한다.

```
const target = 'Is this all there is?';
const regExp = /is/;

target.match(regExp); // -> ["is", index: 5, input: "Is this all there is?", groups: undefined]

const regExp1 = /is/g;

target.match(regExp1); // -> ["is", "is"]
```



## 자주쓰는 정규표현식

1. 특정 단어로 시작

   ```
   regExr = /^검색단어/
   ```

2. 특정 단어로 종료

   ```
   regExr = /검색단어$/
   ```

3. 숫자인지 검색

   ```
   regExr = /^\d+$/
   ```

4. 공백체크

   ```
   regExr = /^[\s]+/
   ```

5. 조건 체크

   ```
   const id = 'abc123';
   
   // 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4 ~10자리인지 검사
   // {4,10}: 4 ~ 10자리
   const regExr = /^[A-Za-z0-9]{4,10}$/;
   
   regExr.test(id); // -> true
   ```

6. 메일 형식

   ```
   const email = 'ungmo2@gmail.com';
   
   const regExr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
   
   regExr.test(email); // -> true
   ```

7. 전화번호 형식

   ```
   const cellphone = '010-1234-5678';
   
   const regExr = /^\d{3}-\d{3,4}-\d{4}$/;
   
   regExr.test(cellphone); // -> true
   ```

8. 특수문자 포함체크

   ```
   const target = 'abc#123';
   
   // A-Za-z0-9 이외의 문자가 있는지 검사
   let regExr = /[^A-Za-z0-9]/gi;
   
   regExr.test(target); // -> true
   
   // 아래 방식도 동작한다. 이 방식의 장점은 특수 문자를 선택적으로 검사할 수 있다.
   regexr = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
   
   regExr.test(targetStr); // -> true
   
   // 특수 문자 제거
   regExr.replace(regexr, ''); // -> abc123
   ```

   