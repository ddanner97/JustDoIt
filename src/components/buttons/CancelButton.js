import React from 'react'

function CancelButton(props) {
    return (
        <button onClick={() => props.viewForm ? props.setViewForm(false) : props.setViewForm(true)} ><i className="fa-solid fa-xmark bg-primary text-white p-2 rounded-full mx-2 my-2"></i></button>
    )
}

export default CancelButton