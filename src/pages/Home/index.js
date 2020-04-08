import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    HomeLeft,
    HomeRight,
    HomeWrapper,
    BackTop
} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreators } from "./store";
class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        alt={''}
                        className='banner-img'
                        src='//upload.jianshu.io/admin_banners/web_images/4486/41d9173c44ce6eded75da5f82da659973ddaad41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                { this.props.showBackTop ? <BackTop onClick={this.handleBackTop}>
                    <i className="iconfont back-top">&#xe632;</i>
                </BackTop> : null }
            </HomeWrapper>
        );
    }
    componentDidMount() {
        this.props.getHomeData();
        this.bindEvnets();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScroll)
    }
    handleBackTop() {
        window.scroll(0, 0);
    }
    bindEvnets() {
        window.addEventListener('scroll', this.props.changeScroll)
    }
}

const mapStateToProps = (state) => ({
    showBackTop: state.home.get('showBackTop')
});
const mapDispathToProps = (dispath) => ({
    getHomeData() {
        dispath(actionCreators.getHomeInfo());
    },
    changeScroll() {
        if(document.documentElement.scrollTop > 100) {
            dispath(actionCreators.changeScrollState(true));
        }else {
            dispath(actionCreators.changeScrollState(false));

        }
    }
});

export default connect(mapStateToProps, mapDispathToProps)(Home);