import React, {useEffect, useRef} from "react";

function Modal(props) {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    const domNode = useRef();

    const handleKey = e => {
        if (e.code === 'Escape') {
            props.handleClose()
            props.closeEditing()
        }
    }

    const handleClick = e => {
        if (!domNode.current.contains(e.target)) {
            props.handleClose()
            props.closeEditing()
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

    return (
        <div className={showHideClassName}>
            <section ref={domNode} className="modal-main">
                {props.children}
                <button type="button" onClick={props.handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
}

export default Modal;