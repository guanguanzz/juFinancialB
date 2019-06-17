import Axios from "axios";

let recover = () => {
    return Axios.get('/api/a/u/warn/back',{
        params:{
            restore:1
        }
    })
}

let store = (imgUrl,invest,creditor,alert,) => {
    let data = {
        imgUrl,
        invest,
        creditor,
        alert
    }
    data = JSON.stringify(data)
    console.log(data)
    return Axios.post('/api/a/u/warn/time',data)
}






export {
    recover,
    store
}