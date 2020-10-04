# 클래스형 컴포넌트의 라이프 사이클 메소드

클래스형 컴포넌트의 라이프 사이클 메소드의 구분 : 마운트 , 업데이트, 언마운트

## 마운트

브라우저에 올라가는 시점

실행 메소드 순서

1. constructor: 클래스의 생성자 메소드
2. getDrivedPropsToState : 부모 컴포넌트에서 받은 props를 state로 넣을 때 실행
3. render : UI가 랜더링 되는 메소드
4. componentDidMount : 랜더링 된 직후에 실행되는 메소드

### constructor

클래스의 인스턴스를 생성하고 초기화하기 위한 메소드. 내부에서 super 를 호출하여 상위 클래스의 메소드를 사용할 수 있다. es6의 클래스에서 서브 클래스가 constructor를 생략하지 않는 경우 super를 생략할 수 없다. 위 메소드에서 초기 state를 정할 수 있다.

### getDrivedPropsToState

부모에게 받은 props를 state에 동기화 시킬 때 사용하는 메소드. 마운트와 업데이트 시 모두 호출된다.

```
getDrivedPropsToState(nextProps,beforeState){
	if(nextProps!==beforeState){
		return {value:nextProps}
		// this.state.value 업데이트
	}
	return null
	//state의 변경이 없다면 null 반환
}
```

### render

컴포넌트의 UI가 랜더링 되는 시점의 메소드. this를 통해서 props와 state에 접근할 수 있으며 jsx를 반환할 수 있다. 아무것도 보여주고 싶지 않다면 null혹은 false를 반환한다. 단 render함수는 순수 함수이기 때문에 이벤트 설정이 아닌 부분에서 setState를 사용하면 무한 랜더링이 일어나게 된다. 또한 DOM에 접근하면 안된다. state의 변화나 DOM의 접근은 componentDidMount 메소드에서 진행해야한다.

### componentDidMount

컴포넌트가 랜더링 된 후에 실행된다. 이 시점에서 이벤트 등록 혹은 비동기 처리를 한다. 



## UPDATE

이미 생성된 클래스형 컴포넌트가 state의 변경, props의 변경, 상위 컴포넌트의 재랜더링 혹은 forceUpdate를 통한 강제 랜더링 시에 재랜더링이 일어난다. 앞선 세 경우에는 render이전에 getDrivedPropsToState와 shouldComponentUpdate 메소드가 실행되지만 forceUpdate의 경우 바로 render매소드가 실행된다.

### getDrivedPropsToState

최초 랜더링에서와 같이 부모 컴포넌트가 넘겨주는 props를 state에 동기화 시켜주는 작업을 진행한다.

### shouldComponentUpdate

컴포넌트가 재랜더링될지 결정하는 메소드로 반환값에 따라 결정된다. 기본 값은 true이며 false를 반환하면 재랜더링 작업을 멈춘다. 컴포넌트의 최적화는 곧 필요없는 랜더링을 줄이는 것이기 때문에 상태에 따라 false를 리턴하여 리랜더링을 방지해야한다.

```
shouldComponentUpdate(beforeProps,beforeState){
	// 업데이트의 근거가 되는 props와 state의 비교를 위해서 이전 컴포넌트의 state와 props값을 매개변수로 받아온다.
	// 현재값은 this를 이용해서 가져온다.
	if(beforeProps.value !== this.value){
		return true
	}
	return false
}
```

### render

shouldComponentUpdate에서 true가 반환되면 리랜더링이 일어난다. forceUpdate의 경우 랜더메소드부터 시작이다.

### getSnapShotBeforeUpdate

업데이트 직전에 변경되기 전 컴포넌트의 정보를 가져올 수 있는 매소드이다. 반환되는 값은 이 다음에 호출되는 componentDidUpdate의 세번째 파라미터로 접근이 가능하다. 예를 들어 화면이 재랜더링 될 때 기존에 보고 있던 뷰포트의 위치를 가져와서 새로고침 되어도 그 위치로 이동시켜주는 행위를 할 때 기존의 뷰포트 위치를 가져온다는 등의 작업이 진행된다.

### componentDidUpdate

리랜더링이 일어난 직후에 실행되는 메소드로 DOM관련 행위, 비동기 작업이 가능하다.



## 언마운트

컴포넌트를 DOM에서 제거하는 시점을 언마운트라고 한다.

### ComponentWillUnmount

컴포넌트를 DOM에서 제거할 때 실행되는 메소드로 ComponentDidMount에서 등록한 이벤트와 타이머등을 제거하고 clear해주는 시점이다.



## 그 외

컴포넌트의 랜더링 도중 에러발생시 유저는 하얀화면만 보이게 된다. 이를 방지하기 위해서 에러바운더리를 설정해주면 에러 발생시 유저에게 에러났음을 알려줄 수있다. 그 때 사용하는 라이프 사이클 메소드로 componentDidCatch가 있다.

