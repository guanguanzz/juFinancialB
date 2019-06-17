import Axios from "axios";

let bianji = (id) => {
    return Axios.get(`/api/a/u/content/skip/${id}`)
}
//新增接口
let add = (title, type, url,status) => {
    let data = {
        title,
        itype: type,
        imgUrl: url,
        status,
    }
    data = JSON.stringify(data)
    console.log(data)
    return Axios.post('/api/a/u/content/add', data)
}
//编辑接口 需要id参数
let alter = (title, type, url,status,id) => {
    let data = {
        title,
        itype: type,
        imgUrl: url,
        status,
        id,
    }
    data = JSON.stringify(data)
    console.log(data)
    return Axios.put('/api/a/u/content/alter', data)
}

export {
    bianji,
    add,
    alter
}