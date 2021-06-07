import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App=() => {

  const [tasks,setTasks]=useState(
    [{
    id:1,
    text:'Doctor Appointment',
    day:'June 10th at 5.30pm',
    reminder:true,

    },
    {
      id:2,
      text:'Doctor Appointment',
      day:'June 10th at 5.30pm',
      reminder:true,
  
      }
  ]
)

//Delete task
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}

//Toggle Reminder
const toggleReminder=(id)=>{
  setTasks(
    tasks.map((task)=>
    task.id===id ? {...task,reminer:
    !task.reminder}:task
    )
  )
}


  return (
    <div className="container">
     <Header/>
     {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
     </div>
  );



}

export default App;
