import React, { Component } from "react";
import { connect } from "react-redux";
import Redirect from "react-router-dom/es/Redirect";

class Write extends Component {
    render() {
        if(this.props.loginFlag) {
            return <div>写文章页面</div>
        }else {
            return <Redirect to="/sign_in"/>
        }
    }
}

const mapStateToProps = (state) => ({
    loginFlag: state.login.get('loginFlag')
});

export default connect(mapStateToProps, null)(Write);