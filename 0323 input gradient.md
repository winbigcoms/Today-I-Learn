input type

text / password / email / image / color / file / submit / button / reset / 

label  input과 1대1 대응 > input내에 title, aria-label을 사용해서 1라벨, 2인풋 태그의 상황을 모면한다.



title(전역): 태그에 직접 삽입하는 속성으로 마우스를 태그 위에 올리면 툴팁으로 설명이 나온다. a태그, 숨김콘텐츠에 넣어주면 스크린 리더기가 읽어줌으로 접근성을 높이는 데 일조 할 수 있다.

aira-label="id", aira-labelledby: 접근성을 위한 aira 속성으로 태그와 태그간의 관계를 명시 해 줄 수 있다. form태그의 label이 그렇듯이 id값을 통해서 연결시켜 준다.



css 툴 > sematic UI as문법



aira-hidden: true(전역) : inline태그의 문자나 글이 단순 장식용이라면 그 태그에 삽입해 주는 속성. aria-hidden : ture를 주면 스크린리더기가 읽어주지 않는다.



section: 문서의 장 또는 절을 구성하는 역할

article: 본문과 연관있지만, 독립적인 콘텐츠를 담는 영역

aside: 본문에서 벗어난 이야기, 날씨, 주식 등 

html문서를 구조적으로 만들어주는 sementic 태그들, 하지만 그 태그들에 담기는 내용이 주제를 갖기 때문에 각 태그들은 h태그로 제목을 달아줘야한다. 안쓰면 문법오류~



form 태그의 fieldset > 여러개 일 수 있음, 필수와 선택의 구분

```
<form>
	<fieldset>
		<legend>필수 입력 서식</legend>
	</fieldset>
	<fieldset>
		<legend>선택 입력 서식</legend>
	</fieldset>
</form>
```

이 처럼 form안에서의 section을 구분지을 수 있다.



그라디언트 - 선형, 원형 / mdn 

선형 그라디언트

background-image: linear-gradient(방향,색 범위,색 범위) : 방향을 따라 직선형 그라디언트를 입힌다. background-image의 값으로 들어가는 함수 이다. 방향의 기본 값은 to bottom으로 설정 되어 있으며 to를 이용해서 방향을 지정할 수 있다. to right(왼-오) 등 방향을 지정할 수 있으며, 방향이 아닌 각도로 지정할 수 있다. 각도로 지정할 경우 to top(0deg), to right(90deg) 으로 지정할 수 있다.

색, 범위의 경우 범위의 0%에서 100%까지 에서 지정 할 수 있다. red 0%, yellow 100%는 빨강에서 시작해서 노랑으로 끝나는 그라디언트를 의미한다.

원형 그라디언트

background-image: radial-gradient(shape, size, at position, start color %, last color) 박스의 중심을 중점으로 타원형 혹은 원형 그라디언트를 만들어주는 값이다.

 shape 그라디언트의 모양, 원형 혹은 타원형으로 설정한다. 기본값은 ellipse

 at position 그라디언트 원의 중심점을 설정한다. at top(최상단 중심의 원 즉 반원), at bottom left(왼쪽 아래에서 시작되는 원호)등 으로 설정한다.

 color % 그라디언트의 색과 그 양을 설정한다. red 60% blue 하면 60퍼까지 빨강, 그다음부터 파랑이다.

icon-right-open >>>웹 폰트 선언(fontello)

```
.a11y-hidden, legend{
    background-color: yellowgreen;
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0 );
    /* clip: rect(0,0,0,0); */
}
```



css 의 em단위 > 현재 font-size의 값, 글자 수 만큼의 너비를 지정할 때 유용하다. 특히 text-indent를 이용한 들여쓰기를 사용할 때 유용



input text의 커서 문제 input type="text"나 "password" 의 경우에 커서가 border-left에 딱 붙어있어서 잘 안보일 때가 있으니까  padding-left를 사용해서 공간을 좀 띄워 준다.



버튼의 defalut value는 생각보다 정말 많은데 잘 생각해야 하는 부분은 padding,margin,boxsizing정도? 



!important의 사용 팁

​	동등한 css 점수를 갖지만 능동적으로 css가 변화할 때 사용.

```
div a .dsd{
	display:none !important;
}
a:hover .dsd{
	display:block 
}
```



속성선택자

~(물결) /h1[title~="asd"] > h1태그 중 title에 asd인 요소, asda는 안된다. 정확히 일치

\ / h1[title\="asd"] > h1태그중 title에 asd이거나 asd로 시작하는 요소를 선택 asda가능

^ / h1[title^="asd"] > h1태그중 title이 asd로 시작하는 요소를 선택, asd asda모두 선택

$ / h1[title$="asd"] > h1태그중 title이 asd로 끝나는 요소 선택, asd asd-a 모두 선택

* / h1[title*="asd"] > h1태그중 title에 asd가 있는 모든 요소를 선택

text-indent > 들여쓰기 디자인의 관점에서 봐보기

dl의 접근성 관점 ![로그인 세션](C:\Users\승일노트북\Desktop\로그인 세션.svg)