/*
 * @Author: Wang Chao 
 * @Date: 2019-01-21 20:47:14 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-03-29 15:16:48
 * @Description:  
 */
import React,{Component} from "react"
import window from "../../assets/os icons/windows.png"
import { connect} from "react-redux";
import { setAugetListAsync, setMenuZIndexSync, setAddDialogStatusSync} from "../../redux/action/index.js";

class Home extends Component{
    componentWillMount() {
        debugger
        console.log(this.props)
    }
    componentWillMount() {
        let params = {
            url: "/agents",
            data:{}
        }
        this.props.setAugetListAsync(params)
    }
    render(){
        let agents = this.props.menu
        debugger
        return(
            <div className="content-container">
                <div>
                    <ul className="statistics">
                        <li>
                            <div>
                                <i className="icon icon-cog"></i>
                                <span className="statistics-type">dddd</span>
                                <span className="statistics-count">3</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i className="icon icon-coffee"></i>
                                <span className="statistics-type">dddd</span>
                                <span className="statistics-count">5</span>
                            </div>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <span>ALL</span>
                                    <span>8</span>
                                </li>
                                <li>
                                    <span>ALL</span>
                                    <span>8</span>
                                </li>
                                <li>
                                    <span>ALL</span>
                                    <span>8</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="search">
                        <ul className="fl">
                            <li className="active">All</li>
                            <li>Physical</li>
                            <li>Virtual</li>
                        </ul>
                        <div className="fl search-box">
                            <input type="text"></input>
                        </div>
                        <div className="fr search-icon">
                            <i className="icon-th-card"></i>
                            <i className="icon-th-list"></i>
                        </div>
                        <span className="clear"></span>
                    </div>
                    <div>
                        { agents.map( (item,index) => {
                           return(
                           <div key={index} className="content">
                             <div className="fl content-left">
                                 <img src={window} className="window"></img>
                             </div>
                             <div className="fl content-right">
                                 <ul>
                                     <li>
                                         <i className="icon-desktop"></i>
                                         <span className="sp1">{item.name}</span>
                                         <span className="sp2">{item.status}</span>
                                     </li>
                                     <li>
                                         <i className="icon-info"></i>
                                         <span className="sp3">{item.ip}</span>
                                     </li>
                                     <li>
                                         <i className="icon-folder"></i>
                                         <span>{item.location}</span>
                                     </li>
                                 </ul>
                                 <ul className="con-bottom">
                                     <li>
                                         <i className="icon-plus"></i>
                                         { item.resources.map( (i, index) => {
                                             return (
                                             <span>{i}<i className="icon-trash"></i></span>
                                             )
                                        })}
                                     </li>
                                     <li className="fr">
                                         <span>
                                             <i className="icon-deny"></i>Deny
                                         </span>
                                     </li>
                                 </ul>
                             </div>
                             <span className="clear"></span>
                         </div>
                       ) })}
                    </div>
                </div>
                <div className="add-dialog">
                    <ul>
                        <i className="fr icon-close"></i>
                        <div className="clear"></div>
                        <li>
                            <p>Separate multiple resourec name with commas</p>
                        </li>
                        <li>
                            <input placeholder="  input Value" type="text" name="" id=""/>
                        </li>
                        <li>
                            <span className="add-btn">Add Resources</span>
                            <span className="cancel-btn">Cancel</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
Home = connect(state =>({menu:state.agentList, menuZIndex: state.menuZIndex, dialogStatus: state.menuZIndex}), {setAugetListAsync, setMenuZIndexSync, setAddDialogStatusSync})(Home)
export default Home