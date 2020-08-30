import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import ClientApp from "./login-app/client";
// import TSApp from "./react-tutorial/typescript-app";
// import BankApp from "./bank-app-final-project";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import TypescriptApp from "./react-tutorial/typescript-app";

ReactDOM.render(<TypescriptApp />, document.getElementById("root"));

// setTimeout(() => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'));
// }, 2000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
