import React from 'react'

function TaskCard(props) {
  return (
    <div className="task-card">
        <input type="radio" onChange={() => props.setTaskList(props.tasks.splice(props.id, 1))} />
        <div className="task-card-name">{props.task.taskName}</div>
        <div className="task-card-name">{props.task.taskDescription}</div>
        <div className="task-card-name">{props.task.taskPriority}</div>
        <div className="task-card-name">{props.id}</div>
        <br></br>
    </div>
  )
}

export default TaskCard