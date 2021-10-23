import React from "react";

function EditField(props) {

    return (
        <>
        {
            props.isEditing ? (
                <span className="modalInputField">{props.children}</span>
            ) : (
                <span>{props.title}</span>
            )
        }
        </>
    )
}

export default EditField