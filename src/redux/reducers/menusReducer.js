//reducer/menus.js/菜单相关


export default function menusReducer(state={}, action){
    switch(action.type){
        case 'SWITCHMENU':
            return Object.assign({}, state, { menus: {...action}})
        default: 
            return state;
    }
}

