/*
 * @Author: Wang Chao 
 * @Date: 2019-01-21 20:47:14 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-03-29 15:16:48
 * @Description:  
 */
import React,{Component} from "react"
import window from "../../assets/os icons/windows.png"

class Home extends Component{
    state={
        height:"",
    }
    componentWillMount() {
        console.log(this.props)
    }
    componentDidMount(){
        this.setState({
            height:(document.documentElement.clientHeight - 70)+ "px"
        })
    }
    render(){
        return(
            <div style={{height:this.state.height}} className="content-container">
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
                    <div >
                    <div className="content">
                            <div className="fl">
                                <img src={window} className="window"></img>
                            </div>
                            <div className="fl content-right">
                                <ul>
                                    <li>
                                        <i className="icon-desktop"></i>
                                        <span className="sp1">bjstdmngbgr08.thoughthomeworks.com</span>
                                        <span className="sp2">building</span>
                                    </li>
                                    <li>
                                        <i className="icon-info"></i>
                                        <span className="sp3">192.168.1.243</span>
                                    </li>
                                    <li>
                                        <i className="icon-folder"></i>
                                        <span>/var/lib/cruise-agent</span>
                                    </li>
                                </ul>
                                <ul className="con-bottom">
                                    <li>
                                        <i className="icon-plus"></i>
                                        <span>
                                            Fixfox<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Safari<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Ubuntu<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Chrome<i className="icon-trash"></i>
                                        </span>
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
                        <div className="content">
                            <div className="fl">
                                <img src={window} className="window"></img>
                            </div>
                            <div className="fl content-right">
                                <ul>
                                    <li>
                                        <i className="icon-desktop"></i>
                                        <span className="sp1">bjstdmngbgr08.thoughthomeworks.com</span>
                                        <span className="sp2">building</span>
                                    </li>
                                    <li>
                                        <i className="icon-info"></i>
                                        <span className="sp3">192.168.1.243</span>
                                    </li>
                                    <li>
                                        <i className="icon-folder"></i>
                                        <span>/var/lib/cruise-agent</span>
                                    </li>
                                </ul>
                                <ul className="con-bottom">
                                    <li>
                                        <i className="icon-plus"></i>
                                        <span>
                                            Fixfox<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Safari<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Ubuntu<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Chrome<i className="icon-trash"></i>
                                        </span>
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
                        <div className="content">
                            <div className="fl">
                                <img src={window} className="window"></img>
                            </div>
                            <div className="fl content-right">
                                <ul>
                                    <li>
                                        <i className="icon-desktop"></i>
                                        <span className="sp1">bjstdmngbgr08.thoughthomeworks.com</span>
                                        <span className="sp2">building</span>
                                    </li>
                                    <li>
                                        <i className="icon-info"></i>
                                        <span className="sp3">192.168.1.243</span>
                                    </li>
                                    <li>
                                        <i className="icon-folder"></i>
                                        <span>/var/lib/cruise-agent</span>
                                    </li>
                                </ul>
                                <ul className="con-bottom">
                                    <li>
                                        <i className="icon-plus"></i>
                                        <span>
                                            Fixfox<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Safari<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Ubuntu<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Chrome<i className="icon-trash"></i>
                                        </span>
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
                        <div className="content">
                            <div className="fl">
                                <img src={window} className="window"></img>
                            </div>
                            <div className="fl content-right">
                                <ul>
                                    <li>
                                        <i className="icon-desktop"></i>
                                        <span className="sp1">bjstdmngbgr08.thoughthomeworks.com</span>
                                        <span className="sp2">building</span>
                                    </li>
                                    <li>
                                        <i className="icon-info"></i>
                                        <span className="sp3">192.168.1.243</span>
                                    </li>
                                    <li>
                                        <i className="icon-folder"></i>
                                        <span>/var/lib/cruise-agent</span>
                                    </li>
                                </ul>
                                <ul className="con-bottom">
                                    <li>
                                        <i className="icon-plus"></i>
                                        <span>
                                            Fixfox<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Safari<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Ubuntu<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Chrome<i className="icon-trash"></i>
                                        </span>
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
                        <div className="content">
                            <div className="fl">
                                <img src={window} className="window"></img>
                            </div>
                            <div className="fl content-right">
                                <ul>
                                    <li>
                                        <i className="icon-desktop"></i>
                                        <span className="sp1">bjstdmngbgr08.thoughthomeworks.com</span>
                                        <span className="sp2">building</span>
                                    </li>
                                    <li>
                                        <i className="icon-info"></i>
                                        <span className="sp3">192.168.1.243</span>
                                    </li>
                                    <li>
                                        <i className="icon-folder"></i>
                                        <span>/var/lib/cruise-agent</span>
                                    </li>
                                </ul>
                                <ul className="con-bottom">
                                    <li>
                                        <i className="icon-plus"></i>
                                        <span>
                                            Fixfox<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Safari<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Ubuntu<i className="icon-trash"></i>
                                        </span>
                                        <span>
                                            Chrome<i className="icon-trash"></i>
                                        </span>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Home