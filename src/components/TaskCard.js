import React from 'react'
import { readData, updateData } from '../utils'

function TaskCard(props) {

  return (
    <div className="task-card">
        <input type="radio" onChange={() => props.completeTask(props.id)} />
        <div className="task-card-name">{props.task.taskName}</div>
        <div className="task-card-name">{props.task.taskDescription}</div>
        <div className="task-card-name">{props.task.taskPriority}</div>
        <div className="task-card-name">{props.id}</div>
        <br></br>
    </div>
  )
}

export default TaskCard