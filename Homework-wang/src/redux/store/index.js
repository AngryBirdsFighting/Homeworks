import { createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import reducer from "../reducer/index.js"

//添加调试工具
// const reduxDevtools = window.
const store = createStore(reducer, applyMiddleware(thunk))
export default store
