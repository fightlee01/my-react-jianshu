import axios from "axios";
import * as contants from "./contants";

const changeLogin = () => ({
    type: contants.CHANGE_LOGIN,
    flag: true
});

export const loginout = () => ({
    type: contants.LOGINOUT,
    flag: false
});
export const checkLogin = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
            if(res.data.data) {
                dispatch(changeLogin());
            }else {
                alert("登陆失败！！");
            }
        }).catch(() => {
            console.log("error");
        })
    }
};
