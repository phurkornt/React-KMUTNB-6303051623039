
import react from 'react';

import logo from './logo.svg';
import './App.css';

import Menu from './component/Menu';
import Quiz from './component/Quiz';
import Score from './component/Score';

export const DataContext = react.createContext()

function App() {
  const [appState,setAppState] = react.useState("menu");
  const [score,setScore] = react.useState(0);
  return (
    <DataContext.Provider value={{appState,setAppState,score,setScore}}>
      <div className='App'>
        <h1>Web Development Quiz</h1>
        {appState === 'menu' && <Menu/>}
        {appState === 'quiz' && <Quiz/>}
        {appState === 'score' && <Score/>}
      </div>
    </DataContext.Provider>
  );
}

export default App;
