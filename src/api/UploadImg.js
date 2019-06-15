import Axios from "axios";


let upImg = (data,config)=>{
    return Axios.post('/api/a/u/img',data,config)
}

export{
    upImg
}