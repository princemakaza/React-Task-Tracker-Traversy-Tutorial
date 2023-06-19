import React, { useState } from 'react'
const AddTask = ({onAdd}) => {
    const [text, setText]= useState('')
    const [day, setDay]= useState('')
    const [reminder, setReminder]= useState('')  
    const onSubmit = (e)=>{
        e.preventDefault();
        if(!text){
            alert('Plese fill in text')
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    <form className='add-form'onSubmit={onSubmit} >  
        <div className='form-control'>
            <label>Task</label>
            <input type="text" placeholder='Add Task' 
            value={text}
            onChange={(e)=> setText(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input 
            value={day}
            onChange={(e)=> setDay(e.target.value)}            
            type="text" placeholder='Add Day & Time' />
        </div>
        <div className='form-control-check'>
            <label>Set Reminder</label>
            <input 
            checked={reminder}
            value={reminder}
            onChange={(e)=> setReminder(e.currentTarget.checked)}            
            type="checkbox" />
        </div>
        <input className='btn btn-block' type="submit" value='Save' placeholder='Add Task' />

    </form>
  )
}

export default AddTask