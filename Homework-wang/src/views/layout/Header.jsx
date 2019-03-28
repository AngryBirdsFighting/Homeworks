/*
 * @Author: Wang Chao 
 * @Date: 2019-01-21 20:47:14 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-01-24 20:10:37
 * @Description:  
 */
import React,{Component} from "react"
const newad = require('../../assets/font icons/fonts/cruise.svg')

class Home extends Component{
    componentWillMount() {
        console.log(this.props)
     }
    render(){
        return(
            <div>
               <header className="header">
               <i className="icon icon-navicon"></i>
               <i className="aaa"></i>
               <svg style={{fill: "#fff"}} dangerouslySetInnerHTML={{__html: newad }} />
               </header>
            </div>
        )
    }
}

export default Home