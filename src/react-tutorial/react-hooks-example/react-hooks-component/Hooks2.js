import React, { useState, useEffect } from "react";

function c(tag, msg) {
    console.log(`[HOOKS-H2] [${tag}] Message: ${msg}`);
}

export default function Hooks2(props) {
    const [sampleData, setSampleData] = useState("defaultData");

    useEffect(() => {
        c("useEffect", "Executing");

        return () => {
            c("useEffect-unmount", "Exeucting");
        };
    });

    return (
        <div>
            SampleData: {sampleData}
            <br />
            <button onClick={() => setSampleData(new Date().getTime())}>
                Change Sample Data
            </button>
            <button onClick={props.changeComponent}>Goto Hooks2</button>
        </div>
    );
}
