import React from 'react'

function TaskDescription(props) {
    return (
        <input className="task-description-input  my-1.5 py-2 px-2 grow" type="text" placeholder='Enter Task Description' value={props.taskDescription} onChange={(e) => props.setTaskDescription(e.target.value)} />
    )
}

export default TaskDescription