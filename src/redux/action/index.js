//登录信息
export function login(userName){
    return {
        type: 'USERINFO',
        userName
    }
}

export function switchMenu(menuName,menuKey){
    return {
        type: 'SWITCHMENU',
        menuName,
        menuKey
    }
}
