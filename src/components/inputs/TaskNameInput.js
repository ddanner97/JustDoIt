import React from 'react'

function TaskNameInput(props) {
    return (
        <input className="task-name-input" type="text" placeholder='Enter Task Name' value={props.taskName} onChange={(e) => props.setTaskName(e.target.value)} />
    )
}

export default TaskNameInput