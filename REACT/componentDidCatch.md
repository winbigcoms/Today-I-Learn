# componentDidCatch

컴포넌트에서 에러가 났을 시 알려주기 위한 페이지를 보여주기 위해서 사용하는 클래스형 컴포넌트의 생명주기

1. 에러 상황 - props를 넣어주지 않을 경우 등

import React,{Component} from 'react'
class ErrorBoundary extends Component{
    state = {
        error : false
    };
    componentDidCatch(err,info) {
        <!--
         err 에러의 정보 info 에러가 난 위치 -->
    };
    this.setState({
        error:true
    });
    render() {
        if(this.state.error) <h1>에러발생</h1>
        return this.props.children
    }
}
<!-- 에러정보를 받아서 에러정보 모니터링 방법 - sentry -->
<ErrorBoundary>
    <User/>
</ErrorBoundary>