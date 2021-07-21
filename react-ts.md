redux with typescript

## REDUX

redux - 전역으로 사용가능한 하나의 store로 상태를 관리해주는 라이브러리, getter와 setter같이 state를 불러서 사용하지만 값을 변경하기 위해서는 dispatch를 사용하여 변경해야한다

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cf37c6d7-edab-4819-a13e-7b65e6c80f8d/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cf37c6d7-edab-4819-a13e-7b65e6c80f8d/Untitled.png)

```jsx
const INCREASE = "counter/INCREASE";

const increase = ()=>({type:INCREASE});

const initState = {
	count:0
}

function counterReducer(state,action){
	switch(action.type){
		case INCREASE :
			return{ count: state.count -1 }
	}
}

const rootReducer = combineReducers({
	counterReducer
});

const Store = ()=>{
	const store = createStore(reducer());
	return store;
}

<Provider store ={Store()}></>
```

이런 식으로 적용하여

```jsx
const count = useSelect(state=>state.counterReducer.count);
const dispatch = useDispatch();
const up = dispatch(increase());
```

이런식으로 사용한다.

쓱 읽어보면 

1. 타입정의
2. 타입생성함수 선언
3. 초기값 설정
4. 리듀서 선언
5. 리듀서 합치기
6. 스토어 적용하기

1. 상태가져오기
2. 디스패치선언
3. 상태업데이트실행

이렇게 흘러간다.

## REDUX-TYPESCRIPT

이거에 타입스크립트를 붙여보면

```tsx
const INCREASE = "counter/INCREASE" as const; //ts문법으로 데이터타입 string이 아닌 값을참조
const INCREASEMANY = "counter/INCREASE_MANY" as const;

const increase = ()=>({type:INCREASE});
const increaseMany = (amount:number)=>({type:INCREASEMANY,payload:amount});
type CounterState ={
	conut : number
}
const initState : CounterState = {
	count:0
}
type CounterAction = | ReturnType<typeof increase> | ReturnType<typeof increaseMany>

// 액션생성자 함수들은 각각의 컴포넌트에서 사용되고, 또 reducer에 들어올 때 마다 다를 수 있으니
// ReturnType<> 을 이용해서 해당 액션생성자함수들의 리턴값의 타입을 갖게 해준다.

function counterReducer(state:CounterState ,action:CounterAction){
	switch(action.type){
		case INCREASE :
			return{ count: state.count -1 }
		case INCREASEMANY : 
			return {count:state.count + action.payload}//액션생성자함수의 리턴이 action으로 옴
	}
}

const rootReducer = combineReducers({
	counterReducer
});
export type RootReducer = ReturnType<typeof rootReducer>// 상태조회시 필요

const Store = ()=>{
	const store = createStore(reducer());
	return store;
}

<Provider store ={Store()}></>
```

```jsx
const count = useSelect(state:RootReducer=>state.counterReducer.count);
const dispatch = useDispatch();
const up = dispatch(increase());
```

## REDUX-SAGA

```tsx
const INCREASE = "counter/INCREASE";

const increase = ()=>({type:INCREASE});

const initState = {
	count:0
};

function* increaseSaga(){
	yield delay(1000);
	yield put(increase());
}

export function* conunterSaga(){
	yield takeEvery(INCREASE,increaseSaga);
}

function* rootSaga(){
	yield all([counterSaga()])
}

function counterReducer(state,action){
	switch(action.type){
		case INCREASE :
			return{ count: state.count -1 }
	}
}

const rootReducer = combineReducers({
	counterReducer
});

const Store = ()=>{
	const store = createStore(
		reducer,
		applyMiddleware(
			sagaMiddleware
		)
	);
	sagaMiddleware.run(rootSaga;);
	return store;
}

<Provider store ={Store()}></>
```

## REDUX-SAGA-TYPESCRIPT(TYPESAFE-ACTION)

```tsx
const INCREASE_REQ = "counter/INCREASE_REQ" as const;
const INCREASE_SUCCESS = "counter/INCREASE_SUCCESS" as const;
const INCREASE_FAIL = "counter/INCREASE_FAIL" as const;
type CounterState ={
	conut : number,
	error:string.
	loading:boolean
}
interface inputData {
	count:number
}
const initState:CounterState= {
	count:0,
	error:"",
	loading:false
}
type CounterAction = | ReturnType<typeof INCREASE_REQ> 
| ReturnType<typeof INCREASE_SUCCESS >
| ReturnType<typeof INCREASE_FAIL >

const countAction = createAsyncAction(
	INCREASE_REQ,
	INCREASE_SUCCESS,
	INCREASE_FAIL 
)<inputData,{count:number},AxiosError>;

const countReducer = createReducer<CounterState,CounterAction>(initState,{
	[INCREASE_REQ.REQUEST]:(state)=>produce(state,draft=>{
		draft.count.loading:true,
	}),
	[INCREASE_REQ.SUCCESS]:(state,action)=>produce(state,draft=>{
		draft.count.loading:false,
		draft.count.count:action.payload.count,
	}),
	[INCREASE_REQ.FAILURE]:(state)=>produce(state,draft=>{
		draft.count.loading:true
	}),
})
```