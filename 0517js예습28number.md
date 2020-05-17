# Number



## Number 프로퍼티

### Number.EPSILON

1과 1보다 큰 숫자중 가장 작은수로 부동소수점 연산이 명확하게 떨어지지 않기 때문에 사용하는 매소드이다.

```
function isEqual(a, b){
  // Math.abs는 절댓값을 반환한다.
  // a와 b의 차이가 Number.EPSILON보다 작으면 같은 수로 인정한다.
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3)); // true
```

### Number.MAX_VALUE

자바스크립트에서 표현할 수 있는 가장 큰 양수값. Infinity가 MAX_VALUE보다 크다

### Numver.MIN_VALUE

자바스크립트에서 표현 할 수 있는 가장 작은 양수값. 0은 MIN_VALUE보다 작다.

### Number.MIN_SAFE_INTEGER

자바스크립트에서 안전하게 사용할 수 있는 가장 작은 정수값

### Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY

양의 무한대와 음의 무한대를 나타내는 값으로 Infinity와 -Infinity를 의미한다.

### Number.NaN

숫자가 아님을 나타내는 숫자값



## Number 메소드

### Number.isFinite

인수로 전달된 값이 유한수인지 아닌지 확인하는 메소드. 빌트인 전역 변수isFinite와 비슷해보이지만, 빌트인 전역 함수는 암묵적 형변환을 하지만 Number메소드는 암묵적 형 변환을 하지 않는다. 때문에 숫자가 아닌 인수를 받으면 false를 반환한다.

### Number.isInteger

인수로 전달된 값이 정수인지 검사하여 그 결과를 불린 값으로 반환한다. 인수의 암묵적 형변환이 일어나지 않는다.

### Number.isNaN

인수로 전달된 값이 NaN인지 검사하여 그 결과를 불린 값으로 반환한다.

### Number.prototype.toFixed

매소드를 호출한 숫자객체를 반올림하여  문자열로 반환한다. 이때 인수로 준 숫자는 소수점의 갯수를 의미한다.

```
(123.242).toFixed(2) // "123.24"
```

### Number.prototype.toString

메소드를 호출한 숫자를 문자열로 반환하는데 인수로 전달한 숫자는 진법을 의미한다. 

```
(20).toString() // 기본은 10으로 10진법이 디폴트이다.
(20).toString(2) // "10100"
```

