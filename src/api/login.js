import service from "@/utils/request.js";

export function login(data) {
  return service({
    url: "/user/login",
    method: "POST",
    data,
  });
}

export function getCache() {
  return service({
    url: "/base/captcha",
    method: "GET",
  });
}
