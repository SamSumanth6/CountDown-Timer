import React,{useState, useEffect} from 'react'
import './inputForm.css'

const InputForm = ()=> {
    const [defaultValue, setDefaultValue] = useState("")

    useEffect(() => {
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        setDefaultValue(formattedDate);
      }, []);
  return (
    <div className='container'>
        <input
            type="datetime-local"
            id="time"
            className='input-form'
            name="meeting-time"
            value={defaultValue}
            min="2018-06-07T00:00"
            max="2018-06-14T00:00" 
        />
        <button className='btn'>Start Timer</button>
    </div>
  )
}

export default InputForm;
