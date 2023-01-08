import router from "@/router";
import { login as loginApi } from "@/api/login";
import i18n from "@/i18n";
export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem("token") || "",
    siderType: false,
    lang: localStorage.getItem("lang") || "zh",
    tags: JSON.parse(localStorage.getItem("tags")) || ["users"],
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    changeSiderType(state) {
      state.siderType = !state.siderType;
    },
    changeLang(state, lang) {
      state.lang = lang;
      i18n.locale = lang;
      localStorage.setItem("lang", lang);
    },
    setTags(state, path) {
      const index = state.tags.findIndex((tag) => tag === path);
      // index===-1说明当前路径不在标签内 可以添加
      if (index === -1) {
        state.tags.push(path);
        localStorage.setItem("tags", JSON.stringify(state.tags));
      }
    },
    delTag(state, { tagPath, currentPath }) {
      let delIndex;
      state.tags = state.tags.filter((tag, index) => {
        if (tag === tagPath) {
          delIndex = index;
          return false;
        }
        return tag !== tagPath;
      });
      localStorage.setItem("tags", JSON.stringify(state.tags));
      if (currentPath === `/${tagPath}`) {
        //删除的标签是当前的路由,进行路由跳,跳转位置为删除掉的index

        if (delIndex === state.tags.length) {
          router.replace(state.tags[delIndex - 1]);
        } else {
          router.replace(state.tags[delIndex]);
        }
      }
    },
  },
  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginApi(userInfo)
          .then((res) => {
            router.replace("/");
            commit("setToken", res.token);
          })
          .catch((err) => reject(err));
      });
    },
    logOut({ commit }) {
      commit("setToken", "");
      localStorage.clear();
      router.replace("/login");
    },
  },
};
