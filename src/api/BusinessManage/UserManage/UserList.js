import service from '@/config/request'

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
        data:params
    })
}

export function lookUser(id){//修改用户信息
    return service({
        url: `/api/a/u/user/${id}`,
        method: 'get',
    })
}

export function transaction(params){//交易记录列表
      return service({
          url:'/api/a/u/transaction',
          method:'get',
          params:params
      })
}


export function investment(params){//交易记录列表
    return service({
        url:'/api/a/u/investment',
        method:'get',
        params:params
    })
}