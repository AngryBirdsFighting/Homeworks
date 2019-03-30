import * as type from '../action/type.js';
import { combineReducers } from 'redux';
const agentList = (state = { status:true, defaultPath: "", data :[]}, action) => {
    switch(action.type){
        case type.SET_AGENT_LIST:
        return {...state , status:true, data:action.data, defaultPath: action.defaultPath, auths: action.auths}
        default: 
        return {...state}
    }
}
const menuZIndex = (state = true, action) => {
    switch(action.type){
        case type.SET_MENU_Z_INDEX:
        state = action.data
        return state
        default: 
        return state
    }
}
export default combineReducers({
    agentList,
    menuZIndex
});
