import React from "react";
import {userContext} from "./context";


export default function Content2(){
    let [user,setUser] = React.useContext(userContext);
    const contentStyle = {
        backgroundColor:"#cee",
        textAlign:"center",
        padding:10,
        margin:10
    }
    const onClickSignin = (event)=>{
        event.preventDefault();
        setUser("Hello")
    }

    return (
        <div style={contentStyle}>
            {
                (user)
                ? <span>Hello {user}</span>
                : <span >Please &nbsp;&nbsp;
                    <a href="" onClick={onClickSignin}>
                        Signin
                    </a>
                </span>
            }
        </div>
    )
}