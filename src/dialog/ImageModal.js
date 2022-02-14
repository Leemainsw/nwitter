import React from 'react';
import "../css/ImageModal.css";

const ImageModal =  ({src, close}) => {
    return (
        <>
            <div className="image-modal">
                <section className="modal-main" onClick={close}>
                    <div className="modal-left-content">
                        <img src={src} alt="detailImage" />
                        <button>X</button>
                    </div>
                    {/* 멘션 리스트 나중에 */}
                    <div className="modal-right-content">

                    </div>
                </section>
            </div>
        </>
    )


}

export default ImageModal;