

import React from "react";


export function Eff (){
    let [a,setA] =React.useState(0);
    let b = 0;
    let toB = React.useRef();
    React.useEffect(()=>{
        toB.current.innerText = Number(toB.current.innerText) + 1;
    },[a])
    return(
        <>
            <h1>{a}</h1>
            <h1 >Have change : <h1 ref={toB}>{b}</h1></h1>

            <button onClick={()=>setA(a+1)}>Add</button>
        </>
    )
}

