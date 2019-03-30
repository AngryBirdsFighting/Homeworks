/*
 * @Author: Wang Chao 
 * @Date: 2019-01-21 20:47:14 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-03-29 10:21:53
 * @Description:  
 */
import React,{Component} from "react"
class Home extends Component{
    componentWillMount() {
        console.log(this.props)
     }
    render(){
        return(
            <menu className="menu-container">
                <ul className="menu-ul">
                    <li>
                        <i className="icon-dashboard"></i>
                        <span>DASHBOARD</span>
                    </li>
                </ul>
            </menu>
        )
    }
}

export default Home