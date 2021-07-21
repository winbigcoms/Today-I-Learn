immer
react나 redux에서 객체를 업데이트 할 때엔 불변성을 지켜야한다고 한다.

이 말을 정의 해보자, react에서 상태의 변경에 따라 화면의 리렌더링된다. 곧 state의 변경에 따라 화면이 갱신이 되는데, 이 변경을 어떻게 감지하느냐에 초점이 있는것 이다. 

변수의 선언은 곧 특정 메모리의 주소에 값을 할당한다는 것을 의미한다. 특히 js의 변수는 해당 메모리의 주소를 참조하는 것이라 볼 수 있다. 

js는 원시타입 변수를 메모리에 저장하고, 그 변수를 복사 또는 수정하면 다시 새로운 메모리에 저장한다. 하지만 객체타입인 경우 최초 메모리에 저장하고나서 해당 변수를 복사 또는 수정해도 변수가 참조하는 메모리의 주소가 변경되지 않는다. 때문에 react에서는 state의 변경을 메모리 주소의 참조값으로 비교하여 감지하기 때문에 객체타입의 불변성을 지키지 않고 뮤터블하게 사용하면, react나 redux는 상태의 변경을 감지하기 못하기 때문에 객체타입의 불변성을 지키고, 값의 업데이트 시엔 항상 새로운 객체타입을 생성해주는 것이다.

즉 react,redux의 불변성을 지킨다. 는 것은 state나 store 자체의 불변성을 지키는것이 아니라, state나 store의 객체가 불변하도록 지키는 것이다. 한번 선언된 객채 타입의 상태는 변하지 않고 존재하다가 상태의 변경이 일어나면 죽고 새로운 객체타입이 생긴다 보면 된다. 뭔가 지조있어 보인다.

불변성을 지키는 도구 "immer"

react나 redux에서 복잡한 구조의 객체타입(객체안에 객체 안에 객체 안의 ..)을 쓸 때, 불변성을 지키기 위해선 spread연산자를 이용하여 뿌리고 뿌리고 또 뿌리는 작업을 해야할 때가 많다. 당연히 코드가 복잡해진다.

```tsx
const state = {
  posts: [
    {
      id: 1,
      title: '제목입니다.',
      body: '내용입니다.',
      comments: [
        {
          id: 1,
          text: '와 정말 잘 읽었습니다.'
        }
      ]
    }
  ],
  selectedId: 1
};
->post 배열의 변경을 위해 map으로 새로운 배열을 생성
const nextState = {
  ...state,
  posts: state.posts.map(post =>
    post.id === 1 // id가 1인걸 찾아서
      ? {
          ...post,
          comments: post.comments.concat({ // 댓글 배열에 추가
            id: 3,
            text: '새로운 댓글'
          })
        }
      : post
  )
};
```

이걸 언제하고 앉았냐는 말이다. 근데 immer를 쓰면

```tsx
import produce from "immer";

const state = {
  number: 1,
  dontChangeMe: 2,
  test:{
    test:[
      {
        id:"1"
      },
      {
        id:"2"
      }
    ],
    aws:{}
  }
};

const nextState = produce(state, draft => {
  draft.number += 1;
});
const nextStateTest = produce(state, draft => {
  const target = draft.test.test.find(data=>data.id==="1");
  target.name="백승일";
  draft.test.aws.id="1";
});

{number: 1, dontChangeMe: 2, test: Object}
number: 1
dontChangeMe: 2
test: Object
test: Array(2)
	0: Object
		id: "1"
		name: "백승일"
	1: Object
		aws: Object
			id:"1"
```

바꾸고 싶은 값만 찾아가서 살짝 바꾸는 느낌