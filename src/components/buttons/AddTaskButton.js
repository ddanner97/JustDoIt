import React from 'react'

function AddTaskButton(props) {
    return (
        <button onClick={() => props.viewForm ? props.setViewForm(false) : props.setViewForm(true)} ><i className="fa-regular fa-plus"></i></button>
    )
}

export default AddTaskButton