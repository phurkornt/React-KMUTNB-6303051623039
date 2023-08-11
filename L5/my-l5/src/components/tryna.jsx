import React from "react";


class Try1 {
    constructor(name){
        this.name  = name;
    }
    btn(){
        return <button style={{padding:"1rem 3 rem"}}> {this.name} </button>
    }
}

export default class TryNa extends React.Component{
    
    render(){
        let btn = new Try1("Click Me");
        btn = btn.btn();
        return (
            <>
                <h1>Hello World</h1>
                {btn}
            </>
        )
    }
}

