import Vue from "vue";
import VueI18n from "vue-i18n";
import zh from "./zh";
import en from "./en";
// import store from "@/store";
Vue.use(VueI18n);
const messages = {
  zh,
  en,
};

const getCurrentLanguage = () => {
  const lang = navigator.language;
  const langCode = lang.indexOf("zh") !== "-1" ? "zh" : "en";
  localStorage.setItem("lang", langCode);
  // store.commit("app/changeLang", langCode);
  return langCode;
};

const i18n = new VueI18n({
  locale: getCurrentLanguage() || "zh",
  messages,
});
export default i18n;
