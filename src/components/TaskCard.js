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
            <div className={"w-656 bg-white ml-266 border-dashed align-top px-10 py-80px my-2 mx-2 flex flex-row"}>
              <input className={"scale-150 border-gray"} type="radio" onChange={() => props.completeTask(props.id)} />
              <div className="task-card-name px-6">{props.task.taskName}</div>
              <button onClick={() => setViewEditForm(true)}><i className="fa-solid fa-pen-to-square "></i></button>
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