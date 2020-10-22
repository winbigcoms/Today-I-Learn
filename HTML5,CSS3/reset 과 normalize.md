reset 과 normalize의 차이점!



​	1.reset css

​	css의 모든 태그의 agent속성을 덮어씌워서 margin,padding 등의 값을 0으로 만드는 css, 사용하지 않는 태그까지 덮어씌우기 때문에 약간이지만 쓸모 없는 데이터가 들어 갈 수 있다. 하지만 일반적으로 css작업을 할 때 적용하는 box-sizing이나 ul,ol태그의 list-style등의 속성을 수정하고 시작하기 때문에 css의 반복을 줄일 수 있다.	

​	

​	2.normalize

​		html과 css는 각 브라우저 마다 적용되는 로직이 다를 수 있다. 모든 회사가 천편일률적으로 브라우저를 만들지는 않았을 테니까, 그래서 사용하는 css파일이 바로 normalize css파일이다. reset css처럼 덮어씌우는 것 처럼 보이기 때문에 reset css와 같은 역할인가 라는 착각을 할 수 있지만, normalize의 경우는 모든 브라우저에서 태그스타일이 동일하게 나타나게 함에 중심을 같는다. 그렇기 때문에 앞서 맢한 box-sizing이나 ol,ul의 list-style를 초기화 시켜주지는 않는다.



결론

​	reset을 하고 normalize를 하자 아니면 두 개를 합친 뭔가를 만들어 보자

​	