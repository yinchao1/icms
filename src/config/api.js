//环境变量: 0--测试、1--预生产、2--生产
export const __env = 0;

//通讯协议
const __http_protocol = "https";

//主域名
const __host_main = "icms.xiaomaigui.com";

//二级域名头
const __host_sub_preffix = ["api.", "api2.", "nearapi."];

//完整域名
//export const baseURL = `${__http_protocol}/${__host_sub_preffix[__env]}/${__host_main}`;
export const baseURL = "https://www.easy-mock.com/mock/5b91daa7b5b02e06692ed09c/icmsapi";

//登录
export const loginApi = "/login.html";
