import React, { useState, useEffect } from "react";
import RegistrationCardAdmin from "./RegistrationCardAdmin";

function Registrations() {
    const [registrations, setRegistrations] = useState([])
    const envUrl = () => {
        if (process.env.NODE_ENV === 'development') {
            return `${process.env.REACT_APP_DEV_URL_HOMEPAGE}/api/hikes/private/registrations`
        } else {
            return 'https://wbshikingclub.herokuapp.com/api/hikes/private/registrations'
        }
    }
    const getRegistrationsData = async () => {
        const sessionId = localStorage.getItem("sessionId")
        let jsonResponse = { error: "unknown" };
        const url = envUrl() + `?session=${sessionId}`;
        try {
            const response = await fetch(url, { cache: 'no-cache' })
            if (response.ok) {
                jsonResponse = await response.json()
                const newRegistrations = jsonResponse.map(registration => ({
                    name: registration.name,
                    email: registration.email,
                    message: registration.message,
                    hikeId: registration.hike_uuid,
                    hikeTitle: registration.hike_title,
                    dateAdded: registration.date_added,
                    id: registration.id
                }))
                setRegistrations(newRegistrations)
            }
        } catch (error) {
            console.log(error);
            jsonResponse.error = error.message
        }
        return jsonResponse
    }

    useEffect(
        () => {
            getRegistrationsData()
        }
        , [])

    return (
        <div>
            <label htmlFor="hikesDropdown">See registrations for hike:</label>
            <select id="hikesDropdown" name="hikes">
                <option defaultValue>Choose a hike</option>
                {
                    registrations.map(registration => (
                        <option key={"option"+registration.id} value={registration.hikeId}>{registration.hikeTitle} ({registration.hikeId})</option>
                    ))
                }
            </select>
            <div className="registrationsList">
                {
                    registrations.map(registration => (
                        <div key={registration.id} >
                            <RegistrationCardAdmin
                                email={registration.email}
                                name={registration.name}
                                message={registration.message}
                                hikeId={registration.hikeId}
                                hikeTitle={registration.hikeTitle}
                                dateAdded={registration.dateAdded}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Registrations;