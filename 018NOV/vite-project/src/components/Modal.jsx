import React from "react";
import { createPortal } from "react-dom";


const Modal = ({isOpen, children}) => {
  if(!isOpen) return null;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'red',
        padding: '20px',
        zIndex: 1000
      }}
    >
      {children}
    </div>,
    document.body
  )
}

export default Modal