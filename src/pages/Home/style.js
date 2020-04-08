import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    height: 300px;
    margin: 0 auto;
`;
export const HomeLeft = styled.div`
    width: 625px;
    padding-top: 15px;
    float: left;
    .banner-img {
        width: 625px;
    }
`;
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    margin-left: -18px;
    overflow: hidden;
`;
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    line-height: 32px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: #000;
    .topic-pic {
        margin-right: 10px;
        float: left;
        width: 32px;
        height: 32px;
    }
`;
export const ListItem = styled.div`
    padding: 20px 0;
    border-top: 1px solid #dcdcdc;
    overflow: hidden;
    .pic {
        width: 125px;
        height: 100px;
        float: left;
    }
`;
export const ListContent = styled.div`
    width: 500px;
    float: left;
    h3 {
        line-height: 27px;
        font-size: 18px;
        color: #333;
        font-weight: 700;
        margin-bottom: 10px;
    }
    p {
        font-size: 13px;
        color: #999;
        line-height: 18px;
    }
`;
export const AddMore = styled.div`
    width: 100%;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    :hover {
        background: #9b9b9b;
    }
`;
export const RecommendWrapper = styled.div`
    width: 280px;
    margin: 30px 0;
`;
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;
export const BackTop = styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border: 1px #ccc solid;
    cursor: pointer;
    .back-top {
        margin-left: 10px;
    }
    :hover {
        background-color: #dcdcdc;
    }
`;
