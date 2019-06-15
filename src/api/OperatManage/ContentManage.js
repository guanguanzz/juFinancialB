import Axios from "axios";

var getlist = function(onPage,title,type,status,creatBy,update_begin,update_end){
    let data = {
        pages:onPage,
        title:title,
        itype:type,
        status,
        update_by:creatBy,
        update_begin,
        update_end,
    }
    console.log(data)
    // data = JSON.stringify(data)
    // console.log(data)
    return Axios.get('/api/a/u/content/query',data)
}

var changestatus = function(id,status){
    let data = {
        id,
        status:status,
    }
    return Axios.put('/api/a/u/content/up',data)
}

var cut = function(id){
    return Axios.delete(`/api/a/u/content/del/${id}`,)
}

export {getlist,changestatus,cut} 