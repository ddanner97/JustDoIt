import React from 'react'

function AddTaskButton(props) {
    return (
        <div className="flex flex-row mx-5">
            <div className="grow"></div>
            <button onClick={() => props.viewForm ? props.setViewForm(false) : props.setViewForm(true)} ><i className="fa-regular fa-plus bg-primary text-1xl text-white p-6 rounded-full mt-5 mb-8"></i></button>
        </div>
    )
}

export default AddTaskButton