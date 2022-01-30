import AlertDialog from "dialog/AlertDialog";
import React, { useState } from "react";

import "../css/DropDown.css";

import { dbService } from "fbase";

const DropDown = ({ nweetObj }) => {
    const [deleteAlert, setDeleteAlert] = useState(false);
    // 자신의 트윗이라면 수정 및 삭제 버튼
    // 자신의 트윗이 아니라면 신고하기 및 유저 차단하기 버튼

    const deleteNweet = async () => { 
        closeDeleteAlert();
        await dbService.doc(`nweets/${nweetObj.id}`).delete();
    };

    const openDeleteAlert = () => setDeleteAlert(true);
    const closeDeleteAlert = () => setDeleteAlert(false);

    const editNweet = () => {};

    const reportNweet = () => {};

    const blockUser = () => {};

    return (
        <div className="drop-down">
            <button type="button" onClick={openDeleteAlert}>
                삭제하기
            </button>
            <button type="button" onClick={editNweet}>
                수정하기
            </button>
            <button type="button" onClick={reportNweet}>
                차단하기
            </button>
            <button type="button" onClick={blockUser}>
                신고하기
            </button>

            {deleteAlert && (
                <AlertDialog
                    key={'delete'}
                    visible={deleteAlert}
                    message={"정말 삭제하시겠습니까"}
                    onConfirm={deleteNweet}
                    onCancle={closeDeleteAlert}
                />
            )}
        </div>
    );
};

export default DropDown;
