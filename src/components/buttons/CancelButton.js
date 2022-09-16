import React from 'react'

function CancelButton(props) {
    return (
        <button onClick={() => props.viewForm ? props.setViewForm(false) : props.setViewForm(true)} ><i className="fa-regular fa-circle-xmark"></i></button>
    )
}

export default CancelButton