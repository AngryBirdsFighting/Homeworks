/*
 * @Author: Wang Chao
 * @Description:
 */
import React,{Component} from "react"
import avatar from "../../assets/logo/avatar.jpg"
import logo from "../../assets/logo/logo.svg";
import { connect} from "react-redux";
import { setMenuShowOrHiddenSync} from "../../redux/action/index.js";

class Header extends Component{
    state={
        avatarDialog:true,
        icon: "icon-angle-up",
        menuStatus:true
    }
    avatarDialogHandler(){
        this.setState({
            avatarDialog: !this.state.avatarDialog
        })
        if(this.state.avatarDialog){
            this.setState({
                icon: "icon-angle-down"
            })
        }else{
            this.setState({
                icon: "icon-angle-up"
            })
        }
    }
    menuHandler(){
        this.setState({
            menuStatus: !this.state.menuStatus
        })
    }
    render(){
        return(
            <div>
               <header className="header-container">
                    <div className="header">
                        <i className="fl icon icon-navicon"
                            onClick={() => this.props.setMenuShowOrHiddenSync(!this.props.menuZIndex)}
                        ></i>
                        <embed height="35"
                            pluginspage="http://www.adobe.com/svg/viewer/install/"
                            src={logo}
                            type="image/svg+xml"
                            width="100"
                        />
                        {/* <div className="aaaa"> */}
                        <i className={"fr icon "+ this.state.icon}
                            onClick={() => this.avatarDialogHandler()}
                        ></i>
                        <img  alt="头像"
                            className="fr avatar"
                            height="40px"
                            src={avatar}
                        />
                        {/* </div> */}

                        <div className="clear"></div>
                        {!this.state.avatarDialog ?
                             <ul>
                            <li>
                                <i className="icon-id-card"></i>
                                <span>Profile</span>
                            </li>
                            <li>
                                <i className="icon-sign-in"></i>
                                <span>Sign Out</span>
                            </li>
                        </ul>: null}

                    </div>
               </header>
            </div>
        )
    }
}

Header = connect(state =>({
    menuStatus: state.menuStatus
}), {
    setMenuShowOrHiddenSync
})(Header)
export default Header
