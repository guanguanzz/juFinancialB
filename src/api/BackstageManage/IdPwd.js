import Axios from "axios";

let https = {};


https.idPwd = function(params){
    return Axios.get("/api/a/u/admin",{
        params:params
    })
}



export default https;