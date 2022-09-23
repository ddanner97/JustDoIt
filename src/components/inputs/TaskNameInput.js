import React from 'react'

function TaskNameInput(props) {
    return (
        <input className="task-name-input my-1.5 py-2 px-2 w-screen" type="text" placeholder='Enter Task Name' value={props.taskName} onChange={(e) => props.setTaskName(e.target.value)} />
    )
}

export default TaskNameInput