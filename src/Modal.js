import React from "react";

function Modal(props) {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {props.children}
                <button type="button" onClick={props.handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
}

export default Modal;