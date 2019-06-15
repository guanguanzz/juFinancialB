let timeChange = time => {
    const newDate = new Date(time);
    return newDate.toLocaleString("zh", {
        hour12: false //转化为24小时格式
    });
}





export default {
    timeChange
}