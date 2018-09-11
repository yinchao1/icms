import axios from 'axios'
import {isObject, mergeDeep} from '../utils/utils';
import {RES_CODE} from '../utils/var';
import {baseURL} from '../config/api';


const defaultOptions = {
    baseURL,
    method: 'post',
    timeout: 30000,
    responseType: 'json'
}

/**返回状态码 */
const msgCode = "code";
const msgName = "msg";

function setHeader(headers){
    if(headers == 'undefined' || !headers || !isObject(headers)){
        console.log("setHeader's header must be an object!");
        headers= {};
    }
    return mergeDeep({}, {'content-type': 'application/x-www-form-urlencoded'}, headers);
}

export default{
    doRequest: function(url, data = {}, header = {}){
        return new Promise((resolve, reject) => {
            let ret = {};//reject 返回Object
            if(!url){
                ret[msgCode] = RES_CODE.code_url_invalidate;
                ret[msgName] = '请求url无效';
                reject(ret);
                return;
            }

            let options = {
                url,
                data
            }
            //获取头部信息
            let _header = setHeader(header);
            options['headers'] = _header;

            //服务器响应回调
            let response = (res)=>{
                if(res.status == '200'){
                    let _data = res.data || {};
                    /* 校验json格式 */
                    if(typeof _data === 'string'){
                        try{
                            _data = JSON.parse(_data);
                        }catch(e){
                            ret[msgCode] = RES_CODE.code_json_invalidate;
                            ret[msgName] = 'json格式数据无效';
                            reject(ret);
                            return;
                        }
                    }

                    if(_data){
                        let code = _data.code; //返回的状态吗
                        ret[msgCode] = code;
                        let resData = _data.data || {};//返回的数据集

                        //登录失效
                        if(code == RES_CODE.code_login_invalidate){
                            ret[msgName] = '会话已过期，请重新登录';
                            reject(ret);
                            return;
                        }

                        //请求成功
                        if(code == RES_CODE.code_succ){
                            resolve(resData);
                        }else{
                            ret[msgName] = _data.msg || '未知类型错误';
                            reject(ret);
                        }
                    }else{
                        /* response data数据为空*/
                        ret[msgCode] = RES_CODE.code_data_unrespond;
                        ret[msgName] = '服务器返回数据为空';
                        reject(ret);
                    }
                }else{
                    ret[msgCode] = RES_CODE.code_method_unexpection;
                    ret[msgName] = res.data || '接口异常';
                    reject(ret);
                    return;
                }
            }

            axios(mergeDeep({}, defaultOptions, options)).then(response);
        });
    }
}