import React, { useState, useEffect } from "react";
import RegistrationCardAdmin from "./RegistrationCardAdmin";

function Registrations(props) {
    const sessionId = localStorage.getItem("sessionId")
    const [registrations, setRegistrations] = useState([])
    const [hikeData, setHikeData] = useState([])
    const [selectedHikeValue, setSelectedHikeValue] = useState("allHikes")

    const envUrl = () => {
        if (process.env.NODE_ENV === 'development') {
            return process.env.REACT_APP_DEV_DB_URL_HIKES
        } else {
            return 'https://wbshikingclub.herokuapp.com/api/hikes'
        }
    }

    const getRegistrationsData = async () => {
        let jsonResponse = { error: "unknown" };
        const url = envUrl() + `/registrations?session=${sessionId}`;
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
            } else {
                props.logOut()
            }
        } catch (error) {
            console.log(error);
            jsonResponse.error = error.message
            props.logOut()
        }
        return jsonResponse
    }

    const getHikeData = async () => {
        let jsonResponse = { error: "unknown" };
        const url = envUrl() + `?session=${sessionId}`;
        try {
            const response = await fetch(url, { cache: 'no-cache' })
            if (response.ok) {
                jsonResponse = await response.json()
                const newHikes = jsonResponse.map(hike => ({
                    title: hike.title || '',
                    uuid: hike.uuid,
                    date: hike.date || new Date().toLocaleDateString('fr-ca')
                }))
                setHikeData(newHikes)
            }
        } catch (error) {
            console.log(error);
            jsonResponse.error = error.message
        }
        return jsonResponse
    }

    useEffect(
        () => {
            getHikeData()
            getRegistrationsData()
        }, []
    )

    useEffect(
        () => {
            refreshRegistrationsSelection()
        }, [selectedHikeValue]
    )

    const getRegistrationsByHikeId = async (hikeId) => {
        let jsonResponse = { error: "unknown" };
        const url = envUrl() + `/${hikeId}?session=${sessionId}`;
        try {
            const response = await fetch(url, { cache: 'no-cache' })
            if (response.ok) {
                jsonResponse = await response.json()
                const registrationsOfHike = jsonResponse.registrations.map(registration => ({
                    name: registration.name,
                    email: registration.email,
                    message: registration.message,
                    hikeId: registration.hike_uuid,
                    hikeTitle: jsonResponse.title,
                    dateAdded: registration.date_added,
                    id: registration.id
                }))
                const sortedRegs = registrationsOfHike.sort((a, b) => {
                    a = Date.parse(a.dateAdded)
                    b = Date.parse(b.dateAdded)
                    if (a > b) {
                        return -1
                    } else if (a < b) {
                        return 1
                    } else if (a === b) {
                        return 0
                    }
                })
                setRegistrations(sortedRegs)
            }
        } catch (error) {
            console.log(error);
            jsonResponse.error = error.message
        }
        return jsonResponse.registrations
    }

    const deleteRegistration = async (id) => {
        const baseUrl = envUrl();
        const url = `${baseUrl}/registrations/${id}?session=${sessionId}`
        const myInit = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        await fetch(url, myInit)
        await refreshRegistrationsSelection()
    }

    async function refreshRegistrationsSelection() {
        if (selectedHikeValue === "allHikes") {
            await getRegistrationsData()
        } else {
            await getRegistrationsByHikeId(selectedHikeValue)
        }
    }

    const handleChange = (e) => {
        setSelectedHikeValue(e.target.value)
    }

    return (
        <div>
            <label htmlFor="hikesDropdown">See registrations for hike:</label>
            <select id="hikesDropdown" name="hikes" onChange={handleChange}>
                <option defaultValue value="allHikes">All hikes</option>
                {
                    hikeData.map(hike => (
                        <option key={"option" + hike.uuid} value={hike.uuid}>{hike.title} ({hike.uuid})</option>
                    ))
                }
            </select>
            <div className="registrationsList">
                {
                    registrations.map(registration => (
                        <div key={registration.id} >
                            <RegistrationCardAdmin
                                id={registration.id}
                                email={registration.email}
                                name={registration.name}
                                message={registration.message}
                                hikeId={registration.hikeId}
                                hikeTitle={registration.hikeTitle}
                                dateAdded={registration.dateAdded}
                            >
                                <button className="deleteRegistration" onClick={() => deleteRegistration(registration.id)}>Delete</button>
                            </RegistrationCardAdmin>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Registrations;