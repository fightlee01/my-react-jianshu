import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators} from '../../pages/Login/store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    Button,
    Addition,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoItems,
    SearchWrapper
} from './style';
import Link from 'react-router-dom/es/Link';


class Header extends PureComponent {
    getListArea() {
        const { focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handleChange } = this.props;
        const newList = list.toJS();
        const pageList =  [];
        for (let i = (page-1) * 10; i <page * 10; i++) {
            if(newList.length)
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                );
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChange(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => this.spinIcon = icon} className="iconfont spin">&#xe851;</i>换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoItems>
                            {pageList}
                    </SearchInfoItems>
                </SearchInfo>
            )
        } else {
                return null;
        }
	}
    render() {
        const { focused, handleInputFocus, handleInputBlur, list, loginFlag, loginOut} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left native'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    { loginFlag ? <NavItem className='right' onClick={loginOut}>退出</NavItem> :
                        <Link to='/sign_in'><NavItem className='right'>登陆</NavItem></Link> }
                    <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe7de;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="writting">
                            <i className="iconfont">&#xe61b;</i>写文章
                        </Button>
                    </Link>
                    <Button>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}
//映射reducer里的数据
const mapStateToProps = (state)=> {
    return {
        focused: state.header.get('focused'),
        list: state.header.get('list'),
        page: state.header.get('page'),
        totalPage: state.header.get('totalPage'),
        mouseIn: state.header.get('mouseIn'),
        loginFlag: state.login.get('loginFlag')
    }
};
//派发action
const mapDispathToProps = (dispath)=> {
    return {
        handleInputFocus(list) {
            if(list.size === 0)
                dispath(actionCreators.getChangeList());
            dispath(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispath(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispath(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispath(actionCreators.mouseLeave())
        },
        handleChange(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
            if(page<totalPage){
                dispath(actionCreators.handleChangeList(page + 1));
            } else {
                dispath(actionCreators.handleChangeList(1));
            }
        },
        loginOut() {
            dispath(loginActionCreators.loginout());
        }
    }
};

export default connect(mapStateToProps, mapDispathToProps)(Header);