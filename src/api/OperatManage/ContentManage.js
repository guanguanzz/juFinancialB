import Axios from "axios";

var getList = function(title,type,status,creatBy,creatAt,){
    return Axios.get('/api/a/u/content/query',{
        title,
        itype:type,
        status,
        update_by:creatBy,
        update_at:creatAt
    })
}

export {getList} 