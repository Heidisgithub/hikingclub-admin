import React, {useState, useEffect} from "react";
import HikeCardAdmin from "./HikeCardAdmin";
import Modal from "./Modal";

function HikeList() {
    const [hikeData, setHikeData] = useState([])
    const [modalVisibility, setModalVisibility] = useState(false);
    const [selectedHike, setSelectedHike] = useState({});

    useEffect(
        () => getData(), []
    )

    const getData = async () => {
        let jsonResponse = { error: "unknown" };
        let url;
        process.env.NODE_ENV === 'development' ? url = process.env.REACT_APP_DEV_DB_URL_HIKES : url = 'https://wbshikingclub.herokuapp.com/api/hikes'
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

    const showModal = () => {
        setModalVisibility(true)
    }

    const closeModal = () => {
        setModalVisibility(false)
    }

    const findSelectedHike = (hikeId) => {
       return hikeData.find(hike => hike.uuid === hikeId)
    }

    const selectHike = (hikeId) => {
        showModal()
        const foundHike = findSelectedHike(hikeId)
        setSelectedHike(foundHike)
    }

    return (
        <div className="hikeList">
            {
                hikeData.map(hike => {
                    return (
                        <div key={hike.uuid} onClick={()=>selectHike(hike.uuid)}>
                            <HikeCardAdmin 
                                title={hike.title}
                                uuid={hike.uuid}
                                imageUrl={hike.imageUrl}
                            />
                        </div>
                    )
                })
            }
            <Modal show={modalVisibility} handleClose={closeModal}>
                <h2>{selectedHike.title}</h2>
                <p>{selectedHike.uuid}</p>
                <img src={selectedHike.imageUrl} alt=""></img>
                <p>{selectedHike.date}</p>
                <p>{selectedHike.description}</p>
                <p>{selectedHike.location}</p>
            </Modal>
        </div>
    )
}

export default HikeList;