import React, {useState} from "react";
import MainImage from "../assets/img/main.jpg";
import AvroraReview from "../assets/img/avrora-review.jpg";
import AlaReview from "../assets/img/ala-review.jpg";
import BazisReview from "../assets/img/bazis-review.jpg";
import {Button, Modal} from "react-bootstrap";

export const Reviews = () => {
    const [showAvrora, setShowAvrora] = useState(false);
    const [showAla, setShowAla] = useState(false);
    const [showBazis, setShowBazis] = useState(false);

    const handleShowAvrora = () => {
        setShowAvrora(true);
    };
    const handleCloseAvrora = () => setShowAvrora(false);
    const handleShowAla = () => setShowAla(true);
    const handleCloseAla = () => setShowAla(false);
    const handleShowBazis = () => setShowBazis(true);
    const handleCloseBazis = () => setShowBazis(false);

    return (
        <>
            <div className="main-container">
                <img
                    className="main-image __height40vh"
                    src={ MainImage }
                />
            </div>
            <div className="text-container __padding">
                <h2> Отзывы </h2>
                <img
                    src={ AvroraReview }
                    className="review-img __padding"
                    onClick={() => handleShowAvrora()}
                />
                <img
                    src={ AlaReview }
                    className="review-img __padding"
                    onClick={() => handleShowAla()}
                />
                <img
                    src={ BazisReview }
                    className="review-img __padding"
                    onClick={() => handleShowBazis()}
                />
            </div>

            <Modal show={showAvrora} onHide={handleCloseAvrora}>
                <Modal.Header closeButton>
                    <Modal.Title> Аврора </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={ AvroraReview } className="modal-img" />
                </Modal.Body>
            </Modal>

            <Modal show={showAla} onHide={handleCloseAla}>
                <Modal.Header closeButton>
                    <Modal.Title> Алагеум </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={ AlaReview } className="modal-img" />
                </Modal.Body>
            </Modal>

            <Modal show={showBazis} onHide={handleCloseBazis}>
                <Modal.Header closeButton>
                    <Modal.Title> Базис </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={ BazisReview } className="modal-img" />
                </Modal.Body>
            </Modal>
        </>
    )
}