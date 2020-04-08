import React, { Component } from "react";
import {Content, DetailWrapper, Header} from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import {withRouter} from "react-router-dom";

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
            </DetailWrapper>
        );
    }
    componentDidMount() {
        this.props.getContent(this.props.match.params.id);
    }

}

const mapStateToProps = (state) => ({
    title: state.detail.get('title'),
    content: state.detail.get('content')
});
const mapDispathToProps = (dispatch) => ({
    getContent(id) {
        dispatch(actionCreators.getDetailContent(id));
    }
});

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Detail));