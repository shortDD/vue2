import Vue from "vue";
import App from "./App.vue";
import "@/elementUI/index";
import router from "@/router";
import store from "@/store";
import SvgIcon from "@/icons/index";
import "@/styles/reset.css";
import i18n from "./i18n";
import "driver.js/dist/driver.min.css";
import filters from "@/utils/filters";
Vue.config.productionTip = false;
SvgIcon(Vue);
filters(Vue);
new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
