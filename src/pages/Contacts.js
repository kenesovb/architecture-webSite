import React from "react";
import MainImage from "../assets/img/main.jpg";

export const Contacts = () => {
    return (
        <>
            <div className="main-container">
                <img
                    className="main-image __height40vh"
                    src={ MainImage }
                />
            </div>
            <div className="text-container __padding">
                <h2> Контакты </h2>
                <h4> ТОО «AGA Engineering» </h4>
                <p> ул.Егизбаева, 7 </p>
                <p> Алматы, 055552 </p>
                <p> Телефон: +7(705) 363-96-13, +7 (776) 829-43-92 </p>
                <p> E-mail: aga.engineering@mail.ru </p>
            </div>
        </>
    )
}