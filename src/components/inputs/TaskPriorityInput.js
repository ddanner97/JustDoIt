import React from 'react'

function TaskPriority(props) {
  return (
    <select className="task-priority-input  my-1.5 mx-1 py-1 px-2" value={props.TaskPriority} onChange={(e) => props.setTaskPriority(e.target.value)} >
      <option value="one">!</option>
      <option value="two">!!</option>
      <option value="three">!!!</option>
      <option value="four">!!!!</option>
    </select>
  )
}

export default TaskPriority