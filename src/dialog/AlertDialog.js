import React from "react";
import "../css/Alert.css";

const AlertDialog = ({ message, onConfirm, onCancle}) => {
    return (
        <>
            <div className="alert-modal">
                <section className="modal-main">
                    <h2>{message}</h2>
                    <button type="button" className="confirm-btn" onClick={onConfirm}>
                        삭제
                    </button>
                    <button type="button" className="cancel-btn" onClick={onCancle}>
                        취소
                    </button>
                </section>
            </div>
        </>
    );
};

export default AlertDialog;
