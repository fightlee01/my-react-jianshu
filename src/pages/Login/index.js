import React, { Component } from "react";
import { connect } from "react-redux";
import {Input, Log, LoginBox, LoginWrapper, Button} from "./style";
import Link from "react-router-dom/es/Link";
import { actionCreators } from "./store";
import Redirect from "react-router-dom/es/Redirect";

class Login extends Component {
    render() {
        if(this.props.loginFlag) {
            return <Redirect to="/"/>
        }else {
            return (<LoginWrapper>
                <Log>
                    <Link to="/"><img alt="log" src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"/></Link>
                </Log>
                <LoginBox>
                    <Input placeholder="账号" innerRef={(input) => {this.account = input}}/>
                    <Input placeholder="密码" type="password" innerRef={(input) => {this.password = input}}/>
                    <Button onClick={() => this.props.getCheck(this.account, this.password)}>登陆</Button>
                </LoginBox>
            </LoginWrapper>);
        }
    }
}

const mapStateToProps = (state) => ({
    loginFlag: state.login.get('loginFlag')
});
const mapDispathToProps = (dispatch) => ({
    getCheck(account, password) {
        dispatch(actionCreators.checkLogin(account, password));
    }
});

export default connect(mapStateToProps, mapDispathToProps)(Login);