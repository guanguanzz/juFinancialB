import service from '@/config/request'

export function getNameList(params){
    return service({
        url: '/api/a/u/real',
        method: 'get',
        params:params
    })
}
export function lookName(id){//查看申请实名详情
    return service({
        url: `/api/a/u/real/${id}`,
        method: 'get',
    })
}

export function fiveout(params){//实名列表审核
    return service({
        url: '/api/a/u/real',
        method: 'put',
        data:qs.stringify(params)
    })
}