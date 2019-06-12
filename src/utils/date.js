// 时间处理：
export function timeChange(time) { //将时间戳转为日期格式
    let newDate = new Date(time);
    return newDate.toLocaleString("chinese", {
        hour12: false   //转化为24小时格式
    });
}


// export timeChine(t){ //将时间戳转为日期格式
//     let newDate = new Date(t);
//     return newDate.toLocaleString("chinese", {
//         hour12: false
//     });
// }





export function time(t) { //将日期格式转为时间戳
    const date = new Date(t);
    const time1 = date.getTime();
    return time1;
}

