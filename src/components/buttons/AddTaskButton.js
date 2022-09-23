import React from 'react'

function AddTaskButton(props) {
    return (
        <button onClick={() => props.viewForm ? props.setViewForm(false) : props.setViewForm(true)} ><i className="fa-regular fa-plus bg-primary text-1xl text-white p-6 rounded-full"></i></button>
    )
}

export default AddTaskButton