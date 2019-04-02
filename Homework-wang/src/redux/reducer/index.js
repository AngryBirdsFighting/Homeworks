import * as type from "../action/type.js";
import { combineReducers } from "redux";
/**
 * 初始化agents页面数据
 * agentsList:列表数据,
 * statisticalData:统计数据,
 * */
let initAgentsData = {
    agentsList:[],
    statisticalData:{
        virtual:0,
        physical:0,
        building:0,
        idle:0
    }
}
// agents数据纯函数
const agentsData = (state = initAgentsData, action) => {
    switch(action.type){
        case type.SET_AGENTS_DATA:
        return {...state, agentsList:action.agentsList, statisticalData: action.statisticalData}
        case type.SET_AGENTS_FILTER_DATA:
        return {...state, agentsList:action.agentsList}
        default:
        return state
    }
}
// history数据纯函数
const historyList = (state = [], action) => {
    switch(action.type){
        case type.UPDATE_AGENT_SET_HISTORY:
        return [...state, action.data]
        default:
        return state
    }
}
// 菜单状态纯函数
const menuStatus = (state = false, action) => {
    switch(action.type){
        case type.SET_MENU_SHOW_OR_HIDDEN:
        state = action.data
        return state
        default:
        return state
    }
}
// 弹窗状态纯函数
const dialogStatus = (state = true, action) => {
    switch(action.type){
        case type.SET_ADD_DIALOG_STATUS:
        state = action.data
        return state
        default:
        return state
    }
}
// 页面高度纯函数
const viewHeight = (state = 0, action) => {
    switch(action.type){
        case type.SET_VIEW_HEIGHT:
        state = action.data
        return state
        default:
        return state
    }
}
export default combineReducers({
    agentsData,
    menuStatus,
    dialogStatus,
    historyList,
    viewHeight
});
