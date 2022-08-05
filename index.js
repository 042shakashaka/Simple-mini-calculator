import React from "react";
import ReactDom from "react-dom";
import './index.css';
import MainCalc from "./MainCalc";


function App() {
    return (
        <MainCalc />
    );
}


ReactDom.render(<App />, document.getElementById("root"));