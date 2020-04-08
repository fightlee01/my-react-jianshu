import styled from 'styled-components';
import logoPicture from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 56px;
    background: url(${logoPicture});
    background-size: contain;
`;
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    border-sizing: border-box;
`;
export const NavItem = styled.div`
    line-height: 56px;
    font-size: 16px;
    padding: 0 15px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.native {
        color: #ea6f5a
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    color: #777;
    margin-top: 9px;
    padding: 0 30px 0 20px;
    border: none;
    box-sizing: border-box;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    margin-left: 20px;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px; 
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
    margin-right: 140px;
`;
export const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    margin-top: 9px;
    padding: 0 15px;
    margin-right: 10px;
    color: #ec6149;
    font-size: 14px;
    &.writting {
            background-color: #ec6149;
            color: #fff;
        }
`;
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    box-sizing: border-box;
    padding: 0 20px;
    margin-left: 15px;
    color: #969696;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    
`;
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease;
        transform: rotate(100deg);
        transform-origin: center center;
    }
`;
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
`;
export const SearchInfoItems = styled.div`
    margin-top: 10px;
    overflow: hidden;
`;
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    border: 1px solid #ddd;
    margin-right: 10px;
    margin-bottom: 10px;
    color: #787878;
    border-radius: 3px;
    font-size: 13px;
`;
export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background-color: #666;
            color: #fff;
        }
    }
`;
