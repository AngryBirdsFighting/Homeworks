/*
 * @Author: Wang Chao 
 * @Date: 2019-01-22 16:49:47 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-29 11:13:40
 * @Description:  redux action 管理
 */
import * as type from './type';
import Fetch from "../../fetch/index"
let fetch = new Fetch()

let requestData = (params) => {
    return new Promise((resolve, reject) => {
        let param = {
            url: params.url,
            data: params.data
        }
        fetch.fetchAjax(param).then( res => {
            resolve(res)
        })
    })
}
// let addAgent = (params) => {
//     return new Promise((resolve, reject) => {
//         let param = {
//             url: "/getPermission",
//             data: {}
//         }
//         fetch.fetchAjax(param).then(res => {
//             resolve(res)
//         })
//     })
// }
// let deleteAgent = () => {
//     return new Promise((resolve, reject) => {
//         let param = {
//             url: "/getPermission",
//             data: {}
//         }
//         fetch.fetchAjax(param).then(res => {
//             resolve(res)
//         })
//     })
// }
const setAgentList = (data, defaultPath,auths) =>(
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
export const  setAugetListAsync = (params) => {
    return dispatch => {
        requestData(params).then( res => {
            console.log(res)
            dispatch(setAgentList(res))
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