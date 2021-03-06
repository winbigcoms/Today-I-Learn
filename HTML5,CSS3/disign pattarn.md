1. 버튼 디자인 

   1. 버튼 내 콘텐츠 가리기

      ```
      white-space: nowrap;
      text-indent: 20px;
      overflow: hidden;
      width: 20px;
      단 마우스 포인터 curser:pointer 적용이 안댐
      ```

      너비만큼의 들여쓰기를 줘서 콘텐츠를 밀고 넘은 부분은 가려서 해결

      paddding의 경우 높이 와 같은 크기를 줘서 해결

      <hr>

      ```
      부모요소에 높이, overflow:hidden, 을 준다.
      ```

      <hr>

      폰트 사이즈를 0으로 하게 되면 스크린 리더기가 읽지 못한다. 비추하는 방법

      <hr>

      내부에 span혹은 after를 사용해서 버튼 내부에 레이어를 만들어서 배경을 맨 위로 올림

      

2. 가로 정렬

   ​	float

   ```
   <div>
   	<p></P>
   	<span></span>
   	<a></a>
   </div>
   
   -------------------------------------------------------------
   p,span,a{
   	float:left;
   }
   -------------------------------------------------------------
   1. div{
   	overflow:hidden;
   }
   2. a::after{
   	clear:both
   }
   3. div{
   	float:left
   }
   4. div{
   	clear:both
   }
   ```

   ​	width

   ```
   <div>
   	<p></P>
   	<span></span>
   	<a></a>
   </div>
   -------------------------------------------------------------
   p, span,a{
   	display:inline-block;
   	width:100px;
   	vertical-align:middle;
   }
   ```

   ​	position

   ```
   <div>
   	<p></P>
   	<span></span>
   	<a></a>
   </div>
   -------------------------------------------------------------
   div{
   	position:relative
   }
   p,span, a{
   	position: absolute;
   	left:0;
   	right:0;
   }
   span{
   	left:10px;
   	right:0;
   }
   a{
   	left:20px;
   	right:0;
   }
   ```

   ​	flex

   ```
   <div>
   	<p></P>
   	<span></span>
   	<a></a>
   </div>
   -------------------------------------------------------------
   div{
   	display:flex;
   }
   -------------------------------------------------------------
   1:2:1 비율의 정렬
   div{
   	display:flex;
   }
   span{
   	flex-grow: 1
   }
   ```

3. 드랍박스

   ```
   .related-list{
       list-style: none;
       margin:0;
       background-color: #fff;
       border:1px solid #ccc;
       border-radius: 5px;
       padding: 5px 0px;
       height: 27px;
       transition: all 0.5s;
       overflow: hidden;
   }
   .related-heading{
       margin-bottom: 10px;
   }
   .related-list:hover{
       height: 147px;
       padding: 10px 0px;
   }
   .related-list li a{
       display:block;
       height: 27px;
       text-indent: 20px;
   }
   ```

   인터렉티브한 애니메이션을 주려면 transition-delay의 값을 따로 준다. 늘어난 후 패딩 식

4. 고정된 배경 가운데 텍스트

   ```
   .benner{
       width: 100%;
       background-image: url("");
       height: 450px;
       background-position: center;
       background-size: cover;
       background-repeat: no-repeat;
       display: flex; > 텍스트 정렬용 
       justify-content: center; > 텍스트 정렬용
       align-items: center; > 텍스트 정렬용
       background-attachment: fixed;
       top:0;
       margin-bottom: 10px;
       position: relative;
   }
   ```

   ```
   background-attachment 
   scroll : 선택한 요소와 움직입니다. 내용을 스크롤하면 배경 이미지는 스크롤되지 않습니다.
   fixed : 움직이지 않습니다.
   local : 선택한 요소와 같이 움직입니다. 내용을 스크롤하면 배경 이미지도 스크롤됩니다.
   initial : 기본값으로 설정합니다. > scroll
   inherit : 부모 요소의 속성값을 상속받습니다.
   ```

   

   

   5.text-shadow를 이용한 text-border 효과

   ```
     text-shadow: 1px 0 0 #000, 0 1px 0 #000, -1px 0 0 #000, 0 -1px 0 #000;
   ```

   

   6.li의 정렬

   		1. display: flex
   		2. 구형 브라우저 : display: inline(inline-block) > 디자인 자체는 똑같지만 추		후 높이 padding등의 디자인을 위해서 inline-block사용
   7. 리스트의 구분선의 디자인

      ```
      1. a ㅣ b ㅣ c 의 ㅣ를 가상선택자 after,before로 처리할 경우( 접근성 낮은 경우)
      	li:not(:last-child)::after, li:not(:first- child)::before{
      	content:"ㅣ";
      	display:inline-block;
      	margin: 0 x;
      	}
      
      2. 위의 경우 구분자를 스크린 리더기가 읽어서 불편함 초래 그러므로 
      	<span aria-hidden="true">ㅣ</span> 로 처리
      	의미없는 디자인적 요소 + aria-hidden에 의해 읽히지 않음
      ```

      

