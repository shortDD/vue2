import SvgIcon from "@/components/SvgIcon";
/* 获取svg下所有.svg文件 */
const svgRequired = require.context("./svg", false, /\.svg$/);
/* 引入所有.svg文件 */

svgRequired.keys().forEach((item) => {
  svgRequired(item);
});
/* 注册全局组件 */
export default (Vue) => {
  Vue.component("svg-icon", SvgIcon);
};
