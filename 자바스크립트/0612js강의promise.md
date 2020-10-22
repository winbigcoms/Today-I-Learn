# promise

then, catch, final 은 들어온 프로미스 인스턴스로 프로미스 인스턴스를 생성



```
new promise( (res, rej)=> {
	비동기 처리가 아닌 코드들 
	const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(payload));
    비동기 코드
    xhr.onload = () => {
    	성공 조건
    	if( xhr.status === 200이나 201){
    		res(xhr.response)
    	}else {
    		rej(xhr.status)
    	}
    }
} )

promise.then( x => console.log(x)) // then의 첫 인수는 콜백함수, 콜백함수의 첫 인수는 res의 인수(xhr.response)가 넘어온다.
.catch( x => console.log(x)) // catch의 첫 인수는 콜백함수, 콜백함수의 첫 인수는 rej의 인수(xhr.status)가 넘어온다.
```



## rest api

요청을 명사와 술어로 구분하여 요청네이밍을 지정함

