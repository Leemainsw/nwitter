import React from "react";

import "css/WriteFormModal.css";
import "css/WriteForm.css";
import WriteForm from "components/Home/WriteForm";

const WriteFormDialog = ({ userObj, onCancle }) => {
    return (
        <>
            <div className="write-form-modal">
                <section className="modal-main">
                    <section className="top">
                        <button className="cancel-btn" onClick={onCancle}>X</button>
                    </section>
                    <WriteForm userObj={userObj} />
                </section>
            </div>
        </>
    );
};

export default WriteFormDialog;
