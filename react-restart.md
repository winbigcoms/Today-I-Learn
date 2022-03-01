# React만들어 보기

1. 라이프 사이클

   react의 라이프 사이클이란 react 컴포넌트의 생명주기를 말한다. react컴포넌트의 생명주기는 컴포넌트의 실행, 업데이트, 제거 시에 발생하는 이벤트들이 존재한다.

   [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

   1. 컴포넌트의 실행

      컴포넌트가 최초로 실행될 때는 Mount라고 한다. 이때 클래스 컴포넌트와 함수형 컴포넌트가 구분된다. 라이프 사이클 메소드는 클래스형 컴포넌트에서만 사용이 가능하고 함수형에서는 useEffect hook정도가 사용이 가능하다.

      클래스형 컴포넌트의 실행에서 먼저 constructor로 state를 생성하고 부모로 부터 상속받은 컴포넌트의 state를 사용하기 위해 super() 함수를 사용한다.

      이후 getDerivedStateFromProps매소드를 사용하는데 state를 갱신하는 객체를 반환하거나 null을 반환한다.

      그 다음 render함수를 호출하고 마지막으로 componentDidMount 매소드를 호출한다. 이 매소드가 호출되는 타이밍엔 render함수 이후이기 때문에 DOM을 사용하는 작업을 할 수 있다. DOM생성 이후 노드의 사이즈 등의 정보를 사용하여 모달등을 띄우는 경우 해당 메소드 내부에서 setState할 수 있으나, setState할 경우 새로 랜더링이 일어기 때문에 주의 해야한다.

   2. 업데이트

      react는 부모로 부터 받은 props가 변경되거나 내부 state의 변화가 있을 때 다시 랜더링 된다. forceUpdate함수를 써도 마찬가지 이다.

      위의 경우에 먼저 getDerivedStateFromProps 메소드가 실행된다. 그리고 shouldComponentUpdate메소드가 호출된다. 이 메소드에서 컴포넌트가 업데이트될지 없데이트 될지 결정한다. 없데이트라면 render함수를 실행하지 않는다.

      render함수가 실행되면 getSnapshotBeforeUpdate 매소드를 실행한다. 이 메소드에서 DOM의 정보를 가져와서 사용할 수 있고, return하는 값은 이후 호출되는 componentDIdUpdate메소드의 인자로 전달된다.

      ```jsx
      getSnapShotBeforeUpdate(prevProps,prevState){
      	if(prevProps.list.length < this.props.list.length){
      // 기존 props로 넘어오던 리스트 길이보다 현재 state의 리스트 길이가 길면
      			const listElement = this.listRef.current;
      			return list.scrollHeight - list.scrollTop;
      	}
      	return null;
      }
      -> snapshot의 인자로 들어간다.
      componentDIdUpadte(prevProps,prevState,snapshot){
      	// 업데이트 전 값과 render이후 값 비교
      }
      ```

   3. unmount

      컴포넌트가 제거될 때 unmount된다고 하고 이때 componentWillUnmount메소드가 실행된다. 이 메소드 내부에선 컴포넌트가 지워지기 직전이기 때문에 state의 변경 등의 작업을 하면 안되고, 컴포넌트에서 실행했던 타이머나 네트워크 요청 등을 중지시키는 등의 정리 작업이 요구 된다.

2. render함수
3. createElement함수
4. hook
5. fiber를 이용한 랜더링
