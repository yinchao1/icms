import {combineReducers} from 'redux';

// const reducer = combineReducers({
//     login,
//     switchMenu
// });
// export default reducer;

// //登录信息
// function login(state= {}, action){
//     return {
//         ...state, 
//         menus: action.menus,
//         userName: action.userName
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
                menuName: action.menuName,
                menuKey: action.menuKey
            }
        }
        default:
            return {
                ...state,
                userName: '未登录'
            }
    }
}
