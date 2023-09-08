

import React from "react";
import {context_na} from "./context"
export function Con (){
    let [a,setA] =React.useState(0);
    let b = 0;
    let toB = React.useRef();
    let data = React.useContext(context_na)
    return(
        <>
            <h1>Data from context : {data}</h1>
            {/* <button onClick={()=>setA(a+1)}>Add</button> */}
        </>
    )
}

