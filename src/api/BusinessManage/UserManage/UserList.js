import service from '@/utils/request'

export function getList(){
    return service({
        url: '/api/a/u/user',
        method: 'get',
    })
}