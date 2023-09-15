import react, { useEffect } from 'react';
import QuestionsData from '../data/QuestionsData'
import { DataContext } from '../App';

export default function Quiz(){
    const [current,setCurrent] = react.useState(0)
    const [selectChoice,setSelectChoice] = react.useState("")
    
    const {score,setScore}= react.useContext(DataContext)
    const {appState,setAppState}= react.useContext(DataContext)
    
    useEffect(()=>{
        checkAnswer();
        console.log(`The count is ${selectChoice}`);
    },[selectChoice])

    function checkAnswer(){
        if(selectChoice !== ""){
            if(selectChoice === QuestionsData[current].answer){
                setScore(score+1)
                nextQuestion()
            }else{
                console.log("WRONG!!");
                nextQuestion()
            }
        }
    }
    function nextQuestion(){
        setSelectChoice("")
        if(current === QuestionsData.length-1){
            setAppState("score")
        }else{
            setCurrent(current+1)
        }
    }

    return (
        <div className='quiz'>
            <h1>{QuestionsData[current].question}</h1>
            <div className='choices'>
                <button onClick={()=>setSelectChoice('A')}>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectChoice('B')}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectChoice('C')}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectChoice('D')}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current + 1} / ${QuestionsData.length} `}</p>
        </div>
    )
}