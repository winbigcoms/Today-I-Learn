# 웹 배포 - pm2

실장님이 고작 입사 1달차 개발 경력 1달차인 나에게 이거 해봐~ 하고 던져준 일렉트론 프로젝트 슛 포스. 쉽지 않은 공부와 노력 끝에 자동 업데이트 기능까지 마친 나에게 그 누구도 배포하는 법을 가르쳐 주지 않았다. 그냥 ssh로 접속해서 git clone 하고 npm start하라고만 알려줬는데..

이때 까지는 몰랐다. 서비스는 잘 올라갔으니까..

근데 어느순간 실수로 마스터의 코드가 에러가 나면 에러화면 고대로 나가는 것이다! 뭔가 잘못됨을 깨달았다. 천천히 생각해보니 배포할 때 빌드를 해서 올렸었나? 아니다. 난 그냥 하란대로 클론 풀 스타트만 했을 뿐, 프로덕션 환경을 로컬 환경과 다를바 없이 만들어 놨던 거였다. 실행 포트도 그냥 set과 export를 이용해서 맞춰 둔것 뿐..서버가 죽었을 때 살려줄 놈도 없고 그냥 내버려진 프로덕션이었던 것이다.

막막했다. 그때 파트장님이 회사에서 pm2라는 것을 사용하고 있으니 한번 적용해보라 하셨다.

## pm2

pm2란 프로세스 매니저의 약자로 말 그대로 노드 프로세스를 매니징해주는 라이브러리였다. config.js파일을 이용하여 환경에 따른 포트 설정이나 실행 설정을 정할 수 있고, 만약 서버가 죽으면 자동으로 다시 실행시켜주는 엄청난 친구였다.

```jsx
module.exports = {
  apps: [
    {
      name: "shootposv2",
      script: "npx",
      args: "serve -s build",
      instances: 1,
      autorestart: true,
      watch: false,
      exec_mode: "fork",
      source_map_support: false,
      env: {
        PORT: 41101,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 42101,
        NODE_ENV: "production",
      },
    },
  ],
};
```

노드 환경변수에 따라 실행할 포트를 구분해준 config 파일이다. 실행시킬 때 script+args 로 실행되어

```jsx
npx serve -s build
```

이렇게 실행된다. 빌드된 파일을 기준으로 실행시키는 것이다.

이제 package.json파일을 수정한다.

```jsx
"scripts": {
    "start:web": "react-scripts start",
    "start": "pm2 reload ecosystem.config.js --env production",
    "start:dev": "pm2 reload ecosystem.config.js --env development",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

script를 보면 알 수 있듯이, 로컬 환경에서는 web을 개발에서는 dev를 이용한다. 아직 jenkins등을 이용하여 자동 빌드 후 배포를 세팅하지 않아서 ssh에 접속하여 빌드 후 환경에 맞는 script를 실행시켜 주면된다.

[https://engineering.linecorp.com/ko/blog/pm2-nodejs/#PM2를활용한Node.js무중단서비스하기-서비스운영하기](https://engineering.linecorp.com/ko/blog/pm2-nodejs/#PM2%EB%A5%BC%ED%99%9C%EC%9A%A9%ED%95%9CNode.js%EB%AC%B4%EC%A4%91%EB%8B%A8%EC%84%9C%EB%B9%84%EC%8A%A4%ED%95%98%EA%B8%B0-%EC%84%9C%EB%B9%84%EC%8A%A4%EC%9A%B4%EC%98%81%ED%95%98%EA%B8%B0)
