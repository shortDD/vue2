import Vue from "vue";
import VueRouter from "vue-router";

// 缓存原本的push方法
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;

// 指定新的push方法
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  // 如果指定了成功或者失败的回调
  if (onResolve || onReject) {
    // 直接调用原本的push方法
    /**
     * 不能直接调用，因为打包成为严格模式下this不是router而是undefined
     */
    // originalPush(location, onResolve, onReject)
    return originalPush.call(this, location, onResolve, onReject);
  }
  // 没有指定成功或者失败的回调，要用catch处理
  return originalPush.call(this, location).catch((err) => {
    // 如果是重复导航产生的错误，不再向外传递错误
    if (VueRouter.isNavigationFailure(err)) {
      // 产生的是成功的promise，成功的promise的value是err
      // 产生失败的promise：抛出错误或者return一个失败的promise
      return err;
    }

    // 如果不是重复导航的错误，将错误向下传递
    return Promise.reject(err);
  });
};

VueRouter.prototype.replace = function (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject);
  }
  return originalReplace.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      return err;
    }
    return Promise.reject(err);
  });
};

Vue.use(VueRouter);
//配置路由
const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login"),
  },

  {
    path: "/",
    name: "home",
    component: () => import("@/layout"),
    redirect: "/users",
    children: [
      {
        path: "users",
        name: "users",
        component: () => import("@/views/users/index.vue"),
      },
      {
        path: "categories",
        name: "categories",
        component: () => import("@/views/categories/index.vue"),
      },
      {
        path: "goods",
        name: "goods",
        component: () => import("@/views/goods/index.vue"),
      },
      {
        path: "orders",
        name: "orders",
        component: () => import("@/views/orders/index.vue"),
      },
      {
        path: "params",
        name: "params",
        component: () => import("@/views/params/index.vue"),
      },
      {
        path: "reports",
        name: "reports",
        component: () => import("@/views/reports/index.vue"),
      },
      {
        path: "rights",
        name: "rights",
        component: () => import("@/views/rights/index.vue"),
      },
      {
        path: "roles",
        name: "roles",
        component: () => import("@/views/roles/index.vue"),
      },
    ],
  },
];
const router = new VueRouter({
  routes,
});
export default router;
