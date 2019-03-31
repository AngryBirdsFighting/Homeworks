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
import { setAgentListAsync,setHistoryListAsync, setMenuZIndexSync, setAddDialogStatusSync} from "../../redux/action/index.js";

class Home extends Component{
    state = {
        inpValu:"",
        id:""
    }
    componentWillMount() {
    }
    componentWillMount() {
       this.getList()
    }
    getList(){
        let params = {
            method:"get",
            url: "/agents",
            data:{}
        }
        this.props.setAgentListAsync(params)
    }
    deleteHanlder(id, str){
        let data = this.props.menu.find(item => {
            return item.id == id
        })
        let index= data.resources.findIndex( item => item == str)
        data.resources.splice(index,1)
        let params = {
            method:"put",
            url: "/agents/"+ id,
            data:data,
        }
        this.props.setHistoryListAsync(params)
        // setTimeout( () => {
        //     this.getList()
        // },2000)
      
    }
    addHanlder(){
        if(!this.state.inpValu){
            alert("请输入内容")
            return
        }
        let data = this.props.menu.find(item => {
            return item.id == this.state.id
        })
        this.state.inpValu.split(",").forEach( item => {
            if(item){
                data.resources.push(item)
            }
        })
        let params = {
            method:"put",
            url: "/agents/"+ this.state.id,
            data:data,
        }
        this.props.setHistoryListAsync(params)
        this.setState({
            inpValu:""
        })
        this.props.setAddDialogStatusSync(!this.props.dialogStatus)
        document.documentElement.style.overflow=''; 
        // setTimeout( () => {
        //     this.getList()
        // },2000)
    }
    handelChange(e){
        this.setState({
            inpValu:e.target.value
        })
    }
    handelAddDialog(id){
        document.documentElement.style.overflow='hidden';  
        this.setState({
            id:id
        })
        this.props.setAddDialogStatusSync(!this.props.dialogStatus)
    }
    closeDialog(){
        this.props.setAddDialogStatusSync(!this.props.dialogStatus)
        document.documentElement.style.overflow=''; 
    }
    render(){
        let agents = this.props.menu
        
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
                                         <i onClick = {() => this.handelAddDialog(item.id)} className="icon-plus"></i>
                                         { item.resources.map( (i, index) => {
                                             return (
                                             <span onClick = {() => this.deleteHanlder(item.id, i)} key={index}>{i}<i className="icon-trash"></i></span>
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
                {!this.props.dialogStatus ?  <div className="add-dialog">
                    <ul>
                        <i onClick = {() => this.closeDialog()} className="fr icon-close"></i>
                        <div className="clear"></div>
                        <li>
                            <p>Separate multiple resourec name with commas</p>
                        </li>
                        <li>
                            <input placeholder="  input Value" onChange={this.handelChange.bind(this)} defaultValue={this.state.inpValu} type="text" name="" id=""/>
                        </li>
                        <li>
                            <span onClick = {() => this.addHanlder()}className="add-btn">Add Resources</span>
                            <span  onClick = {() => this.closeDialog() } className="cancel-btn">Cancel</span>
                        </li>
                    </ul>
                </div> : null}
            </div>
        )
    }
}
Home = connect(state =>({menu:state.agentList, menuZIndex: state.menuZIndex, dialogStatus: state.dialogStatus}), {setAgentListAsync,setHistoryListAsync, setMenuZIndexSync, setAddDialogStatusSync})(Home)
export default Home