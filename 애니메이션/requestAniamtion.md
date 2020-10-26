# requestAnimationFrame

- 기존의 setTimeout이나 setInterval로 만들었던 자바스크립트 애니메이션의 경우 화면 랜더링 과정 진행을 무시하고 실행이 된다. 때문에 버벅거림이 생길 수 있다. 하지만 requestAnimation은 브라우저의 상태에 따라서 애니메이션을 호출해주기 때문에 퍼포먼스의 측면에서 더 좋아보인다. 하지만 브라우저의 상태에 따르기 때문에 브라우저가 매우 바쁘다면 애니메이션이 실행되지않을 수 도 있다.

루프를 돈 다는 말은 재귀적으로 돈다는 말이다.
requestAnimationFrame()도 결국 재귀한다.
```
window.addEventListener("load",function(){
  내용...

  loop();
})
function loop(){
  내용
  requestAnimationFrame(loop)
}
```
이런 형식이다. react에서는 componentWillMount나 useEffect의 콜백함수에서 이벤트 핸들러를 추가해주고 componentWillUnmount나 useEffect의 return함수에서 이벤트 핸들러를 제거해주면 되겠다.