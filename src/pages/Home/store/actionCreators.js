import axios from "axios";
import * as contants from "./contants";
import { fromJS } from "immutable";

const changeHomeData = (res) => ({
    type: contants.CHANGE_HOME_LIST,
    topicList: res.data.data.topicList,
    acticleList: res.data.data.acticleList,
    recommendList: res.data.data.recommendList
});
const changeMoreData = (res, nextPage) => ({
    type: contants.GET_MORE_LIST,
    list: fromJS(res.data.data.acticleList),
    nextPage
});

export const getHomeInfo = () => {
    return (dispath) => {
        axios.get('/api/home.json').then((res) => {
            dispath(changeHomeData(res));
        }).catch(() => {
            console.log("not get more error");
        })
    }
};
export const getMoreList = (page) => {
    return (dispath) => {
        axios.get('/api/moreList.json?page='+ page).then((res) => {
            dispath(changeMoreData(res, page + 1));
        }).catch(() => {
            console.log("error");
        })
    }
};

export const changeScrollState = (flag) => ({
    type: contants.CHANGE_SCROLL_STATE,
    flag
});