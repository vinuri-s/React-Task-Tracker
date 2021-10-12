import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App=() => {

  const [showAddTask,setShowAddTask]=useState(false)

  const [tasks,setTasks]=useState(
    [{
      id: 1,
      text: 'Doctor Appointment',
      day: 'June 10th at 5.30pm',
      reminder: true,

    },
      {
        id: 2,
        text: 'Doctor Appointment',
        day: 'June 10th at 5.30pm',
        reminder: true,

      },
      {
        id: 3,
        text: 'Car Service',
        day: 'June 15th at 10.30am',
        reminder: true,

      },
      {
        id: 3,
        text: 'Go to mental clinic',
        day: 'June 16th at 1.30pm',
        reminder: true,

      }
    ]
  )

//Addtask
const addTask=(task)=>{
 const id = Math.floor(Math.random()*1000)+1
 const newTask ={id, ...task}
 setTasks([...tasks,newTask])
}

//Delete task
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}

//Toggle Reminder
const toggleReminder=(id)=>{
  setTasks(
    tasks.map((task)=>
    task.id===id ? {...task,reminder:
    !task.reminder}:task
    )
  )
}


  return (
    <div className="container">
     <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks to Show')}
     </div>
  );



}

export default App;
