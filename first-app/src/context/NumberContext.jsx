import { createContext, useContext, useState } from "react";

let numContext = createContext()

//Wrapper
export function NumContextWarrper(props) {
    let [num, setNum] = useState(1000)
    return (
        <numContext.Provider value={{ num: num, setNum: setNum }}>
            {props.children}
        </numContext.Provider>
    )
}

//consuming---- custom hook

export function useNum() {
    return useContext(numContext)
}