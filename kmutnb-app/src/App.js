import React from "react";
import {Header,Content,Footer} from './func-components'
import Calendar from "./class-components";
import Banner from "./Banner";


export default function App(){
    return(
    <>
        <Header/>
        <Banner/>
        <p><center><Calendar/></center></p>
        <Content/>
        <Footer/>
    </>)
}