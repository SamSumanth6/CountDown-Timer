import React,{useState, useEffect} from 'react'
import './inputForm.css'

const InputForm = ()=> {
    const [defaultValue, setDefaultValue] = useState("")
    const [toggleBtn, setToggleBtn] = useState(false);

    const handleBtn =()=>{
      setToggleBtn(!toggleBtn);
    }

    const handleDateChange = (e)=>{
      setDefaultValue(e.target.value)
    }

    useEffect(() => {
      const updateDateTime = () => {
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        setDefaultValue(formattedDate);
      };
      updateDateTime();

      const interval = setInterval(updateDateTime, 1000);
      return () => clearInterval(interval);
      }, []);
  return (
    <div className='container'>
        <input
            type="datetime-local"
            id="time"
            className='input-form'
            name="meeting-time"
            value={defaultValue}
            min={defaultValue}
            max="2024-06-14T00:00" 
            onChange={handleDateChange}
        />
        {toggleBtn? <button className='btn' onClick={handleBtn}>Cancel Timer</button>
        :
          <button className='btn-cancel' onClick={handleBtn}>Start Timer</button>
          }
        
        
    </div>
  )
}

export default InputForm;
