import dayjs from "dayjs";

export function calcaulateDiff(timeInMs) {
  const timestamp = dayjs(timeInMs);
  const nowDayjs = dayjs();

  if (timestamp.isBefore(nowDayjs)) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }
  return {
    seconds: getRemainingSeconds(timestamp, nowDayjs),
    minutes: getRemainingMinutes(timestamp, nowDayjs),
    hours: getRemainingHours(timestamp, nowDayjs),
    days: getRemainingDays(timestamp, nowDayjs),
  };
  console.log(timestamp);
}

function getRemainingSeconds(timestamp, nowDayjs) {
  return padWithZero(timestamp.diff(nowDayjs, "seconds") % 60, 2);
}
function getRemainingMinutes(timestamp, nowDayjs) {
  return padWithZero(timestamp.diff(nowDayjs, "minutes") % 60, 2);
}
function getRemainingHours(timestamp, nowDayjs) {
  return padWithZero(timestamp.diff(nowDayjs, "hours") % 24, 2);
}
function getRemainingDays(timestamp, nowDayjs) {
  return padWithZero(timestamp.diff(nowDayjs, "days"), 2);
}

function padWithZero(num, length) {
  const numStr = num.toString();
  if (numStr.length >= length) {
    return numStr;
  }
  return "0".repeat(length - numStr.length) + numStr;
}
