import axios from "axios";
import * as contants from "./contants";

const changeDetailData = (res) => ({
    type: contants.CHANGE_DETAIL_CONTENT,
    title: res.data.data.title,
    content: res.data.data.content
});

export const getDetailContent = (id) => {
    return (dispath) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            dispath(changeDetailData(res));
        }).catch(() => {
            console.log("error");
        })
    }
};
