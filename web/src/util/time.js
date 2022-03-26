export function getYMDHMS(timestamp) {
  let time = new Date(timestamp);
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let date = time.getDate();
  let hours = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  if (month < 10) {
    month = "0" + month;
  }
  if (date < 10) {
    date = "0" + date;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  return (
    year +
    "年" +
    month +
    "月" +
    date +
    "日  " +
    hours +
    "时" +
    minute +
    "分" +
    second +
    "秒"
  );
}
