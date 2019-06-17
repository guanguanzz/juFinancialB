let timeChange = time => {
  const newDate = new Date(time);
  return newDate.toLocaleString("zh", {
    hour12: false //转化为24小时格式
  });
}

let formatDate = function (value) {
  let date = new Date(value);
  let Y = date.getFullYear();
  let M = date.getMonth() + 1;
  M = M < 10 ? "0" + M : M;
  let D = date.getDate();
  D = D < 10 ? "0" + D : D;
  return Y + "-" + M + "-" + D;
}

let formatDate2 = function (value2) {
  let date2 = new Date(value2);
  let h = date2.getHours();
  h = h < 10 ? "0" + h : h;
  let m = date2.getMinutes();
  m = m < 10 ? "0" + m : m;
  let s = date2.getSeconds();
  s = s < 10 ? "0" + s : s;
  return h + ":" + m + ":" + s;
}

let moneyChange = function (num) { //千分位转化,并保留两位

  // let change = num.toLocaleString('zh', { style: 'currency', currency: 'cny' }); //此方法前面的￥无法去除
  // return change

  return (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}




export default {
  timeChange,
  formatDate,
  formatDate2,
  moneyChange
}