import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Ikonlarni import qiling
import "./modal.scss"; // Modal uchun SCSS fayl

const Modal = ({ isOpen, onClose, onYes, onNo }) => {
  if (!isOpen) return null; // Agar modal ochiq bo'lmasa, hech narsa ko'rsatmaydi

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Siz Toshkent shahrida yashaysizmi?</h2>
        <div className="modal-buttons">
          <button onClick={onYes} className="yes-button">
            <FaCheckCircle size={20} style={{ marginRight: "5px" }} />
            Ha, yashayman
          </button>
          <button onClick={onNo} className="no-button">
            <FaTimesCircle size={20} style={{ marginRight: "5px" }} />
            Boshqa shahrada yashayman
          </button>
        </div>
 
      </div>
    </div>
  );
};

export default Modal;
