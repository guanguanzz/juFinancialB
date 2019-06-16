import Axios from "axios";
//新增接口
let add = (title, send, desc_,img_url,time_or,read_time,status) => {
    let data = {
        title,
        send,
        desc_,
        time_or,
        read_time,
        img_url,
        status,
    }
    console.log(data)
    data = JSON.stringify(data)
    console.log(data)
    return Axios.post('/api/a/u/content/add', data)
}

export {
    add

}