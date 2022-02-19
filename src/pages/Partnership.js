import React from "react";
import MainImage from "../assets/img/main.jpg";
import Avrora from "../assets/img/avrora.png";
import Bazis from "../assets/img/bazis.png";
import BI from "../assets/img/bi.png";
import ALA from "../assets/img/alageum.png";
import GQ from "../assets/img/gq.png";
import Legrand from "../assets/img/legrand.png";
import Sch from "../assets/img/schneider.png";

export const Partnership = () => {
    return (
        <>
            <div className="main-container">
                <img
                    className="main-image __height40vh"
                    src={ MainImage }
                />
            </div>
            <div className="text-container __padding">
                <h2> Наши партнеры </h2>
                <img src={ Avrora } className="partner-img __padding" />
                <img src={ Bazis } className="partner-img __padding" />
                <img src={ BI } className="partner-img __padding" />
                <img src={ ALA } className="partner-img __padding" />
                <img src={ GQ } className="partner-img __padding" />
                <img src={ Legrand } className="partner-img __padding" />
                <img src={ Sch } className="partner-img __padding" />
            </div>
        </>
    )
}