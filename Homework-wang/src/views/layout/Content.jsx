/*
 * @Author: Wang Chao 
 * @Date: 2019-01-21 20:47:14 
 * @Last Modified by: Wang Chao
 * @Last Modified time: 2019-04-01 17:32:39
 * @Description:  
 */
import React, { Component } from "react"
import window from "../../assets/os icons/windows.png"
import { connect } from "react-redux";
import { setAgentListAsync, setHistoryListAsync, setMenuZIndexSync, setAddDialogStatusSync } from "../../redux/action/index.js";

class Home extends Component {
    state = {
        inpValu: "",
        id: "",
        listQurey: {
            name_like: "",
            type: ""
        },
        typeActive: "active"
    }
    componentWillMount() {
        this.getList()
    }
    // 获取列表数据
    getList() {
        let params = {
            method: "get",
            url: `/agents`,
            data: this.state.listQurey
        }
        this.props.setAgentListAsync(params)
    }
    // 添加列表数据请求条件
    getListByType(type) {
        let listQurey = Object.assign({}, this.state.listQurey, { type: type })
        this.setState({
            listQurey: listQurey
        }, () => {
            this.getList()
        })
    }
    // 添加列表数据请求条件
    getListByName(e) {
        let listQurey = Object.assign({}, this.state.listQurey, { name_like: e.target.value })
        this.setState({
            listQurey: listQurey
        })
        if (event.keyCode == "13") {
            this.getList()
        }
    }
    // 删除资源
    deleteHanlder(id, str) {
        this.setState({
            id: id
        }, () => {
            let data = this.props.menu.find(item => {
                return item.id == id
            })
            let index = data.resources.findIndex(item => item == str)
            data.resources.splice(index, 1)
            let params = {
                method: "put",
                url: "/agents/" + this.state.id,
                data: data,
            }
            this.props.setHistoryListAsync(params)
            this.setState({
                id: ""
            })
        })

    }
    addHanlder() {
        if (!this.state.inpValu) {
            alert("请输入内容")
            return
        }
        let data = this.props.menu.find(item => {
            return item.id == this.state.id
        })
        this.state.inpValu.split(",").map(item => {
            if (item) {
                data.resources.push(item)
            }
        })
        let params = {
            method: "put",
            url: "/agents/" + this.state.id,
            data: data,
        }
        this.props.setHistoryListAsync(params)
        this.setState({
            inpValu: ""
        })
        this.props.setAddDialogStatusSync(!this.props.dialogStatus)
        document.documentElement.style.overflow = '';
    }
    handelChangeAddInput(e) {
        this.setState({
            inpValu: e.target.value
        })
    }
    handelAddDialog(id) {
        document.documentElement.style.overflow = 'hidden';
        this.setState({
            id: id
        })
        this.props.setAddDialogStatusSync(!this.props.dialogStatus)
    }
    closeDialog() {
        this.props.setAddDialogStatusSync(!this.props.dialogStatus)
        document.documentElement.style.overflow = '';
    }
    render() {
        let agents = this.props.menu;
        let { type } = this.state.listQurey;

        let statisticsNum = agents.reduce((pre,cur)=>{
            if(cur.status in pre){
                pre[cur.status]++
            }else{
                pre[cur.status] = 1 
            }
            return pre
            },{})
        let typeNum = agents.reduce((pre,cur)=>{
            if(cur.type in pre){
                pre[cur.type]++
            }else{
                pre[cur.type] = 1 
            }
            return pre
            },{})
        console.log(statisticsNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
        return (
            <div className="content-container">
                <div>
                    <ul className="statistics">
                        <li>
                            <div>
                                <i className="icon icon-cog"></i>
                                <span className="statistics-type">Building</span>
                                <span className="statistics-count">{statisticsNum.building}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i className="icon icon-coffee"></i>
                                <span className="statistics-type">Idle</span>
                                <span className="statistics-count">{statisticsNum.idle}</span>
                            </div>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <span>ALL</span>
                                    <span>{typeNum.physical + typeNum.virtual}</span>
                                </li>
                                <li>
                                    <span>PHYSICAL</span>
                                    <span>{typeNum.physical}</span>
                                </li>
                                <li>
                                    <span>VIRTUAL</span>
                                    <span>{typeNum.virtual}</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="search">
                        <ul className="fl">
                            <li className={type == "" ? this.state.typeActive : ""} onClick={() => this.getListByType("")}>All</li>
                            <li className={type == "physical" ? this.state.typeActive : ""} onClick={() => this.getListByType("physical")} >Physical</li>
                            <li className={type == "virtual" ? this.state.typeActive : ""} onClick={() => this.getListByType("virtual")} >Virtual</li>
                        </ul>
                        <div className="fl search-box">
                            <input
                                placeholder="please input name.  Enter"
                                defaultValue={this.state.listQurey.q}
                                type="text"
                                onKeyDown={this.getListByName.bind(this)}
                            ></input>
                        </div>
                        <div className="fr search-icon">
                            <i className="icon-th-card"></i>
                            <i className="icon-th-list"></i>
                        </div>
                        <span className="clear"></span>
                    </div>
                    <div>
                        {agents.map((item, index) => {
                            return (
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
                                                <i onClick={() => this.handelAddDialog(item.id)} className="icon-plus"></i>
                                                {item.resources.map((i, index) => {
                                                    return (
                                                        <span onClick={() => this.deleteHanlder(item.id, i)} key={index}>{i}<i className="icon-trash"></i></span>
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
                            )
                        })}
                    </div>
                </div>
                {!this.props.dialogStatus ? <div className="add-dialog">
                    <ul>
                        <i onClick={() => this.closeDialog()} className="fr icon-close"></i>
                        <div className="clear"></div>
                        <li>
                            <p>Separate multiple resourec name with commas</p>
                        </li>
                        <li>
                            <input placeholder="  input Value" onChange={this.handelChangeAddInput.bind(this)} defaultValue={this.state.inpValu} type="text" name="" id="" />
                        </li>
                        <li>
                            <span onClick={() => this.addHanlder()} className="add-btn">Add Resources</span>
                            <span onClick={() => this.closeDialog()} className="cancel-btn">Cancel</span>
                        </li>
                    </ul>
                </div> : null}
            </div>
        )
    }
}
Home = connect(state => ({ menu: state.agentList, menuZIndex: state.menuZIndex, dialogStatus: state.dialogStatus }), { setAgentListAsync, setHistoryListAsync, setMenuZIndexSync, setAddDialogStatusSync })(Home)
export default Home