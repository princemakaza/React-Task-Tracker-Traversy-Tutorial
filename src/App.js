import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
const App =()=> {
  const [showAddTask, setShowAddTask]= useState(false)
      const [tasks, setTask] =  useState([])


  const deleteTask = async(id)=>{
    await fetch(`http://localhost:5050/tasks/${id}`, {
      method:'DELETE'
    })
    setTask(tasks.filter((task)=>task.id !== id))
  }

  const fetchTask = async(id)=>{ 
    const res = await fetch(`http://localhost:5050/tasks/${id}`)
    const data = await res.json()
    console.log(data)
    return data
  }
  

   const toggleReminder = async(id)=>{
    const taskToToggle = await fetchTask(id)

    const updTask={...taskToToggle, reminder: !taskToToggle.reminder}
      const res = await fetch(`http://localhost:5050/tasks/${id}`, {
        method: 'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(updTask)
      })
      const data = await res.json()


    setTask(tasks.map((task)=> task.id ===id ?
     {...task, reminder:data.reminder}: task))
  }  

  const addTask = async(task)=>{

      const res = await fetch(`http://localhost:5050/tasks`, {
        method:'POST', 
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(task)
      })
      const data = await res.json()
      setTask([...tasks, data])

    // const id = Math.floor(Math.random()*10000)+1
    // const newTask = {id, ...task}
    // setTask([...tasks, newTask])
  } 

  useEffect(()=>{
    const getTasks = async()=>{
      const tasksFromServer = await fetchTasks()
      setTask(tasksFromServer)
    }
    getTasks()
  },[]) 
//Fetch Task
const fetchTasks = async()=>{ 
  const res = await fetch(`http://localhost:5050/tasks`)
  const data = await res.json()
  console.log(data)
  return data
}



    return (
      <Router>
                      <div className="container">
        <Header onShowAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>


        <Route  path="/" exact render={(props)=>(
          <div>
          {      showAddTask &&  <AddTask onAdd ={addTask}/>
}
        {tasks.length>0 ?(<Tasks tasks={tasks} deleteFunction={deleteTask} onToggleReminder={toggleReminder}/>):(
          `No Tasks found` 
        )}

          </ div>
        )} />
        <Switch>
         <Route exact path="/about" component={About} />
      </Switch>
        <Footer/>
      </div>
      </Router>
    );
  
}

export default App;
 