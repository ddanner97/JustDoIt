import React from 'react'

function TaskDescription(props) {
    return (
        <input className="task-description-input" type="text" placeholder='Enter Task Description' value={props.taskDescription} onChange={(e) => props.setTaskDescription(e.target.value)} />
    )
}

export default TaskDescription