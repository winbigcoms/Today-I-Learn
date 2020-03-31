웹 표준 : w3c 권고안에 따른 표준 권고안
크로스 브라우징: 각 웹 브라우져에서 동일하게 작동하도록 만드는 기술
웹 접근성 : 장애인 등 조건에 제한이 있는 사용자들도 동등하게 사용할 수있게 해주는 것
ㄴ 웹접근성연구소
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
beautify : 코드 정리단축키 숏컷= 컨 알 L
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
html 정리
 헤드태그 - 정보를 나타내는 태그
 ㄴtitle 웹 페이지의 제목을 나타내는 태그
 ㄴmeta 정보종류, 인코딩 정보를 나타내는 태그	
/ <meta name="정보종류" content="정보 내용"></meta> , charset=utf-8
 ㄴlink 외부 문서를 연결할 때 사용하는 태그, html이나 css이용 
/<link rel="관계" href="경로"/> <link rel="stlyesheet" href="../asdd/asd.css"/> -> rel은 필수
 ㄴstlye css를 다이렉트로 입히는 태그
 ㄴscript 자바스크립트를 쓰거나 불러오는 태그
/ <script src="경로"></script>
 바디태그 <body></body>
 ㄴ div division으로 구역을 나누고 공간을 분할하는 역할을 함
 ㄴ img 이미지 삽입태그
/<img src="경로url" alt="이미지 대체 설명텍스트"/> ->src, alt 필수 alt의 경우 웹 표준에 결여
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
웹표준 검사하기 > w3c validator 에서 문서올리고 기본적 검사
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
css문법
 선택자 {
 속성: 값;
}
선택자 > 태그명, 클래스명, 아이디명 으로 사용
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
블록태그 : 
	사용가능한 최대 가로길이를 사용함(width:auto, height:auto 에서 콘텐츠의 높이로 변동) , 
	크기지정 가능,
	수직으로 쌓임
	margin, padding으로 상하좌우 여백 사용가능
인라인 태그: 
	콘텐츠 만큼의 가로만 사용, 
	크기 지정 불가(width:0px, height:0px), 
	띄어쓰기가 적용 되고 수평으로 쌓임
	margin,padding 좌우만 사용가능
태그 특징 변화 > display: block, inline 으로 변경
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
메타 

<meta http-equice="" content=""> -> name,http 둘 중 하나만 사용해야함, 최신 브라우져를 사용하게 하는 태그
<meta name="viewport" conten="width=device-width"> -> 기기 크기에 사이즈르 맞추게하는 태그
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
style 태그
<style type="text/css"></style> 타입의 경우 생략가능
스타일 태그는 바디태그 안에서도 사용할  수 있지만 html의 로딩 구성상 비효율적
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
a태그 링크를 설정하는 태그 
사용 가능 속성
	download > 불린 값으로 설정, 다운로드링크로 만듬
	href > 링크주소
 	rel > 링크의 관계
	target > 링크를 나타낼 탭의 위치
id 값을 href="#아이디" 로 이용해서 페이지 내 이동이 가능
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
반응형을 위한 img 태그의 속성 srcset sizes
srcset = "경로 크기","경로 크기","경로 크기" > 사용할 이미지들의 경로와 그 이미지의 원본크기를 지정
sizes= "최적화 크기 조건" > max-width, min-width 
size="(max-width: 1000px) 700px" > 너비가 1000픽셀 이하면 700px 짜리 사용
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
audio 태그
	loop 
	muted
	src
	controls
	autoplay
video 태그
	loop
	muted
	src
	autoplay
	width,height
	poster 썸네일
	controls
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
figure	이미지나 삽화 표 등의 연역을 설정 > css로 만져줘야함, 그냥 공간의 이름을 설정
	img 삽화 도표의 이미지
	figcaption 이미지에 대한 설명
<figure>
    <img src="/media/examples/elephant-660-480.jpg"
         alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption>
</figure>

ifram 다른 페이지를 삽입하는 태그

```html
<iframe src="https://www.naver.com"  frameborder="0" style="border:4px solid red";>
</iframe>
```

붉은 테두리안에 네이버가 나옴! 탭을 페이지안에 넣어두는 느낌

name: 프레임의 이름

src: 주소

width,height: 크기

frameborder: 프레임테두리

allowfullscreen : 전체화면 사용여부

sandbox : 읽기전용 불린 or allow-form(양식제출),allow-script(스크립트실행가능),allow-same-origin() / 외부의 자바스크립트의 실행을 막을 수 있음

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<canvas width="100px" height="200px">

</canvas>

자바스크립트로 사용

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

3.11

자바스크립트

속성

```<srcipt type="text/javascript" src="" async="" defer></script>```

 	async 자바 스크립트의 비동기적 실행의 여부를 체크, / 불린  / src속성을 필수로 갖는다.

 	defer  문서 로딩 후 작동 여부 / document.addeventListener(load,) / 스크립트의 위치에 따라서 				 문서로딩 이후에 작동해야 할 경우가 존재.

​	 src 	  자바스크립트를 외부에서 가져올 때의 위치.

​	 type	 mime 타입의 선언 / 기본값이 text/javascript 로 설정되어 있어서 작성 안해도 됨 

```<noscript></noscript>```

스크립트를 지원하지 않는 경우 삽입할 html 정의 / 이미지의 alt 속성같은 느낌

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

테이블!

```
<table>
	<caption></caption>
	<thead>
		<tr>
			<th colspan="2" rowspan="2"></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td></td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
            <td></td>
		</tr>
	</tfoot>
</table>
```



테이블 태그들

​	table,tr,td,th - 블럭요소 처럼 생각해서 사용 가능 / table의 display 값은 table

th 머릿글의 칸을 지정 

​	속성

​	abbr		열에대한 설명

​	colspan	가로병합 

​	rowspan	세로병합 / 형제관계의 tr에서 적용

​	scope	자신의 머릿글의 칸을 명시 / col,row,colgroup,rowgroup,

​	headers 자신의 상위 개념의 칸의 id값을 값으로 갖는다.

td 일반 칸

​	속성

​	headers	th(머릿글의)값의 아이디값을 갖음

​	colspan

​	rowspan

caption 테이블의 제목

col 테이블의 가로 css제어 / 테이블 안에 내용이 없으면 아무것도 안나옴 잊지말자

​	 caption밑에 작성 / 가로 수 만큼 생성 / 인라인 방식

```
<caption></caption>
<col style="background-color:"red"></col>
<col></col>
```

colgroup col태그의 묶음

```
<colgroup>
	<col></col>
	<col></col>
</colgroup>
```

공통 속성 

​	 span="" / 병합할 가로 셀 갯수

thead 머릿글

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

form 태그 

​	속성 	

​		action 정보를 처리할 페이지	

​		autocomplete 자동완성기능 사용 여부 / on,off / 기본값 ON

​		method 서버로 전송할 http 방식 / get post

​			get 주소 ? 뒤에 보여짐 

​			post  전송할 때 headers에 form data부분에 붙여서 보내짐

​		name 양식 이름

​		novalidate 양식검사(유효성 검사)를 스킵(테스트)

​		target 서버전송 후 응답받을 방식 / action으로 이동할 페이지의 팝업방식/ _self, _blank

​	특징

​		form 안에 form 사용 불가

input 태그

​	속성

​		type

​			text

​			number 	/ min max step

​			password

​			email

​			submit

​			file

​			image /src , alt > submit 으로 이용가능

​			radio  / name으로 통합 , 1개만 선택가능

​			checkbox

​			reset	 / reset을 포함한 form태그 범위 안에만 초기화

​		maxlength

​		value	

​		name

​		readonly

​		disabled

​		placeholder

​		checked

​		multiple

​		list

​	label 태그

```
<label>
	<input type="Text">
</label>

<input type="text" id="12">
<label for="12"></label>
```

​	동일한 기능을 하는 코드 id로 연관지어준다. 라벨로 감싸주는 것이 좋음	

​	포커스를 잡아주는 차이

​	button 태그

​		속성

​			autofocus

​			disabled

​			form	form태그의 id값을 값으로 갖는다.

​			name

​			type

​		특징

​			js로 연결시켜서 사용하는 것이 기본, 그냥 쓰면 별 기능이 없다.

​	textarea 태그

​		속성

​			rows	양식의 줄 수

​			maxlength	입력 가능한 최대 문자 수

​	felidset 태그

​		속성

​			disabled	그룹 내 모든 태그 비활성화

​			form 	form태그의 id값		

​	select 태그

​		속성

​			autocomplete	자동완성

​			disalbed	비활성화

​			size 	한번에 볼 수 있는 행의 갯수	/ 기본값 0(1)	

​			multiple	다중 선택 여부 / 불린

​	option 태그

​		속성

​			label	옵션 제목

​			selceted	미리 선택시킴

​			velue	제출할 값

​	datalist 태그  / 	미리 정의한 옵션을 보여줌 / input태그에 list속성에 datalist의 id값으로 바인딩

```
<datalist id="idid">
	<option></option>
    <option></option>
	<option></option>	
</datalist>
```

​	progress 태그 

​		속성

​			value	작업의 진행량 max안 쓰면 0과 1사이 숫자

​			max	작업 총량

​		특징

​			js로 value값을 만질 수 있음

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

전역 속성 	/	 모든 태그에서 사용 가능한 속성

​	lang	언어설정

​	title	설명

​	data	자바스크립트에서 사용할 데이터를 html에 저장함

```
<div>
	<div id="11" data-my-name="43" data-my-age="221"></div>
</div>
<script>
	const me = document.getElementById("11");
	console.log(	me.dataset.myName	)	-> 	html의 -부분을 뒷 문자의 대문자로
	console.log(	me.dataset.myAge	)	-> 43, 221이 나옴
</script>
```



​	draggable	드래그 앤 드롭 이 가능한지에 대한 설정 / 불린

​	hidden	요소를 숨김

​	tabindex	tab키를 이용해서 검색할 수 있게 만듬 / 대화형 태그에 사용가능 / 포커싱/기본값:0

```
<input type="text" tabindex="1"/> -> tabindex의 순서를 저장 -1로 포커싱안되게 가능
```

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

절대 경로  / 상대 경로

​	절대 경로(	http, /	)

​	-어느 위치에서 import 하든 같은 경로를 갖는다.

​	-도메인주소를 생략하고 /부터 사용 가능

​	상대경로(	./ , ../	)

​	-현재 본인의 위치에서 상대적인 위치

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

특수 기호

​	코드에 사용되는 특수기호들을 보여주기 위해서 사용

​		&lt = < , &gt = >,  &nbsp = 빈 공간(1스페이스)

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

CSS 문법

​	기본

```
선택자(태그명, 아이디, 클래스){
	속성: 값;
	속성: 값;
}
```

​	선언 방식

​		inline 방식 - 안좋아

```
<div style="color:red"></div>
```

​	내장(embeded)방식

```
<style>
	div{
		color:red
	}
</style>
```

​	링크(link)방식

```
<link rel="stylesheet" href="위치"
```

​	@import 방식 ( @rule-at rule 이용, css에서 css를 가져오는 방식)

```
@import url("경로")
```

​	

​	선택자(선택자를 2개 이상 선택 하는 법 쉼표, 로 구분한다)

```
*, div, .asd, #asw{
	color:red
}
```



​		기본 	/ 	전체선택(	*	), 	태그명(div), 	클래스(.클래스명), 	아이디(#아이디명)

​		자식선택자 > 사용

```
div > span{
	color:skyblue;
}
```

​		후손 선택자	한칸 띄어쓰기,  자식선택자

```
div .red{	
	color: skyblue;
}
```

​		형제 선택자1	요소1 + 요소 >  요소 1다음의 요소를 선택

```
.red + span{		-> 두번 째 span을 의미
	color: skyblue
}
<div>
	<span class="red"></span>
	<span></span>
	<span></span>
</div>
```

​		형제 선택자2	요소1 ~ 요소2 	->	요소다음의 모든 요소 2를 선택

```
.red ~ span{		-> 두번 째, 세번 째 span을 의미
	color: skyblue
}
<div>
	<span class="red"></span>
	<span></span>
	<span></span>
</div>
```



​	상속 시스템 	/	 글자를 다루는 속성이 상속이 된다. 나머지는 안댐

​	강제 상속	/ 	position: inherit



​	선택자 우선순위	-	우선순위 결정방법

  		1. 명시도 점수가 높은 선언/	!important-무한,  인라인-1000, id-100, class-10, tag-1
                		2. 점수가 같을  경우 마지막에 선언된 선언
            		3. 상속보다 명시도가 우선됨
                      		4. !important가 선언 된 경우 어떤 선언보다 우선
          		5. 가상  선택자의 경우 10점, not은 점수없음,

​		



​	가상 선택자	/

​			hover	/ 	마우스가 올라가 있는 동안만 선택

```
a:hover{
	color:skyblue;
}
```

​			active	/	마우스로 클릭하는 동안에만 선택

```
a:active{
	color:skyblue;
}
```

​			focus	/	요소(대화형콘텐츠: input,img,tabindex)가 포커스될 때 선택

```
input:focus{
	background-color:skyblue;
}
```

​			first-child	/	형제 요소중 첫번째 요소 선택

```
<style>
	ul	li:first-child{	-> li중 첫 번째 li의 색을 바꿈
		color:red;
	}
</style>
<ul>
	<li></li>
	<li></li>
	<li></li>
</ul>
```

​			lastchild	/	형제중 마지막 요소 선택

```
<style>
	ul	li:last-child{	-> li중 마지막 li의 색을 바꿈
		color:red;
	}
</style>
<ul>
	<li></li>
	<li></li>
	<li></li>
</ul>
```

​			x:nth-child(n)	/	0부터 시작, 형제태그의 시작이 x태그가 아니면 안댐

```
li:nth-child(2){	->	2번째 li를 선택
	color:skyblue;
}
li:nth-child(2n){	->	2n번째 즉 짝수 li를 선택
	color: skyblue;
}
li:nth-child(n+3){	->	3이후 다 선택
	color: skyblue
}
```

​			x:nth-of-type(n)	/ 	x가 형제들중 x태그에 n 번째면 선택,태그만 사용

```
div:nth-of-type(2){
	color:skyblue;
}
<div>
	<div></div>
	<p></p>
	<div></div>	-> 선택
</div>
```

​			x:not(s)	/	s조건이 아닌 x를 선택

```
<style>
	ul li:not(nth-child(1)){
		color: skyblue;
	}
</style>
<ul>
	<li></li>	->	이거 제외 선택
	<li></li>
	<li></li>
</ul>
```

​			x::after, x::before	/	x요소의 앞,뒤에 가상의 공간을 만듬	/이미지도 삽입가능

​				콜론을 하나만 써도 작동은 하지만 표준이 아니니까 두개를 쓰자

````
div::after{
	content:\;
	margin:10px;
}
div::before{
	content: url("");
	margin:10px;
}
````

​			attr	/	특정 속성을 포함한 요소 선택

```
[disabled]{
	color: skyblue;
}
<input type="text" disabled/>

[type="password"]{
	color:skyblue;
}
<input type="password"/>

[class^="btn-"]{	->	속성값의 시작
	color:skyblue;
}
<div class="btn-aa"></div>
<div class="btn-bb"></div>

[class$="aa"]{	->	속성값의 끝
	color:skyblue;
}
<div class="btn-aa"></div>	-> 선택
<div class="btn-bb"></div>
```





​	!tip

```
https://codepen.io/
css reset	/	https://www.jsdelivr.com/package/npm/reset-css
li{$}*5		->	<li>1</li> ~ 5까지 생성	
```

폰트 사이즈 단위

​	px	/	고정 사이즈 단위

​	%	/	부모요소의 사이즈를 상속받아 계산

​	em	/	폰트 사이즈에 곱하여 계산, 현재 자신의 폰트사이즈에 비례/10px*15em	=150px

​					부모의 폰트 사이즈를 상속받음, font-size가 (n)em이면 부모사이즈에 n배 사이즈

​	rem	/	html의 폰트  사이즈를 기준으로 계산

​	vw	/	현재 화면(view port)의 가로(width)을 기준으로 계산

​	vh	/	현재 화면의 세로(height)를 기준으로 계산

​	vmin	/	화면 가로 세로 중 짧은 길이를 기준으로 계산, 50vmin = 짧은 화면의 50%

​	vmax	/	화면 가로 세로 중 긴 길이를 기준으로 계산, 50vmax = 긴화면의 50%

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

가로 세로

​	width	/	화면의 가로 길이

​	height	/	화면의 높이

​	min-width/max-width		기본값: 0/none

​	min-height/max-height		기본값: 0/none

margin	/	외부 밖 여백

​	속성

​		단위(px,em 등)
​		auto	/	브라우저가 너비 계산

​		%	/	부모요소 가로 넓이의 비율로 계산

​	적용

```
margin: 상 하 좌 우	/	상 좌우 하	/	상하 좌우	/	상하좌우
```

padding	/	박스 내부 여백

​		속성

​		단위(px,em 등)
​		auto	/	브라우저가 너비 계산

​		%	/	부모요소 가로 넓이의 비율로 계산

​	적용

```
padding: 상 하 좌 우	/	상 좌우 하	/	상하 좌우	/	상하좌우
```

​	특징

​		padding을 사용하면 내부 여백 때문에 사이즈가 커짐

​		해결-padding사이즈를 직접계산, box-sizing:border-box 사용

```
box1{
	width: 60px;	height:80px;
	padding: 10px 20px;
}
box2{
	width: 100px; height: 100px;
	padding: 10px 200px;
	box-sizing: border-box;
}
```

border

​	속성

​		border-width	/	 선의 두께(thin,medium,thick,단위)	/	기본값:medium

​		border-style	/	선의 종류	/	기본값:none

​			solid-실선,dotted-점선,dashed-파선,double-두줄선,groove-홈이 파인 느낌, 			  			ridge-외곽선이 나온 느낌, inset-면이 들어간 느낌, outset-면이 올라온 느낌

​		border-color	/	선의 색상(transparent: 투명선-배경색)	/	기본값: black

```
border: 1px solid red	/	width,style,color;
```

​		특징

​			박스에 border를 지정하면 border 선의 넓이 만큼 크기가 늘어난다.

​		해결

​			padding과 똑같이 해결이 가능하다.

```
box-sizing: boder-box;
```

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

border-box	/	

​	속성

​		content-box	/	너비만으로 요소 크기 계산

​		border-box	/	너비안의 padding과 content도 같이  계산

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

display	/	요소의 박스 타입을 지정

​	속성

​		block	/	블럭	

​		inline	/	인라인

​		inline-block	/	기본은 인라인요소 지만 사이즈를 지정하는 등 블록의 속성 가짐

​		flex	/	정렬

​		none	/	요소가 사라짐

overflow	/	넘친 부분에 대한 컨트롤

​		속성

​			visible	/	그냥 보여줌	/	기본값

​			hidden	/	넘친 부분을 보이지 않음

​			scroll	/	넘침과 상관없이 스크롤이 생김

​			auto	/	 넘친다면 스크롤이 생김

opacity	/	투명도 설정, 0과 1사이

​		특징	/	0일 경우 보이지 않을 뿐 존재는 한다. display:none과 다름

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

​	css속성들

​		font

​			font-style	/	글자 기울기	/	normal, italic(기울이기), oblique

​			font-size	/	글자 크기	/	기본값 16px

​			font-weight	/	 글자 굵기	/	

​								normal(400), bold(700),bolder(부모보다 두껍게),숫자(100단위 100-900)

​			font-family	/	 글자서체,글꼴	

​			line-height	/	줄 높이	/	normal(기본값), 숫자(요소 자체 글꼴 크기의 배수), 단위

```
.a{
	font: 기울기 굵기 크기	/	줄높이 글꼴	
	ㄴ-> 크기와 줄 높이를 / 로 구분,사이즈와 서체는 필수
}
```

