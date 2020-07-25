import React, { useEffect, useState } from "react";
import Hooks1 from "./Hooks1";
import Hooks2 from "./Hooks2";

function c(tag, msg) {
    console.log(`[HOOKS] [${tag}] Message: ${msg}`);
}

export default function ReactHooksComp() {
    const [showHooks1, setShowHooks1] = useState(true);

    // It will be executed on start of component
    // It will be executed, on any change of state/props
    useEffect(() => {
        c("useEffect", "Executing");
    });

    return (
        <div>
            {showHooks1 ? (
                <div>
                    <h1>Hooks1</h1>
                    <Hooks1 changeComponent={() => setShowHooks1(false)} />
                </div>
            ) : (
                <div>
                    <h1>Hooks2</h1>
                    <Hooks2 changeComponent={() => setShowHooks1(true)} />
                </div>
            )}
        </div>
    );
}

// function generateArr(data) {
//     let x = data;
//     function changeX(newData) {
//         x = newData;
//         console.log("X value = " + x);
//     }
//     console.log("X value = " + x);
//     return [x, changeX];
// }
