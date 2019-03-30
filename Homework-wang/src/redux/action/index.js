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
const setInfo = () =>{
    return {type: type.SET_INFO}
}
const setPermission = (data, defaultPath,auths) =>(
    {type: type.SET_PERMISSION,
     data,
     defaultPath,
     auths
    }
)
const createAuths = (menus, arr) => {
    let auths =  arr.length > 0 ?  arr :  []
    menus.forEach( item => {
       if(item.childrens){
        createAuths(item.childrens, auths)
       }else{
        auths.push({
               name: item.name,
               auth: item.auth
           })
       }
    })
    return auths
}
export const  setInfoAsync = () => {
    return dispatch => {
        Promise.all([getInfo(), getPermission()]).then( res => {
            let permission = res[1].permission
            if(permission && permission.length > 0){
                let defaultPath = permission[0].childrens ? permission[0].childrens[0].path : permission[0].path;
                let auths = createAuths(permission,[])
                dispatch(setPermission(permission, defaultPath, auths))
                setToken("name", "aaa")
                setToken("defaultPath", defaultPath)
            }         
        }).catch( err => {
        })
    }
}