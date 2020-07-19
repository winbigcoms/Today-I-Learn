# liftCycle 메소드

클래스형 컴포넌트에서만 사용가능한 메소드로 함수형 컴포넌트의 useEffect와 비슷한 기능

![image-20200716113350011](C:\Users\승일노트북\AppData\Roaming\Typora\typora-user-images\image-20200716113350011.png)

shouldComponentUpdate - 컴포넌트의 최적화를 하는 단계,false를 반환시 렌더를 하 지 않음

getSnapshotBeforeUpdate  - 보여지기 직전에 DOM에 접근 가능, 함수형에서 불가능

componentDidMount - 컴포넌트가 화면에 보여질 때, DOM에 접근 가능

getDerivedStateFromPorps - 현재 props와 state가 다르면 state동기화

componentWillUnmount - 컴포넌트가 사라지기 직전으로 setTimeOut 등을 clear해준다.