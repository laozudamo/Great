import service from "@/utils/request.js";

// login
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

export function register(data) {
  return service({
    url: "/base/register",
    method: "POST",
    data,
  });
}
