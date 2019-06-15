import service from '@/config/request'

export function getNameList(params){
    return service({
        url: '/api/a/u/real',
        method: 'get',
        params:params
    })
}