import React, { Component } from 'react';
import './Modal.css'

const Modal = (props) => {
 
        return (
            <div className="modal">
                <div onClick={() => props.toggleModal()} className="clickableUnderlay"></div>
                <div className="bringToFore">
                    {props.children}
                </div>
            </div>
    
        )
}
export default Modal