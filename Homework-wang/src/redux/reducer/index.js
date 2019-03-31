import * as type from '../action/type.js';
import { combineReducers } from 'redux';
const agentList = (state = [], action) => {
    switch(action.type){
        case type.SET_AGENT_LIST:
        state = action.data
        return state
        default: 
        return state
    }
}
const historyList = (state = [], action) => {
    switch(action.type){
        case type.SET_HISTORY:
        return [...state, action.data]
        default: 
        return state
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
const dialogStatus = (state = true, action) => {
    switch(action.type){
        case type.SET_ADD_DIALOG_STATUS:
        state = action.data
        return state
        default: 
        return state
    }
}
export default combineReducers({
    agentList,
    menuZIndex,
    dialogStatus,
    historyList
});
