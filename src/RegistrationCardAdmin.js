import React from "react";

function RegistrationCardAdmin(props) {
    return (
        <div className="registrationCardAdmin">
            <p>{props.email}</p>
            <p>{props.name}</p>
            <p>{props.message}</p>
            <p>HikeID: {props.hikeId}</p>
        </div>
    )
}

export default RegistrationCardAdmin;