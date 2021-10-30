import React, {useState, useEffect} from "react";
import RegistrationCardAdmin from "./RegistrationCardAdmin";

function Registrations(){
    const [registrations, setRegistrations] = useState([])
    const envUrl = () => {
        if (process.env.NODE_ENV === 'development') {
            return `${process.env.REACT_APP_DEV_URL_HOMEPAGE}/api/hikes/registrations`
        } else {
            return 'https://wbshikingclub.herokuapp.com/api/hikes/registrations'
        }
    }
    const getData = async () => {
        let jsonResponse = { error: "unknown" };
        const url = envUrl();
        try {
          const response = await fetch(url, { cache: 'no-cache' })
          if (response.ok) {
            jsonResponse = await response.json()
            const newRegistrations = jsonResponse.map(registration => ({
                name: registration.name,
                email: registration.email,
                message: registration.message,
                hikeId: registration.hike_uuid,
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
            getData()
        }
    ,[])

    return(
        <div className="registrationsList">
            {
                registrations.map(registration => (
                    <div key={registration.id} >
                        <RegistrationCardAdmin 
                            email={registration.email}
                            name={registration.name}
                            message={registration.message}
                            hikeId={registration.hikeId}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Registrations;