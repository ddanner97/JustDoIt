import React from 'react'

function SaveTaskButton(props) {
    return (
        <button onClick={props.onSave} ><i className="fa-solid fa-arrow-up bg-primary text-white p-2 rounded-full mx-2 my-2"></i></button>
    )
}

export default SaveTaskButton