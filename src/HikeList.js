import React, {useState, useEffect} from "react";
import HikeCardAdmin from "./HikeCardAdmin";

function HikeList() {
    const [hikeData, setHikeData] = useState([])

    useEffect(
        () => getData(), []
    )

    const getData = async () => {
        let jsonResponse = { error: "unknown" };
        let url = `http://localhost:5000/api/hikes/`
        try {
          const response = await fetch(url, { cache: 'no-cache' })
          if (response.ok) {
            jsonResponse = await response.json()
            setHikeData(jsonResponse)
          }
        } catch (error) {
          console.log(error);
          jsonResponse.error = error.message
        }
        return jsonResponse
    }

    return (
        <div className="hikeList">
            {
                hikeData.map(hike => {
                    return <HikeCardAdmin 
                        title={hike.title}
                        uuid={hike.uuid}
                        imageUrl={hike.imageUrl}
                        key={hike.uuid}
                    />
                })
            }
        </div>
    )
}

export default HikeList;