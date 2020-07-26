import { useEffect, useState } from "react";

const useCustomHook = (initialState) => {
    const [myOwnData, setMyOwnData] = useState(initialState);

    useEffect(() => {
        console.log("My Custom Hook is Executing useEffect: " + myOwnData);
        return () => {
            console.log(
                "My Custom Hook is CLEANING_UP useEffect: " + myOwnData
            );
        };
    }, [myOwnData]);

    return [myOwnData, setMyOwnData];
};

export default useCustomHook;
