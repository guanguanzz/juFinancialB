import axios from "axios";
import qs from "qs";

const listAjax = {}


listAjax.getList = function (params) {
    return axios.get("/api/a/u/product" ,params)
}
listAjax.addData = function (params) {
    return axios.post("/api/a/u/product", qs.stringify(params))
}
//获取单个article
listAjax.getListById = function (params) {
    return axios.get("/api/a/u/real/",params)
}
listAjax.updateData = function (id, params) {
    return axios.put("/api/a/u/product" + "/" + id, qs.stringify(params))
}
listAjax.deleteData = function (id) {
    return axios.delete("/api/a/u/article" + "/" + id)
}

listAjax.updateStatus = function (params) {
    return axios.put("/api/a/u/article/status", qs.stringify(params))
}
export default listAjax