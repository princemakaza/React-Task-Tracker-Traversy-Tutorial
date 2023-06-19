import React  from 'react';
import Task from './Task';
const Tasks = ({tasks, deleteFunction, onToggleReminder}) => {

  return (
    <div>
    {tasks.map((task)=>(<Task key={task.id} 
    task={task} onDelete={deleteFunction} onToggleReminder={onToggleReminder}/>))}
    </div>
  )
} 

export default Tasks 