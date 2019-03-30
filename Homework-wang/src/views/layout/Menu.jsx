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
                    <li className="active">
                        <i className="icon-dashboard"></i>
                        <span>DASHBOARD</span>
                    </li>
                    <li>
                        <i className="icon-sitemap"></i>
                        <span>AGENT</span>
                    </li>
                    <li>
                        <i className="icon-boat"></i>
                        <span>MY CRUISE</span>
                    </li>
                    <li>
                        <i className="icon-life-bouy"></i>
                        <span>HELP</span>
                    </li>
                </ul>
                <div className="history">
                    <p>History</p>
                </div>
            </menu>
        )
    }
}

export default Home