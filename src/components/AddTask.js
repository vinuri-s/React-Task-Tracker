import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)

    const onSubmit = (e) => {

        e.preventDefault()
        if(!text){
            alert('Please add a task')
            return
        }

        onAdd({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)    
    }

    return (
       <form className='add-form' onSubmit={onSubmit}>
           <div className='form-control form-control-check'>
                <label>
                    Task
                </label>
                <input className="textBoxStyle" type='text' placeholder='Add Task' value={text} 
                onChange={(e)=>setText(e.target.value)}/>
           </div>
           <div className='form-control form-control-check'>
                <label>
                    Day & Time
                </label>
                <input type='datetime-local' className="textBoxStyle" placeholder='Add Day & Time' value={day} 
                onChange={(e)=>setDay(e.target.value)}/>
           </div>
           {/* <div className='form-control form-control-check'>


                <label>
                    Set Reminder
                </label>
                <input type='checkbox' className="textBoxStyle" checked={reminder} value={reminder} 
                onChange={(e)=>setReminder(e.currentTarget.checked)}/>
           </div> */}
           <center>
           <div class="form-check">
                <input type="checkbox" className="textBoxStyle" class="form-check-input" checked={reminder} value={reminder} 
                onChange={(e)=>setReminder(e.currentTarget.checked)}/>
                <label class="form-check-label" for="exampleCheck1">{" "}{" "}Set Reminder</label>
            </div>
            </center>
           <input type='submit' value='Save Task' className='btn btn-block'/>
       </form>
    )
}


export default AddTask