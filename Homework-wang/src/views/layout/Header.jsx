/*
 * @Author: Wang Chao 
 * @Date: 2019-01-21 20:47:14 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-03-29 11:12:57
 * @Description:  
 */
import React,{Component} from "react"
import avatar from "../../assets/logo/avatar.jpg"

class Home extends Component{
    componentWillMount() {
        console.log(this.props)
    }
    render(){
        return(
            <div>
               <header className="header-container">
                    <div className="header">
                        <i className="fl icon icon-navicon"></i>
                        <i className="fr icon icon-angle-down"></i>
                        <img  className="fr avatar"  src={avatar} alt="头像" height="40px" />
                        <div className="clear"></div>
                        <ul>
                            <li>
                                <i className="icon-id-card"></i>
                                <span>Profile</span>
                            </li>
                            <li>
                                <i className="icon-sign-in"></i>
                                <span>Sign Out</span>
                            </li>
                        </ul>
                    </div>
               </header>
            </div>
        )
    }
}

export default Home