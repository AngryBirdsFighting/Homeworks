
import { isEmptyByObj } from "../utils/tools";

class Fetch {
    constructor(){
        this.baseUrl = Config.baseUrl; 
        this.reqConfig = {
            credentials: 'include',
            method: "",
            headers: {
              'Accept': 'application/json',
              'Content-Type' : 'application/json'
            },
            // mode: "cors",
            cache: "no-cache"
        }
    }
    // 增加超时限制
    request(url, param){
        return  Promise.race([
            fetch(url,param),
            new Promise(function(resolve,reject){ 
                setTimeout(()=> reject({status:"408"}), Config.overtime)
            })
        ]).then( res=> {
            return res          
        }).catch(err => {
            return err
        })      
    }

    /**发送请求
     * @param {Object} param url接口，data请求参数， method 请求类型，不写为Get
     */
    async fetchAjax(param){
        this.reqConfig.method = param.method || "Get";  
        if(param.data){
            if(this.reqConfig.method === "Get"){
                param.url += "?";
                let i = 0
                for (const key in param.data) {
                    if(i !== 0 ){
                        param.url += "&";
                    }
                    param.url += `${key}=${param.data[key]}`
                    i++        
                }
            } else {
                this.reqConfig.body = JSON.stringify(param.data)
            }
        }  
        var res = await this.request(this.baseUrl + param.url, this.reqConfig);
        if(res.status === 200)
            return await res.json()
        else
            return Promise.reject(this.judgeRes(res))        
    }

    // 错误判断
    judgeRes(res){
        let message = ""
        switch (parseInt(res.status)) {
            case 302:
              message = '错误请求：找不到url请求（后台过滤）';
              break;
            case 400:
              message = '错误请求：字段名称、类型前后台不一致';
              break;
            case 401:
              message = '未授权，请重新登录';
              break;
            case 403:
              message = '拒绝访问';
              break;
            case 404:
              message = '请求错误,未找到该资源';
              break;
            case 405:
              message = '请求方法未允许,可能是请求类型(get post)不一致';
              break;
            case 408:
              message = '请求超时';
              break;
            case 500:
              message = '服务器端出错';
              break;
            case 501:
              message = '网络未实现';
              break;
            case 502:
              message = '网络错误';
              break;
            case 503:
              message = '服务不可用';
              break;
            case 504:
              message = '网络超时';
              break;
            case 505:
              message = 'http版本不支持该请求';
              break;
            default:
              message = `连接错误${res.status}`;
        }
        return message
    }
}

export default Fetch 