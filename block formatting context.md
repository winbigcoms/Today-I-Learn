block formatting context

​	정의: 웹 페이지의 블록 레벨 요소를 렌더링 하는데 사용되는 css의 비주얼 서식 모델 중 하나.

-mdn

 	쉽게 말해서 다음과 같은 조건중 하나면 block formatting context란다

-float이 none이 아닌 객체

-position이 static이나 relative가 아닌 객체

-display가 table류,inline-block, inline인 객체

-overflow가 visible이 아닌 객체

즉 위의 조건을 하나라도 만족시키면 bfc라고 부를 수 있다.