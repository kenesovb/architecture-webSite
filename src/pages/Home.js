import React from "react";

import MainImage from "../assets/img/main.jpg";

import {useHistory} from "react-router-dom";

import "./style.scss";
import "./mobile.scss";


export const Home = () => {
    // const { loading, text, getHomePageData } = useContext(FirebaseContext);
    // useEffect(() => {
    //   getHomePageData();
    // }, []);

    // console.log("text from reducer ", text);

    const history = useHistory();

    return (
        <>
            <div className="main-container">
                <img
                    className="main-image"
                    src={MainImage}
                />
                <p className="main-text">
                    ТОО «AGA Engineering» - Лицензированная проектная компания III категории, которая осуществляет
                    проектирование коммерческой и жилой недвижимости.
                </p>
            </div>
            <div className="sub-container">
                <span className="sub-link __padding __margin" onClick={() => history.push('/services')}>
                    Услуги
                </span>
                {/*<span className="sub-link __padding __margin">*/}
                {/*    Корпоративные мероприятия*/}
                {/*</span>*/}
                <span className="sub-link __padding __margin" onClick={() => history.push('/reviews')}>
                    Отзывы
                </span>
                <span className="sub-link __padding __margin" onClick={() => history.push('/partnership')}>
                    Партнерство
                </span>
                <span className="sub-link __padding __margin" onClick={() => history.push('/contacts')}>
                    Контакты
                </span>
                {/*<span className="sub-link __padding __margin">*/}
                {/*    Вакансии*/}
                {/*</span>*/}
            </div>
            <div className="text-container __padding">
                <h2> О компании </h2>
                <p> Компания AGA Engineering — это современная проектно-инжиниринговая компания, придерживающаяся
                    высоких стандартов во всех направлениях своей деятельности, которая выполняет архитектурное
                    проектирование зданий и сооружений любого уровня сложности. Индивидуальное проектирование домов,
                    коттеджей, вилл и особняков. Все альбомы проекта АР, КЖ, КМ, ГП, ЭП, ОВ, ВК, ЭЛ, АС, СС, ГС. Договор
                    авторского надзора. </p>
                <p> Наша задача – оказание услуг качественно и в срок; работа на результат;
                    клиентоориентированность. </p>
                <p> Наша цель – создание продукта с комфортными условиями для производства, ведения бизнеса, для любого
                    другого труда или для проживания; сделать ваше строительство не только качественным, но и
                    выгодным. </p>
                <p> Компания имеет соответствующие аккредитацию, лицензии, сертификаты, а также аттестованных и
                    квалифицированных специалистов. </p>
                <p> Остались вопросы? Свяжитесь с нами: </p>
                <p> Телефон: +7(705) 363-96-13, +7 (776) 829-43-92 </p>
                <p> E-mail: aga.engineering@mail.ru </p>
            </div>
        </>
    );
};
