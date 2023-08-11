import React from "react";


export default class Calendar extends React.Component{
    state = {n:Math.floor(Math.random() * 100)}
    getDate(){
        const dayNames = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์','เสาร์']
        const monthNames = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
        const date = new Date()
        const weekDay = dayNames[date.getDay()]
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear() + 543
        return `${weekDay} ${day} ${month} ${year}`
    }
    render() {
        return (
            <div>
                {this.getDate()}
            </div>
            
        )
    }   
}