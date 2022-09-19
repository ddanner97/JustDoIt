import React, { useState, useEffect } from 'react'

// import components
import CancelButton from './buttons/CancelButton'
import SaveTaskButton from './buttons/SaveTaskButton'
import TaskDescription from './inputs/TaskDescriptionInput'
import TaskNameInput from './inputs/TaskNameInput'
import TaskPriorityInput from './inputs/TaskPriorityInput'

function TaskFrom(props) {

    // state variables
    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskPriority, setTaskPriority] = useState('one')

    useEffect(() => {

    })

    const onSave = () => {

        //throw error if task name input is = ' '
        if(taskName === '') {
            return alert('Enter a Task Name')
        }

        //POST call
        props.setTaskList(arr => [...arr, {
            taskName: taskName,
            taskDescription: taskDescription,
            taskPriority: taskPriority
        }])

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

export default TaskFrom