/*
 * @Author: Wang Chao 
 * @Date: 2019-01-21 20:47:14 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-03-29 11:12:57
 * @Description:  
 */
import React,{Component} from "react"
import avatar from "../../assets/logo/avatar.jpg"
import logo from '../../assets/logo/logo.svg';
import { connect} from "react-redux";
import { setAugetListAsync, setMenuZIndexSync} from "../../redux/action/index.js";

class Home extends Component{
    state={
        avatarDialog:true,
        icon: "icon-angle-up",
        menuStatus:true,
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
    componentWillMount() {
        console.log(this.props)
        let params = {
            url: "/agents",
            data:{}
        }
        this.props.setAugetListAsync(params)
    }

    render(){
        return(
            <div>
               <header className="header-container">
                    <div className="header">
                        <i className="fl icon icon-navicon" onClick = {() => this.props.setMenuZIndexSync(!this.props.menuZIndex)}></i>
                        <embed src={logo} width="100" height="35" 
                        type="image/svg+xml"
                        pluginspage="http://www.adobe.com/svg/viewer/install/" />
                        <i className={"fr icon "+ this.state.icon } onClick = {() => this.avatarDialogHandler()}></i>
                        <img  className="fr avatar"  src={avatar} alt="头像" height="40px" />
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

Home = connect(state =>({menu:state.agentList, menuZIndex: state.menuZIndex}), {setAugetListAsync, setMenuZIndexSync})(Home)
export default Home
