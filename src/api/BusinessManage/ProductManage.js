import axios from "axios";
import qs from "qs";

const listAjax = {}


listAjax.getList = function (params) {
    return axios.get("/api/a/u/product" ,params)
}
listAjax.postImg = function (params, config) {
    console.log(params)
    return axios.post("/api/a/u/img/task", params, config)
}
listAjax.addData = function (params) {
    return axios.post("/api/a/u/article", qs.stringify(params))
}
listAjax.updateData = function (id, params) {
    return axios.put("/api/a/u/article" + "/" + id, qs.stringify(params))
}
listAjax.deleteData = function (id) {
    return axios.delete("/api/a/u/article" + "/" + id)
}
//获取单个article
listAjax.getArticle = function (params) {
    return axios.get("/api/a/article" + "/" + params)
}
listAjax.updateStatus = function (params) {
    return axios.put("/api/a/u/article/status", qs.stringify(params))
}
export default listAjax