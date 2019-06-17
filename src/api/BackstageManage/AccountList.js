import Axios from "axios";
import qs from 'qs'

let https = {};

//渲染账户列表
https.accountList = function(params){
    return Axios.get("/api/a/u/admin",{
        params:params
    })
}

//账户管理列表 请求单条数据详情--准备进入编辑页面
https.accountGet = function(id){
    return Axios.get(`/api/a/u/admin/${id}`)
}

//账户管理-编辑 (编辑接口，这次后端不需要我把id放到url中，id直接转成JSON格式，传参)
https.accountEdit = function(params){
    return Axios.put("/api/a/u/admin",qs.stringify(params))
}

//账户管理-删除
https.accountDelete = function(id){
    return Axios.delete(`/api/a/u/admin/${id}`)
}

//模块管理列表
https.moduleList = function(params){
    return Axios.get("/api/a/u/module",{
        params:params
    })
}

// 角色管理列表
https.roleList = function(params){
    return Axios.get("/api/a/u/role",{
        params:params
    })
}

//渲染销量统计
https.salesCount = function(params){
    return Axios.get("/api/a/u/count",{
        params:params
    })
}

//销量统计详情
https.salesCountDetail = function(pid){
    return Axios.get(`api/a/u/count/${pid}`)
}





export default https;