import React, { useState } from 'react'
import { readData, updateData } from '../utils'
import EditTaskForm from './EditTaskForm'

function TaskCard(props) {

  const [viewEditForm, setViewEditForm] = useState(false);

  return (
    <div className="task-card">
        {/* Conditionally render AddTaskButton or TaskForm */}
        {!viewEditForm 
          ? 
            <div>
              <input type="radio" onChange={() => props.completeTask(props.id)} />
              <button onClick={() => setViewEditForm(true)}><i className="fa-solid fa-pen-to-square"></i></button>
              <div className="task-card-name">{props.task.taskName}</div>
              <div className="task-card-name">{props.task.taskDescription}</div>
              <div className="task-card-name">{props.task.taskPriority}</div>
              <br></br>
            </div>
          : <EditTaskForm 
              id={props.id}
              viewForm={viewEditForm} 
              setViewForm={setViewEditForm} 
              taskName={props.task.taskName} 
              taskDescription={props.task.taskDescription} 
              taskPriority={props.task.taskPriority}
              taskList={props.taskList}
              setTaskList={props.setTaskList}
            />
        }
    </div>
  )
}

export default TaskCard