import Axios from "axios";
//新增接口
let add = (title, send, descAt,imgUrl,timeOr,readTime,status) => {
    let data = {
        title,
        send,
        descAt,
        timeOr,
        readTime,
        imgUrl,
        status,
    }
    console.log(data)
    data = JSON.stringify(data)
    console.log(data)
    return Axios.post('/api/a/u/word/add', data)
}

export {
    add
}