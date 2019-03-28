/*
 * @Author: Wang Chao 
 * @Date: 2019-01-21 20:47:14 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-24 20:10:37
 * @Description:  
 */
import React,{Component} from "react"
import Header from "./Header.jsx"
import Menu from "./Menu.jsx"
import Content from "./Content.jsx"

class Main extends Component{
    componentWillMount() {
        console.log(this.props)
     }
    render(){
        return(
            <div className="main">
                <Header/>
                <Menu/>
                <Content/>
            </div>
        )
    }
}

export default Main