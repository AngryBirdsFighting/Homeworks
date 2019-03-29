/*
 * @Author: Wang Chao 
 * @Date: 2019-01-21 20:47:14 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-03-29 14:51:50
 * @Description:  
 */
import React,{Component} from "react"

class Home extends Component{
    componentWillMount() {
        console.log(this.props)
     }
    render(){
        return(
            <div>
                <div className="content-container">
                </div>
            </div>
        )
    }
}

export default Home