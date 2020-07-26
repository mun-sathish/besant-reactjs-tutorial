import React, { useState, useEffect, useRef } from "react";

function c(tag, msg) {
    console.log(`[HOOKS-H1] [${tag}] Message: ${msg}`);
}

export default function Hooks1(props) {
    const [sampleData, setSampleData] = useState("defaultData");
    const [sampleData2, setSampleData2] = useState("defaultData2");
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
        c("useEffect", "S1: " + sampleData);

        // return () => {
        //     c("useEffect-unmount", "S1: " + sampleData);
        // };
    }, [sampleData]);

    useEffect(() => {
        c("useEffect", "S2: " + sampleData2);

        return () => {
            c("useEffect-unmount", "S2: " + sampleData2);
        };
    }, [sampleData2]);

    // useEffect(() => {
    //     c("useEffect", "S1-S2: " + sampleData + " - " + sampleData2);

    //     return () => {
    //         c(
    //             "useEffect-unmount",
    //             "S1-S2: " + sampleData + " - " + sampleData2
    //         );
    //     };
    // });

    return (
        <div>
            SampleData: {sampleData} - {sampleData2}
            <input ref={inputRef} />
            <br />
            <button onClick={() => setSampleData(new Date().getTime())}>
                Change Sample Data
            </button>
            <button onClick={() => setSampleData2(new Date().getTime())}>
                Change Sample Data2
            </button>
            <button onClick={props.changeComponent}>Goto Hooks2</button>
        </div>
    );
}
