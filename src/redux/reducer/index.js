import {combineReducers} from 'redux';

// const reducer = combineReducers({
//     userInfo,
//     switchMenu
// });
// export default reducer;

//登录信息
// function userInfo(state= {}, action){
//     return {
//         ...state, 
//         menus: action.menus,
//         userInfo: action.userInfo
//     }
// }

// //切换菜单
// function switchMenu(state={}, action){
//     return {
//         ...state, 
//         menuName: action.menuName
//     }
// }

const initialState = {
    menus: ''
}
export default (state = initialState, action)=>{
    switch(action.type){
        case "USERINFO":
            return {
                ...state,
                userName: action.userName
            }
        case "SWITCHMENU":{
            return {
                ...state,
                menuName: action.menuName
            }
        }
        default:
            return {
                ...state,
                userName: '未登录'
            }
    }
}
