/*
 * @Author: Wang Chao
 * @Description:
 */
import React, { Component } from "react"
import window from "../../assets/os icons/windows.png"
import { connect } from "react-redux";
import { setAgentListAsync, setHistoryListAsync, setAddDialogStatusSync } from "../../redux/action/index.js";
import Statistical from "../../components/Statistical.jsx"

class Content extends Component {
    state = {
        inpValu: "", // 新增资源名称
        id: "", // 新增删除资源ID
        listQurey: { // 列表查询条件
            name_like: "",
            type: ""
        },
        typeActive: "active" // 选中类名
    }
    // eslint-disable-next-line react/no-deprecated
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
    // 列表数据type搜索
    getListByType(type) {
        let listQurey = Object.assign({}, this.state.listQurey, { type: type })
        this.setState({
            listQurey: listQurey
        }, () => {
            this.getList()
        })
    }
    // 列表数据name模糊搜索
    getListByName(e) {
        let listQurey = Object.assign({}, this.state.listQurey, { name_like: e.target.value })
        this.setState({
            listQurey: listQurey
        })
        if (event.keyCode == "13") {
            this.getList()
        }
    }
    
    mo(e){
        e.preventDefault()
    };
    // 删除资源
    deleteHanlder(id, str) {
        this.setState({
            id: id
        }, () => {
            let data = this.props.agentsData.agentsList.find(item => {
                return item.id == id
            })
            let index = data.resources.findIndex(item => item == str)
            data.resources.splice(index, 1)
            let params = {
                method: "put",
                url: "/agents/" + this.state.id,
                data: data
            }
            this.props.setHistoryListAsync(params)
            this.setState({
                id: ""
            })
        })
    }
    // 新增资源
    addHanlder() {
        if (!this.state.inpValu) {
            // alert("请输入内容")
            return
        }
        let data = this.props.agentsData.agentsList.find(item => {
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
            data: data
        }
        this.props.setHistoryListAsync(params)
        this.setState({
            inpValu: ""
        })
        this.props.setAddDialogStatusSync(!this.props.dialogStatus)
        document.documentElement.style.overflow = "";
    }
    // 绑定新增value
    handelChangeAddInput(e) {
        this.setState({
            inpValu: e.target.value
        })
    }
    // 打开新增窗口
    openAddDialog(id) {
        document.addEventListener("touchmove",this.mo,false);//禁止页面滑动
        document.onmousewheel=function() {return false}
        this.setState({
            id: id
        })
        this.props.setAddDialogStatusSync(!this.props.dialogStatus)
    }
    // 关闭新增窗口
    closeAddDialog() {
        document.onmousewheel=function() {return true}
        this.props.setAddDialogStatusSync(!this.props.dialogStatus)

    }
    render() {
        let { viewHeight } = this.props;
        // 内容最小高度需要减去footer + header的高度
        viewHeight -= (25 + 70);
        viewHeight += "px"
        let {agentsList, statisticalData} = this.props.agentsData;
        let { type } = this.state.listQurey;
        return (
            <div className="content-container"
                style={{minHeight:viewHeight}}
            >
                <div>
                    <Statistical statisticalData={statisticalData}></Statistical>
                    <div className="search">
                        <ul className="fl">
                            <li className={type == "" ? this.state.typeActive : ""}
                                onClick={() => this.getListByType("")}
                            >All</li>
                            <li className={type == "physical" ? this.state.typeActive : ""}
                                onClick={() => this.getListByType("physical")}
                            >Physical</li>
                            <li className={type == "virtual" ? this.state.typeActive : ""}
                                onClick={() => this.getListByType("virtual")}
                            >Virtual</li>
                        </ul>
                        <div className="fl search-box">
                            <input
                                defaultValue={this.state.listQurey.q}
                                onKeyDown={this.getListByName.bind(this)}
                                placeholder="please input name.  Enter"
                                type="text"
                            ></input>
                        </div>
                        <div className="fr search-icon">
                            <i className="icon-th-card"></i>
                            <i className="icon-th-list"></i>
                        </div>
                        <span className="clear"></span>
                    </div>
                    <div>
                        {agentsList.length > 0 ? agentsList.map((item, index) => {
                            return (
                                <div  className="content"
                                    key={index}
                                >
                                    <div className="fl content-left">
                                        <img className="window"
                                            src={window}
                                        ></img>
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
                                                <i className="icon-plus"
                                                    onClick={() => this.openAddDialog(item.id)}
                                                ></i>
                                                {item.resources.map((i, index) => {
                                                    return (
                                                        <span key={index}
                                                            onClick={() => this.deleteHanlder(item.id, i)}
                                                        >{i}<i className="icon-trash"></i></span>
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
                        }) : <h1>暂无数据</h1>}
                    </div>
                </div>
                {!this.props.dialogStatus ?
                <div className="add-dialog">
                    <ul>
                        <i  className="fr icon-close"
                            onClick={() => this.closeAddDialog()}
                        ></i>
                        <div className="clear"></div>
                        <li>
                            <p>Separate multiple resourec name with commas</p>
                        </li>
                        <li>
                            <input defaultValue={this.state.inpValu}
                                id=""
                                name=""
                                onChange={this.handelChangeAddInput.bind(this)}
                                placeholder=" input Value"
                                type="text"
                            />
                        </li>
                        <li>
                            <span className="add-btn"
                                onClick={() => this.addHanlder()}
                            >Add Resources</span>
                            <span  className="cancel-btn"
                                onClick={() => this.closeAddDialog()}
                            >Cancel</span>
                        </li>
                    </ul>
                </div> : null}
            </div>
        )
    }
}
Content = connect(state => ({
    agentsData: state.agentsData,
    viewHeight:state.viewHeight,
    dialogStatus: state.dialogStatus
}),{
    setAgentListAsync,
    setHistoryListAsync,
    setAddDialogStatusSync
})(Content)
export default Content;