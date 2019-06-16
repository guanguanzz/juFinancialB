import Axios from "axios";

var getlist = function(onPage,title,type,status,updateBy,updateBegin,updateEnd){
    let data = {
        pages:onPage,
        title:title,
        itype:type,
        status,
        updateBy,
        updateBegin,
        updateEnd,
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
    data=JSON.stringify(data)
    return Axios.put('/api/a/u/content/up',data)
}

var cut = function(id){
    return Axios.delete(`/api/a/u/content/del/${id}`,)
}

export {getlist,changestatus,cut} 