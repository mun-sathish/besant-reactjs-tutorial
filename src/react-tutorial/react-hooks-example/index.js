import React from "react";
import ReackHooksComp from "./react-hooks-component";
import ReactClassComp from "./react-component";
export default function ReactHooksApp() {
    return (
        <div>
            <div>
                <h1>React Hooks Example:</h1>
                <ReackHooksComp />
            </div>

            <div>
                <h1>React Class Component Example:</h1>
                <ReactClassComp />
            </div>
        </div>
    );
}
