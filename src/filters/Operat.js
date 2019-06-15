

let statusFilters = function (value) {
    switch (value) {
        case 1:
            value = '草稿'
            break;
        case 2:
            value = '已上线'
            break;
    }
    return value;
}

let upDownFilters = function (value) {
    switch (value) {
        case 1:
            value = '上线'
            break;
        case 2:
            value = '下线'
            break;
    }
    return value;
}

let timeFilters=function (value) {
    var date = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y, M, D, h, m, s;
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    let ggg = Y + M + D + h + m +s
    return ggg;
}

let loStatus = function (value,a,b,c) {
    switch (value) {
        case 0:
            value = a
            break;
        case 1:
            value = b
            break;
        case 2:
            value = c
            break;
    }
    return value;
}

export {
    statusFilters,
    upDownFilters,
    timeFilters,
    loStatus
}
   
