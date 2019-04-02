
import * as type from './type';
import Fetch from "../../fetch/index"
let fetch = new Fetch()

let requestData = (params) => {
    return new Promise((resolve, reject) => {
        let param = {
            method: params.method,
            url: params.url,
            data: params.data
        }
        fetch.fetchAjax(param).then( res => {
            resolve(res)
        })
    })
}
// 无筛选条件设置agents数据
const setAgentsData = (agentsList,statisticalData) =>(
    {type: type.SET_AGENTS_DATA,
     agentsList,
     statisticalData
    }
)
// 通过筛选条件（type or like name）设置agents数据
const setAgentsFilterData = (agentsList) =>(
    {type: type.SET_AGENTS_FILTER_DATA,
     agentsList
    }
)
// 菜单显示隐藏
const setMenuShowOrHidden = (data) =>(
    {type: type.SET_MENU_SHOW_OR_HIDDEN,
     data
    }
)
// 弹窗显示隐藏
const setAddDialogStatus = (data) =>(
    {type: type.SET_ADD_DIALOG_STATUS,
     data
    }
)
// 添加历史记录
const updateAgentSetHistoryList = (data) =>(
    {type: type.UPDATE_AGENT_SET_HISTORY,
     data
    }
)
// 异步设置agents数据
export const  setAgentListAsync = (params) => {
    return dispatch => {
        requestData(params).then( res => {
            let isFilter = params.data["type"] || params.data["name_like"] || false;
            // 构造统计数据，如果有筛选条件不修改统计数据
            if(!isFilter){
                let statisticalData = null;
                let statisticsNum = res.reduce((pre,cur)=>{
                    if(cur.status in pre){
                        pre[cur.status]++
                    }else{
                        pre[cur.status] = 1 
                    }
                    return pre
                    },{})
                let typeNum = res.reduce((pre,cur)=>{
                    if(cur.type in pre){
                        pre[cur.type]++
                    }else{
                        pre[cur.type] = 1 
                    }
                    return pre
                    },{})
                statisticalData = {...typeNum, ...statisticsNum}
                dispatch(setAgentsData(res,statisticalData))
            }else{
                dispatch(setAgentsFilterData(res))
            }
        }).catch()
    }
}
// 异步添加history数据
export const  setHistoryListAsync = (params) => {
    return (dispatch, getState) => {
        requestData(params).then( res => {
            let states = getState()
            let index =  states.historyList.indexOf(params.data.name)
            if(index == -1){
                dispatch(updateAgentSetHistoryList(params.data.name))
            }
        }).catch()
    }
}
// 同步设置菜单显示隐藏
export const  setMenuShowOrHiddenSync = (data) => {
    return dispatch => {
        dispatch(setMenuShowOrHidden(data))
    }
}
// 同步设置弹窗显示隐藏
export const  setAddDialogStatusSync = (data) => {
    return dispatch => {
        dispatch(setAddDialogStatus(data))
    }
}
// 设置高度
export const  setViewHeightSync = (data) => {
    return dispatch => {
        dispatch({type:type.SET_VIEW_HEIGHT,data})
    }
}