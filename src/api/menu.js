import http from "./index";

export const menuList = () => {
  return http({
    url: "/menus",
  });
};
