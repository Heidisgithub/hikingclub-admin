import React from "react";

function RegistrationCardAdmin(props) {
    return (
        <div className="registrationCardAdmin">
            <p>Email: {props.email}</p>
            <p>Name: {props.name}</p>
            <p>Message: {props.message}</p>
            <p>HikeID: {props.hikeId}</p>
            <p>Hike Title: {props.hikeTitle}</p>
            <p>Added on: {new Date(props.dateAdded).toLocaleDateString("fr-CA")}</p>
            {props.children}
        </div>
    )
}

export default RegistrationCardAdmin;