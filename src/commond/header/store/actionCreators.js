import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});
export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});
export const mouseLeave = () =>({
    type: constants.MOUSE_LEAVE
});
export const handleChangeList = (page) =>({
    type: constants.HANDLE_CHANGE,
    page
});

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const getChangeList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            dispatch(changeList(res.data.data));
        }).catch(() => {
            console.log('error');
        });
    }
};