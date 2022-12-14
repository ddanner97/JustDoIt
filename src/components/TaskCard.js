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
            <div className={"bg-white align-top px-10 my-2"}>
              <div className={"flex flex-row"}>
                <input className={"scale-150 border-gray"} type="radio" onChange={() => props.completeTask(props.id)} />
                <div className="task-card-name px-6 grow">{props.task.taskName}</div>
                <button onClick={() => setViewEditForm(true)}><i className="fa-solid fa-pen-to-square"></i></button>
              </div>
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