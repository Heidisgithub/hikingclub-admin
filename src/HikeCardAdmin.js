import React from "react";

function HikeCardAdmin(props) {
    return (
        <div className="hikeCardAdmin">
            <img src="https://via.placeholder.com/150" alt=""></img>
            <h3>{props.title}</h3>
            <p>{props.uuid}</p>
            <a href="">Delete</a>
        </div>
    )
}

export default HikeCardAdmin;