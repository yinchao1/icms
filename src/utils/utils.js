/**
 * @default 字符类参数操作
 */
const STRING_PROTOTYPE = '[Object String]';
const NUMBER_PROTOTYPE = '[Object Number]';
const BOOL_PROTOTYPE = '[Object Boolean]';
const OBJECT_PROTOTYPE = '[Object Object]';


function protoString(obj){
    return Object.prototype.toString.call(obj);
}

export function isObject(obj){
    return protoString(obj) == OBJECT_PROTOTYPE;
}

export function isString(obj){
    return protoString(obj) == STRING_PROTOTYPE;
}
 

export function mergeDeep(to, ...origins){
    if(origins && origins.length > 0){
        origins.forEach((from)=>{
            for(const key in from){
                const value = from[key];
                switch(protoString(value)){
                    case OBJECT_PROTOTYPE:
                        if(to[key] == undefined){
                            to[key] = {};
                        }
                        mergeDeep(to[key], value);
                        break;
                    default:
                        to[key] = value;
                        break;
                }
            }
        });
    }
    return to;
}

export function pagination(page, pageSize, totalCount, callback){
    return {
        current: page, //当前页数
        pageSize: pageSize, //每页条数
        total: totalCount, //数据总数
        showTotal: (total)=>{
            return `共${total}条`
        },
        onChange: (current)=>{
            callback(current);
        }
    }
}