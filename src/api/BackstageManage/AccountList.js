import Axios from "axios";

let https = {};

//渲染账户列表
https.accountList = function(params){
    return Axios.get("/api/a/u/admin",{
        params:params
    })
}

https.moduleList = function(params){
    return Axios.get("/api/a/u/module",{
        params:params
    })
}

https.roleList = function(params){
    return Axios.get("/api/a/u/role",{
        params:params
    })
}




export default https;