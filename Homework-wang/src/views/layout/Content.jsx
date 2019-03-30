/*
 * @Author: Wang Chao 
 * @Date: 2019-01-21 20:47:14 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-03-29 15:16:48
 * @Description:  
 */
import React,{Component} from "react"

class Home extends Component{
    componentWillMount() {
        console.log(this.props)
     }
    render(){
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
                </div>
            </div>
        )
    }
}

export default Home