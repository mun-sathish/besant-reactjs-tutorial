import React from "react";
import useCustomHook from "./customHook";
import Hooks1 from "./Hooks1";
import Hooks2 from "./Hooks2";

// function c(tag, msg) {
//     console.log(`[HOOKS] [${tag}] Message: ${msg}`);
// }

export default function ReactHooksComp() {
    const [showHooks1, setShowHooks1] = useCustomHook(true);

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
