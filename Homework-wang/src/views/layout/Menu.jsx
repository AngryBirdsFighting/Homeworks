/*
 * @Author: Wang Chao 
 * @Description:  
 */
import React,{Component} from "react"
import { connect} from "react-redux";
import { setMenuShowOrHiddenSync, setViewHeightSync} from "../../redux/action/index.js";
class Menu extends Component{
     componentDidMount(){
        let height =  document.documentElement.clientHeight
        this.props.setViewHeightSync(height)
        // document.documentElement.clientWidth < 1024 ? this.props.setMenuZIndexSync(!this.props.menuStatus) : null
    }
    render(){
        // let zIndex = this.props.menuZIndex ?  document.documentElement.clientWidth < 1024 ? 100 : 1 : -1;
        let { viewHeight, historyList, menuStatus} = this.props;
        let dispalyStr = menuStatus? "block" : "";
        // 菜单高度需要减去footer高度
        viewHeight -= 25;
        viewHeight += "px"
        return(
            <menu style={{height:viewHeight, display:dispalyStr}} className="menu-container">
            <span className="btn-close">
                 <i className="icon-close" onClick = {() => this.props.setMenuShowOrHiddenSync(!this.props.menuStatus)}></i>
            </span>
                <ul className="menu-ul">
                    <li className="active">
                        <i className="icon-dashboard" ></i>
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
                    <ul>
                        {historyList.length > 0 ? historyList.map(i => {
                            return ( <li key={i}>{i}</li>)
                        }) : "空"}
                    </ul>
                </div>
            </menu>
        )
    }
}
Menu = connect(state =>({
    viewHeight:state.viewHeight,
    menuStatus: state.menuStatus, 
    historyList: state.historyList
}), {
    setMenuShowOrHiddenSync, 
    setViewHeightSync
})(Menu)
export default Menu