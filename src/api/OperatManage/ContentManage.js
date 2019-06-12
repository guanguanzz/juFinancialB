import Axios from "axios";

var getlist = function(title,type,status,creatBy,creatAt,){
    return Axios.get('/api/a/u/content/query',{
        title:title,
        itype:type,
        status,
        update_by:creatBy,
        update_at:creatAt
    })
}

export {getlist} 