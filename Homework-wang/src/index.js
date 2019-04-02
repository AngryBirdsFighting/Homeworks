import React from "react";
import ReactDOM from "react-dom";
import Main from "./views/layout/"
import "./assets/css/index.scss"
import { Provider } from "react-redux";
import Store from "./redux/store/";
require("es6-promise").polyfill();
import "fetch-detector";
import "fetch-ie8";

ReactDOM.render(
<Provider store={Store}><Main/></Provider>
, document.getElementById("root"));