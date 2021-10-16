import React, {useEffect, useRef} from "react";

function CreationModal(props) {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    const createNode = useRef();

    const handleKey = e => {
        if (e.code === 'Escape') {
            props.handleClose()
            props.closeCreation()
        }
    }

    const handleClick = e => {
        if (!createNode.current.contains(e.target)) {
            props.handleClose()
            props.closeCreation()
        }
    }

    useEffect(
        () => {
            document.addEventListener('keydown', handleKey)
            document.addEventListener('mousedown', handleClick)
            return () => {
                document.removeEventListener('keydown', handleKey)
                document.removeEventListener('mousedown', handleClick)
            }
        }, []
    )
    console.log(props)

    return (
        <div className={showHideClassName}>
            <section ref={createNode} className="modal-main">

                

            {props.children}
                <button type="button" onClick={props.handleClick}>
                    Close
                </button>
            </section>
        </div>
    );
}

export default CreationModal;