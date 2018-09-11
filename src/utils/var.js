//服务端返回的字段
export const RES_CODE = {
    'code_succ': '0',//接口请求成功
    'code_login_invalidate': '-1',//会话过期，需要重新登录
    'code_url_invalidate': '-1000',//接口url无效
    'code_json_invalidate': '-1001',//json数据格式无效
    'code_data_unrespond': '-9999',//接口返回的data为空
    'code_method_unexpection': '-9998',//接口异常
    'code_network_err': '-9997'//网络异常
}