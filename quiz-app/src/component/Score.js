import react from 'react';
import { DataContext } from '../App';
import QuestionsData from '../data/QuestionsData'

export default function Score(){
    const {score,setScore}= react.useContext(DataContext)
    const {appState,setAppState}= react.useContext(DataContext)
    const restartApp = () => {
        setScore(0)
        setAppState("menu")
    }
    return (
        <div className='score'>
            <h1>สรุปผลคะเเนน</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>ทำเเบบทดสอบอีกครั้ง</button>
        </div>
    )
}