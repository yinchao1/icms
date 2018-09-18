//reducer/login.js/登录相关

export default function loginReducer(state={}, action){
    switch(action.type){
        case 'USERINFO': 
            return Object.assign({}, state, {
                userInfo: {...action}
            })
        default: 
            return state;
    }
}