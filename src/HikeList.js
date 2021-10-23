import React, {useState, useEffect} from "react";
import HikeCardAdmin from "./HikeCardAdmin";
import Modal from "./Modal";
import EditField from "./EditField";

function HikeList() {
    const [hikeData, setHikeData] = useState([])
    const [modalVisibility, setModalVisibility] = useState(false);
    const [creationModalVisibility, setCreationModalVisibility] = useState(false)
    const [selectedHike, setSelectedHike] = useState({});
    const [isEditing, setEditing] = useState(false);
    const [editHike, setEditHike] = useState({
        title: '',
        imageUrl: '',
        date: '',
        description: '',
        location: ''
    });

    useEffect(
        () => getData(), []
    )

    useEffect(
        () => {
            if (selectedHike.uuid) {
                const foundHike = findSelectedHike(selectedHike.uuid)
                setSelectedHike(foundHike)
            } else {
                return
            }
        }, [hikeData]
    )

    const envUrl = () => {
        if (process.env.NODE_ENV === 'development') {
            return process.env.REACT_APP_DEV_DB_URL_HIKES
        } else {
            return 'https://wbshikingclub.herokuapp.com/api/hikes'
        }
    }

    const getData = async () => {
        let jsonResponse = { error: "unknown" };
        const url = envUrl();
        // process.env.NODE_ENV === 'development' ? url = process.env.REACT_APP_DEV_DB_URL_HIKES : url = 'https://wbshikingclub.herokuapp.com/api/hikes'
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
        setModalVisibility(false);
        setCreationModalVisibility(false);
    }

    const findSelectedHike = (hikeId) => {
       return hikeData.find(hike => hike.uuid === hikeId)
    }

    const selectHike = (hikeId) => {
        showModal()
        const foundHike = findSelectedHike(hikeId)
        setSelectedHike(foundHike)
    }

    const convertDate = (date) => {
        return (new Date(date)).toLocaleDateString('fr-ca')
    }

    const closeEditing = () => {
        setEditHike({
            title: '',
            imageUrl: '',
            date: '',
            description: '',
            location: ''
        })
        setEditing(false)
    }

    const sendPatchUpdate = async (updateBody, hikeId) => {
        const baseUrl = envUrl();
        const url = `${baseUrl}/${hikeId}`
        const myInit = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateBody)
          };
        const response = await fetch(url, myInit)
    }

    const updateEdit = async (hikeId) => {
        await sendPatchUpdate(editHike, hikeId)
        closeEditing()
        getData()
    }

    const toggleCreationModalVisibility = ()=>{
        if(!creationModalVisibility){
        setCreationModalVisibility(true)
        return;
    }
    setCreationModalVisibility(false)
    return;
    }


    const createHike = async (newHike) => {
        const url = envUrl();
    
        const postingHike = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newHike)
          };
          const response = await fetch(url, postingHike)
    }

const sendCreate = async () =>{
    await createHike(editHike)
    closeModal()
    closeEditing()
    getData()
}

    return (
        <div className="hikeList">
            <button className="createButton" onClick={toggleCreationModalVisibility}>Create a new hike</button>
           
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
            <Modal create={createHike} show={creationModalVisibility} closeCreation={closeEditing} handleClose={closeModal} >
          {/* make fields clickable and implement the post function to create a hike */}
                
            <div className="editSection">
                    <span>Hike Title: </span>
                         <input 
                            type="text"
                            placeholder={selectedHike.title} 
                            value={editHike.title}
                            onChange={e => {
                                setEditHike({...editHike, title: e.target.value})
                                }}
                            />
                </div>
                <div>
                    <span>Hike Image URL: </span>
                        <input 
                            type="text"
                            placeholder={selectedHike.imageUrl}  
                            value={editHike.imageUrl}
                            onChange={e => setEditHike({...editHike, imageUrl: e.target.value})}
                            />
                </div>
                <div>
                    <span>Hike Date: </span>
                        <input 
                            type="date"
                            placeholder={convertDate(selectedHike.date)}
                            value={convertDate(editHike.date)}
                            onChange={e => setEditHike({...editHike, date: e.target.value})}
                            />
                </div>
                <div>
                    <span>Hike Description: </span>
                        <input 
                            type="text"
                            placeholder={selectedHike.description}  
                            value={editHike.description}
                            onChange={e => setEditHike({...editHike, description: e.target.value})}
                            />
                </div>
                <div>
                    <span>Hike Location: </span>
                        <input 
                            type="text"
                            placeholder={selectedHike.location}  
                            value={editHike.location}
                            onChange={e => setEditHike({...editHike, location: e.target.value})}
                            />
                </div>
                <button type = "button" onClick={() => { 
                            setEditing(true)
                            sendCreate() }}>Create</button>
                </ Modal>

            <Modal show={modalVisibility} closeEditing={closeEditing} handleClose={closeModal}>
                <img src={selectedHike.imageUrl} alt="hike"></img>
                <p>Hike UUID: {selectedHike.uuid}</p>
                {
                    isEditing ? (
                        <>
                        <button onClick={()=>closeEditing()}>Cancel</button>
                        <button onClick={()=>updateEdit(selectedHike.uuid)}>Update</button>
                        </>
                    ) : (
                        <button onClick={()=>{
                            setEditHike(selectedHike)
                            setEditing(true)
                        }}>Edit Hike Info</button>
                    )
                }
                
                <div className="editSection">
                    <span>Hike Title: </span>
                    <EditField 
                        isEditing={isEditing}
                        title={selectedHike.title}>
                        <input 
                            type="text"
                            placeholder={selectedHike.title} 
                            value={editHike.title}
                            onChange={e => {
                                setEditHike({...editHike, title: e.target.value})
                                }}
                            />
                    </EditField>
                </div>
                <div>
                    <span>Hike Image URL: </span>
                    <EditField
                        isEditing={isEditing} 
                        title={selectedHike.imageUrl}>
                        <input 
                            type="text"
                            placeholder={selectedHike.imageUrl}  
                            value={editHike.imageUrl}
                            onChange={e => setEditHike({...editHike, imageUrl: e.target.value})}
                            />
                    </EditField>
                </div>
                <div>
                    <span>Hike Date: </span>
                    <EditField 
                        isEditing={isEditing}
                        title={convertDate(selectedHike.date)}
                            >
                        <input 
                            type="date"
                            placeholder={convertDate(selectedHike.date)}
                            value={convertDate(editHike.date)}
                            onChange={e => setEditHike({...editHike, date: e.target.value})}
                            />
                    </EditField>
                </div>
                <div>
                    <span>Hike Description: </span>
                    <EditField 
                        isEditing={isEditing}
                        title={selectedHike.description}>
                        <input 
                            type="text"
                            placeholder={selectedHike.description}  
                            value={editHike.description}
                            onChange={e => setEditHike({...editHike, description: e.target.value})}
                            />
                    </EditField>
                </div>
                <div>
                    <span>Hike Location: </span>
                    <EditField 
                        isEditing={isEditing}
                        title={selectedHike.location}>
                        <input 
                            type="text"
                            placeholder={selectedHike.location}  
                            value={editHike.location}
                            onChange={e => setEditHike({...editHike, location: e.target.value})}
                            />
                    </EditField>
                </div>
            </Modal>
        </div>
    )
}

export default HikeList;