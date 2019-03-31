/*
 * @Author: Wang Chao 
 * @Date: 2019-01-21 20:47:14 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-03-29 10:38:36
 * @Description:  
 */
import React,{Component} from "react"
import Header from "./Header.jsx"
import Menu from "./Menu.jsx"
import Content from "./Content.jsx"
import { connect} from "react-redux";
class Main extends Component{
    componentWillMount() {
        console.log(this.props)
     }
    render(){
        return(
            <div className="main">
            {!this.props.dialogStatus ?  <div className="layer"></div> : null}
            
                <div className="main-wrapper">
                    <Header/>
                    <div className="container">
                        <Menu/>
                        <Content/>
                    </div>
                    <footer className="footer">
                    @Copyright 2017 ThougtWorks
                    </footer>
                </div>
            </div>
        )
    }
}
Main = connect(state =>({ dialogStatus: state.dialogStatus}), {})(Main)

export default Main