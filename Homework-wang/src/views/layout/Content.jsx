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
                            </div>
                        </li>
                        <li>
                            <div>
                                <i className="icon icon-coffee"></i>
                            </div>
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home