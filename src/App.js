import './App.css';
import InputForm from './components/inputForm';
import Card from './components/card';

function App() {
  return (
    <div className='App'>
      <h1 className='heading'>CountDown <span className='heading-timer'>Timer</span></h1>
      <InputForm />
      <Card />
    </div>
  );
}

export default App;
