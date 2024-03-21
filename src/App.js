import './App.css';
import InputForm from './components/inputForm';
import Card from './components/card';
import { useState} from 'react';
import TimerSound from './assets/timer.mp3';

function App() {
  const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const playTimerSound = () => {
    const audio = new Audio(TimerSound);
    audio.play();
  };

  return (
    <div className='App'>
      <h1 className='heading'>CountDown <span className='heading-timer'>Timer</span></h1>
      <InputForm
        setRemainingTime={setRemainingTime}
        playTimerSound={playTimerSound}
      />
      <Card remainingTime={remainingTime} />
    </div>
  );
}

export default App;
