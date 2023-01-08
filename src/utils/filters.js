import dayjs from "dayjs";

const filterTime = (date, format = "YYYY-MM-DD") => {
  if (!isNull(date)) {
    date = parseInt(date) * 1000;
    return dayjs(date).format(format);
  } else {
    return "--";
  }
};

export const isNull = (date) => {
  if (!date) return true;
  if (JSON.stringify(date) === "{}") return true;
  if (JSON.stringify(date) === "[]") return true;
};

export default (Vue) => {
  Vue.prototype.$filters = filterTime;
};
