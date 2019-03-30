/*
 * @Author: Wang Chao 
 * @Date: 2019-01-22 16:49:47 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-29 11:13:40
 * @Description:  redux action 管理
 */
import * as type from './type';
import Fetch from "../../fetch/index"
// import {setToken} from "../../utils/tools"
let fetch = new Fetch()

let getAgentList = () => {
    return new Promise((resolve, reject) => {
        let param = {
            url: "/agents",
            data: {}
        }
        fetch.fetchAjax(param).then( res => {
            resolve(res)
        })
    })
}
let addAgent = () => {
    return new Promise((resolve, reject) => {
        let param = {
            url: "/getPermission",
            data: {}
        }
        fetch.fetchAjax(param).then(res => {
            resolve(res)
        })
    })
}
let deleteAgent = () => {
    return new Promise((resolve, reject) => {
        let param = {
            url: "/getPermission",
            data: {}
        }
        fetch.fetchAjax(param).then(res => {
            resolve(res)
        })
    })
}
// 创建action creator
// const setInfo = () =>{
//     return {type: type.SET_INFO}
// }
const setAgentList = (data, defaultPath,auths) =>(
    {type: type.SET_AGENT_LIST,
     data,
     defaultPath,
     auths
    }
)
export const  setAugetListAsync = () => {
    return dispatch => {
        getAgentList().then( res => {
            dispatch(setAgentList(res.data))
        }).catch()
    }
}