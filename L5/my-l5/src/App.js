import React from "react";
import {Header,Content,Footer} from './func-components'
import Calendar from "./class-components";


import Button from '@mui/material/Button';

export default function App(){
    return(
    <>
        <Header/>
        <p><center><Calendar/></center></p>
        <Content/>
        <Button variant="contained">Hello World</Button>
        <Footer/>
    </>)
}