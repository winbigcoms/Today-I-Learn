# React만들어 보기

0. 기초 지식
   react는 jsx문법을 babel을 이용하여 js로 변환시킨 후 사용한다.

   ```jsx
   const Header = <header title="isHeader">hihi</header>;
   ```

   ->

   ```js
   const Header = React.createElement(
     "header", // 태그명
     {
       title: "isHeader", // 프로퍼티
     },
     "hihi" // children
   );
   ```

   jsx는 이렇게 자신의 정보를 같는 js코드로 변환된다. 그리고 ReactDOM.render함수를 이용하여 랜더링한다.

   ```js
   const header = {
     type: "header",
     props: {
       title: "isHeader",
       chlidren: "hihi",
     },
   }; // createElement에 의해 변환된 값

   const container = document.getElementById("root");
   ReactDOM.render(header, container);
   ```

   이제 ReactDOM.render 함수를 살펴보자. 이 부분은 react가 DOM을 직접 변경하는 부분이다.

   ```js
   ReactDOM.render(element, container);

   const createdNODE = document.createElement(element.type);

   for (let property in element.props) {
     if (property === "children") {
       continue;
     }
     createdNODE[property] = element.props[property];
   }
   const textNode = document.createdTextNode("");
   textNode["nodeValue"] = element.props.children;

   createdNODE.appendChild(textNode);

   container.appendChild(createdNODE);
   ```

   간단하게 보면 이렇게 동작 한다고 볼 수 있겠다.

1. React.createElement
   children이 textNode 하나인 경우를 살펴 보았다. 그러면 태그안에 태그안에 태그...인 jsx는 어떨까

   ```jsx
   const Header = (
     <header id="mainHeader">
       <a>logo</a>
       <nav>navigation</nav>
       hi
     </header>
   );
   ```

   보통 헤더를 만들면 이런 식으로 여러 태그가 중첩된다. 이 코드를 babel로 변환시켜 보면 다음과 같다.

   ```js
   const Header = React.createElement(
     "header",
     { id: "mainHeader" },
     React.createElement("a", null, "logo"),
     React.createElement("nav", null, "navigation"),
     "hi"
   );
   ```

   가만히 보니 jsx문법에서 children으로 들어오는 요소들은 몇 개가 될지 모른다. 때문에 React.createElement의 첫, 두번째 요소까지는 확정인데 세번째 children이 되는 요소는 얼마나 될지 모르니
   spread문법으로 받아준다.

   ```js
   function createElement(type, property, ...children) {
     return {
       type,
       props: {
         ...property,
         children: children.map((child) =>
           typeof child === "object" ? child : createTextNode(child)
         ),
       },
     };
   }

   function createTextNode(text) {
     return {
       type: "TEXT_ELEMENT",
       props: {
         nodeValue: text,
         children: [],
       },
     };
   }
   ```

2. render함수
   위의 정리를 토대로 랜더함수를 정리해보면 다음과 같다.

   ```jsx
   const Header = (
     <header id="mainHeader">
       <a>logo</a>
       <nav>navigation</nav>
       hi
     </header>
   );

   const container = document.getElementById("root");
   ReactDOM.render(Header, container);
   ```

   ```js
   function render(element, container) {
      const dom = element.type === 'TEXT_ELEMENT'? document.createTextNode('') : document.createElement(element.type);

      Object.keys(element.props).filter(key=>(key !== 'children').forEach(name=>{dom[name]=element.props[name]});

      element.props.children.forEach(child=>render(child,dom));

      container.appendChild(dom);
   }
   ```

   이렇게 react가 동작하는 것을 만들어보았다.

   테스트를 위해서 바벨이 위의 함수를 사용하게 하고 싶다면

   ```jsx
   const customReact = {
     render,
     creteaElement,
   };
   /** @jsx customReact.createElement */
   const container = document.getElementById("root");
   customReact.render(element, container);
   ```

   이렇게 해준다.

https://velog.io/@godori/build-your-own-react#step-ii-render-%ED%95%A8%EC%88%98

3. 라이프 사이클

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

4. render함수
5. createElement함수
6. hook
7. fiber를 이용한 랜더링
