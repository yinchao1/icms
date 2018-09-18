import {combineReducers} from 'redux';
import menusReducer from './menusReducer';
import loginReducer from './loginReducer';


const rootReducer = combineReducers({
    userInfo: loginReducer,
    menus: menusReducer
});
export default rootReducer;