# github.io에 호스팅하기!

본 글은 블로그를 보며 테마지정하다가 자꾸 에러나서 그냥 내가 디자인하고 기능 만들어 넣으려다가 일어난 사건의 결실입니다.

## 먼저 내 페이지를 만든다.
``` npx create-react-app```을 이용해서 리액트로 포트폴리오 페이지를 만들어주고~

## github에 연결!

github에 레포지토리 하나 파서 아무 이름으로 짓는다. 하지만 포폴용으로 쓸꺼니까 이쁘게 짓자. 가장 어려운 이름짓기를 끝내면 해당 레포의 주소가 생길거다. 그럼 이제 리액트로 만든 페이지에 와서 터미널에 ```git remote add origin 주소```를 입력하면 
origin main이라는 브런치가 생긴다. 전에는 master였는데,, 일단 그렇게 github랑 연동했으면 ```git add . git commit -m "feat my page"``` 이런식으로 add, commit 을 해주고 최초 push니까
```git push -u origin main```으로 해주면 레포에 push된다.

## gh-pages를 이용하여 배포
이제 ```npm i gh-pages --save-dev```로 깃허브 페이지를 설치해주고 완료되면 package.json에 여기서 중요하다. 디펜던시나 다른 키안에 선언하는게 아니라 따로 선언하는거다. 
```"homepage": "http://{깃허브 아이디}.github.io/{힘들게 지은 레포이름}"```
를 추가해주고 script안에 predeploy와 deploy를 선언해준다.
```
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
추가 해줬으면 이제 터미널에서 배포를 시작한다.
``` npm run deploy ```
배포 후에 해당 레포의 setting페이지에 가서 좀 내려보면 github Pages라고 나온다. 여기의 source에 main이 아닌 gh-pages 브런치를 선택하고 save하면 완료!