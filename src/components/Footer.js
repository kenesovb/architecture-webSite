import React, { useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase/FirebaseContext";
import { firebaseReducer } from "../context/firebase/firebaseReducer";
import "./footer.css";
import "./footer-mobile.scss";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  const { links, getLinks } = useContext(FirebaseContext);
  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className="footer-container">
      {/*<section className="footer-subscription">*/}
      {/*</section>*/}
      {/*<div className="footer-links">*/}
      {/*  <div className="footer-link-wrapper">*/}
      {/*    <div className="footer-link-items">*/}
      {/*      <h2>О Нас</h2>*/}
      {/*      <Link to="/sign-up">О Компании</Link>*/}
      {/*      <Link to="/">Наши проекты</Link>*/}
      {/*      /!* <Link to="/">Careers</Link>*/}
      {/*      <Link to="/">Investors</Link>*/}
      {/*      <Link to="/">Terms of Service</Link> *!/*/}
      {/*    </div>*/}
      {/*    <div className="footer-link-items">*/}
      {/*      <h2>Контакты</h2>*/}
      {/*      <Link to="/contacts">Контакты</Link>*/}
      {/*      <Link to="/">Адрес</Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="footer-link-wrapper">*/}
      {/*    <div className="footer-link-items">*/}
      {/*      <h2>Videos</h2>*/}
      {/*      <Link to="/">Submit Video</Link>*/}
      {/*      <Link to="/">Ambassadors</Link>*/}
      {/*      <Link to="/">Agency</Link>*/}
      {/*      <Link to="/">Influencer</Link>*/}
      {/*    </div>*/}
      {/*    <div className="footer-link-items">*/}
      {/*      <h2>Social Media</h2>*/}
      {/*      <Link to={{ pathname: links.instagram }} target="_blank">*/}
      {/*        Instagram*/}
      {/*      </Link>*/}
      {/*      <Link to="/">Facebook</Link>*/}
      {/*      <Link to="/">Youtube</Link>*/}
      {/*      <Link to="/">Twitter</Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<section className="social-media">*/}
      {/*  <div className="social-media-wrap">*/}
      {/*    <div className="footer-logo">*/}
      {/*      <Link to="/" className="social-logo">*/}
      {/*        Arman*/}
      {/*        <i className="fab fa-typo3" />*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*    <small className="website-rights">Arman © 2020</small>*/}
      {/*    <div className="social-icons">*/}
      {/*      <Link*/}
      {/*        className="social-icon-link facebook"*/}
      {/*        to="/"*/}
      {/*        target="_blank"*/}
      {/*        aria-label="Facebook"*/}
      {/*      >*/}
      {/*        <i className="fab fa-facebook-f" />*/}
      {/*      </Link>*/}
      {/*      <Link*/}
      {/*        className="social-icon-link instagram"*/}
      {/*        to="/"*/}
      {/*        target="_blank"*/}
      {/*        aria-label="Instagram"*/}
      {/*      >*/}
      {/*        <i className="fab fa-instagram" />*/}
      {/*      </Link>*/}
      {/*      <Link*/}
      {/*        className="social-icon-link youtube"*/}
      {/*        to="/"*/}
      {/*        target="_blank"*/}
      {/*        aria-label="Youtube"*/}
      {/*      >*/}
      {/*        <i className="fab fa-youtube" />*/}
      {/*      </Link>*/}
      {/*      <Link*/}
      {/*        className="social-icon-link twitter"*/}
      {/*        to="/"*/}
      {/*        target="_blank"*/}
      {/*        aria-label="Twitter"*/}
      {/*      >*/}
      {/*        <i className="fab fa-twitter" />*/}
      {/*      </Link>*/}
      {/*      <Link*/}
      {/*        className="social-icon-link twitter"*/}
      {/*        to="/"*/}
      {/*        target="_blank"*/}
      {/*        aria-label="LinkedIn"*/}
      {/*      >*/}
      {/*        <i className="fab fa-linkedin" />*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <div className="footer-column1">
        <div className="column1">
          <p> ул.Егизбаева, 7 </p>
          <p> Алматы, 055552 </p>
          //TODO: второй номер с новой строки
          <p> Телефон: +7(705) 363-96-13, +7 (776) 829-43-92 </p>
          <p> E-mail: aga.engineering@mail.ru </p>
        </div>
        <div className="column2">
          <p>
            Режим работы: с 9.00 - 18.00.
          </p>
          <p>
            Обеденный перерыв с 12.30 - 13.30
            Выходные дни: суббота, воскресенье
          </p>
          <p>
            //TODO: С новой строки каждое предложение
            «Copyright © 2022 by ТОО «AGA Engineering».
            Запрещено любое копирование материалов сайта
            без письменного согласия владельца»
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
