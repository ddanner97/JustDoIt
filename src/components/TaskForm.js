import React, { useState, useEffect } from 'react'
import { updateData } from '../utils'

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

    const onSave = () => {

        //throw error if task name input is = ' '
        if(taskName === '') {
            return alert('Enter a Task Name')
        }

        //Create new task object and push to taskList
        let obj = {
            taskName: taskName,
            taskDescription: taskDescription,
            taskPriority: taskPriority
        }

        props.taskList.push(obj)

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

        <div className="task-form bg-secondary">
            <TaskNameInput taskName={taskName} setTaskName={setTaskName} />
            <div className={"flex flex-row"}>
                <TaskDescription taskDescription={taskDescription} setTaskDescription={setTaskDescription} />
                <TaskPriorityInput taskPriority={taskPriority} setTaskPriority={setTaskPriority} />
            </div>
            <div className="">
                <CancelButton viewForm={props.viewForm} setViewForm={props.setViewForm} />
                <SaveTaskButton onSave={onSave} />
            </div>
        </div>

    )
}

export default TaskFrom