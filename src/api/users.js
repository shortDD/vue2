import http from "./index";

export const getUser = (params) => {
  return http({
    url: "/users",
    params,
  });
};

export const changeUserState = (uId, type) => {
  return http({
    url: `users/${uId}/state/${type}`,
    method: "put",
  });
};

export const addUser = (data) => {
  return http({
    url: "users",
    method: "POST",
    data,
  });
};

export const editUser = (data) => {
  return http({
    url: `users/${data.id}`,
    method: "put",
    data,
  });
};

export const delUser = (id) => {
  return http({
    url: `users/${id}`,
    method: "delete",
  });
};
