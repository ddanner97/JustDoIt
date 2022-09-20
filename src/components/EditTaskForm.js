import React, { useState, useEffect } from 'react'
import { updateData } from '../utils'

// import components
import CancelButton from './buttons/CancelButton'
import SaveTaskButton from './buttons/SaveTaskButton'
import TaskDescription from './inputs/TaskDescriptionInput'
import TaskNameInput from './inputs/TaskNameInput'
import TaskPriorityInput from './inputs/TaskPriorityInput'

function EditTaskForm(props) {

    // state variables
    const [taskName, setTaskName] = useState(props.taskName)
    const [taskDescription, setTaskDescription] = useState(props.taskDescription)
    const [taskPriority, setTaskPriority] = useState(props.taskPriority)

    const onSave = () => {

        //throw error if task name input is = ' '
        if(taskName === '') {
            return alert('Enter a Task Name')
        }

        let arr = props.taskList
        
        //Create new task object and push to taskList
        arr[props.id + 1] = {
            taskName: taskName,
            taskDescription: taskDescription,
            taskPriority: taskPriority,
        }

        props.setTaskList(arr)

        //PUT API call
        updateData(props.taskList)

        //clearState
        setTaskName('')
        setTaskDescription('')
        setTaskPriority('one')

        //hide form
        props.setViewForm(false)

    };

    return (

        <div className="task-form">
            <TaskNameInput taskName={taskName} setTaskName={setTaskName} />
            <TaskDescription taskDescription={taskDescription} setTaskDescription={setTaskDescription} />
            <TaskPriorityInput taskPriority={taskPriority} setTaskPriority={setTaskPriority} />
            <CancelButton viewForm={props.viewForm} setViewForm={props.setViewForm} />
            <SaveTaskButton onSave={onSave} />
        </div>

    )
}

export default EditTaskForm