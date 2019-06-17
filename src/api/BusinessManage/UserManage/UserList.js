import service from '@/config/request'
import qs from "qs";

export function getList(params){
    return service({
        url: '/api/a/u/user',
        method: 'get',
        params:params
    })
}

export function amendUser(id,params){//修改用户信息
    return service({
        url: `/api/a/u/user/${id}`,
        method: 'put',
        data:qs.stringify(params)
    })
}

export function lookUser(id){//查看用户信息
    return service({
        url: `/api/a/u/user/${id}`,
        method: 'get',
    })
}

export function bankcard(bid){//银行卡解绑
    return service({
        url: `/api/a/u/bankcard/${bid}`,
        method: 'delete',
    })
}

export function transaction(params){//交易记录列表
      return service({
          url:'/api/a/u/transaction',
          method:'get',
          params:params
      })
}


export function investment(params){//投资记录列表
    return service({
        url:'/api/a/u/investment',
        method:'get',
        params:params
    })
}


export function fiveout(params){//实名列表审核
    return service({
        url: '/api/a/u/real',
        method: 'put',
        data:qs.stringify(params)
    })
}
