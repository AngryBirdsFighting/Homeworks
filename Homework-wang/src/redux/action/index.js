
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
const setAgentList = (data) =>(
    {type: type.SET_AGENT_LIST,
     data
    }
)
const setMenuZIndex = (data) =>(
    {type: type.SET_MENU_Z_INDEX,
     data
    }
)
const setAddDialogStatus = (data) =>(
    {type: type.SET_ADD_DIALOG_STATUS,
     data
    }
)
const setHistoryList = (data) =>(
    {type: type.SET_HISTORY,
     data
    }
)
export const  setAgentListAsync = (params) => {
    return dispatch => {
        requestData(params).then( res => {
            console.log(res)
            dispatch(setAgentList(res))
        }).catch()
    }
}
export const  setHistoryListAsync = (params) => {
    return (dispatch, getState) => {
        requestData(params).then( res => {
          
            let states = getState()
            let index =  states.historyList.indexOf(params.data.name)
            if(index == -1){
                dispatch(setHistoryList(params.data.name))
            }
        }).catch()
    }
}
export const  setMenuZIndexSync = (data) => {
    return dispatch => {
        dispatch(setMenuZIndex(data))
    }
}
export const  setAddDialogStatusSync = (data) => {
    return dispatch => {
        dispatch(setAddDialogStatus(data))
    }
}