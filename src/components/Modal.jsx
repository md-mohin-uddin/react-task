import React from "react";

const Modal = ({ isOpen, closeModal, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button
            type="button"
            className="btn-close"
            onClick={closeModal}
          ></button>
        </div>
        <div className="modal-body">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
