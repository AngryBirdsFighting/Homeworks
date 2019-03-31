/*
 * @Author: Wang Chao 
 * @Date: 2019-01-21 20:47:14 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-03-29 10:21:53
 * @Description:  
 */
import React,{Component} from "react"
import { connect} from "react-redux";
import { setAugetListAsync, setMenuZIndexSync} from "../../redux/action/index.js";
class Home extends Component{
    state={
        height:"",
    }
    componentWillMount() {
        console.log(this.props)
     }
     componentDidMount(){
         this.setState({
             height:document.documentElement.clientHeight + "px"
         })
         document.documentElement.clientWidth < 1024 ? this.props.setMenuZIndexSync(!this.props.menuZIndex) : null
    }
    render(){
        console.log(this.props.menuZIndex )
        let zIndex = this.props.menuZIndex ?  document.documentElement.clientWidth < 1024 ? 100 : 1 : -1
        return(
            <menu style={{height:this.state.height, zIndex: zIndex}} className="menu-container">
            <span className="btn-close">
                 <i className="icon-close" onClick = {() => this.props.setMenuZIndexSync(!this.props.menuZIndex)}></i>
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
                        <li>kashdgfkjsagfksjgfskfgksfgkfgjsdgfashgfhkesgrksegjkghektghkjet</li>
                        <li>kashdgfkjsagfksjgfskfgksfgkfgjsdgfashgfhkesgrksegjkghektghkjet</li>
                        <li>kashdgfkjsagfksjgfskfgksfgkfgjsdgfashgfhkesgrksegjkghektghkjet</li>
                        <li>kashdgfkjsagfksjgfskfgksfgkfgjsdgfashgfhkesgrksegjkghektghkjet</li>
                        <li>kashdgfkjsagfksjgfskfgksfgkfgjsdgfashgfhkesgrksegjkghektghkjet</li>
                        <li>kashdgfkjsagfksjgfskfgksfgkfgjsdgfashgfhkesgrksegjkghektghkjet</li>
                        <li>kashdgfkjsagfksjgfskfgksfgkfgjsdgfashgfhkesgrksegjkghektghkjet</li>
                        <li>kashdgfkjsagfksjgfskfgksfgkfgjsdgfashgfhkesgrksegjkghektghkjet</li>
                        <li>kashdgfkjsagfksjgfskfgksfgkfgjsdgfashgfhkesgrksegjkghektghkjet</li>
                        <li>kashdgfkjsagfksjgfskfgksfgkfgjsdgfashgfhkesgrksegjkghektghkjet</li>
                        <li>kashdgfkjsagfksjgfskfgksfgkfgjsdgfashgfhkesgrksegjkghektghkjet</li>
                        <li>kashdgfkjsagfksjgfskfgksfgkfgjsdgfashgfhkesgrksegjkghektghkjet</li>
                        <li>kashdgfkjsagfksjgfskfgksfgkfgjsdgfashgfhkesgrksegjkghektghkjet</li>
                        <li>kashdgfkjsagfksjgfskfgksfgkfgjsdgfashgfhkesgrksegjkghektghkjet</li>
                    </ul>
                </div>
               
            </menu>
        )
    }
}
Home = connect(state =>({menu:state.agentList, menuZIndex: state.menuZIndex}), {setAugetListAsync, setMenuZIndexSync})(Home)
export default Home