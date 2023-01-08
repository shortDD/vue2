import http from "./index";

export const login = (data) => {
  return http({
    url: "/login",
    method: "POST",
    data,
  });
};
