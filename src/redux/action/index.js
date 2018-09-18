import axios from '../../utils/axios'

const IcmsActionCreator = {
    //同步操作，切换菜单
    switchMenu(menuName, menuKey){
        return {
            type: 'SWITCHMENU',
            menuName,
            menuKey
        }
    },

    //同步操作，用户信息
    login(userName){
        return {
            type: 'USERINFO',
            userName
        }
    },

    //异步操作，获取菜单数据
    initMenu(){
        return (dispatch)=>{
            dispatch({type: 'REQUEST_MENUS'});
            axios("/initMenu").then(response=>{
                dispatch({type: 'RECEIVE_MENUS', success: true, menus: response.data.lists});
            }).catch(error=>{
                dispatch({type: 'RECEIVE_MENUS', success: false});
            })
        }
    }
}
export default IcmsActionCreator;