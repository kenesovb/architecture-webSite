import React, { Fragment, useEffect, useContext } from "react";
import { MainText } from "../components/home/MainText";
import { Loader } from "../components/Loader";
import { FirebaseContext } from "../context/firebase/FirebaseContext";
import MainImage from "../assets/img/image.jpg";

import "./style.scss";

export const Home = () => {
  // const { loading, text, getHomePageData } = useContext(FirebaseContext);
  // useEffect(() => {
  //   getHomePageData();
  // }, []);

  // console.log("text from reducer ", text);
  return (
    <>
        <div className="main-container">
            <img
                className="main-image"
                src={ MainImage }
            />
            <p className="main-text">
                КОМПАНИЯ ПРОЕКТ ИНТЕХ ПЛЮС ВОШЛА В 5 ЛИДЕРОВ ПО ПРОЕКТИРОВАНИЮ МНОГОФУНКЦИОНАЛЬНЫХ ЖИЛЫХ КОМПЛЕКСОВ В ГОРОДЕ АСТАНЕ
            </p>
        </div>
        <div className="sub-container">
            <span className="sub-link __padding __margin">
                Реализованные Проекты
            </span>
            <span className="sub-link __padding __margin">
                Контакты
            </span>
            <span className="sub-link __padding __margin">
                Корпоративные мероприятия
            </span>
            <span className="sub-link __padding __margin">
                Партнерство
            </span>
            <span className="sub-link __padding __margin">
                Вакансии
            </span>
        </div>
        <div className="text-container">
            <h2> О компании </h2>
            <h4> Проект Интех Плюс - передовые и эффективные решения!!! </h4>
            <p> Вниманию строительных компаний, крупных застройщиков, банков и государственных учреждений предлагаем услуги по разработке проектно-сметной документации, сопровождение на этапах прохождения государственной экспертизы и строительства. География нашего присутствия не имеет территориальной привязки: мы нацелены на активное сотрудничество с Заказчиками из всех регионов Казахстана. Компания имеет лицензию I категории. </p>
        </div>
    </>
  );
};
