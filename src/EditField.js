import React from "react";

function EditField(props) {

    return (
        <>
        {
            props.isEditing ? (
                <span>{props.children}</span>
            ) : (
                <span>{props.title}</span>
            )
        }
        </>
    )
}

export default EditField