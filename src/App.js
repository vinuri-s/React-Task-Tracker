import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {

  const [tasks,setTasks]=useState(
    [{
    id:1,
    text:'Doctor Appointment',
    day:'June 10th at 5.30pm',
    reminder:true,

    }]
)


  return (
    <div className="container">
     <Header/>
     <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
