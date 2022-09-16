import React from 'react'

function SaveTaskButton(props) {
    return (
        <button onClick={props.onSave} ><i className="fa-solid fa-arrow-up"></i></button>
    )
}

export default SaveTaskButton