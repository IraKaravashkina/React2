import React from "react";
import "./Header.scss"
import phone from "./img/header__phone.png"
import logopng from "../Header/img/logo.png";
import Phone from "./Phone";


export default class Header extends React.Component {
    render () {
        return (
            <header className="header">
                <div className="logo">
                    <div><img src={logopng} alt="Логотип компании 'Единый Центр Записи'" className="logo__image" /></div>
                    <div className="logo__text">Единый<br />Центр Записи</div>
                </div>
                <div className="header__container container">
                    <div className="header__right">
                        <a href="tel:803005000" className="header__phone">
                            <img src={phone} alt="Трубка телефона" className="header__phone_icon"/>
                            <span className="header__phone_number"><Phone Phone={803005000} Plus={1}/></span>
                        </a>
                        <nav className="header__nav">
                            <ul className="header__menu">
                                <li><a className="header__menu_item header__menu_item--active" href="#">Главная</a></li>
                                <li><a className="header__menu_item header__menu_item--arrow" href="#">Услуги</a>
                                    <ul className="header__sub_menu">
                                        <li>МРТ</li>
                                        <li>КТ</li>
                                        <li>УЗИ</li>
                                    </ul>
                                </li>
                                <li><a className="header__menu_item" href="#">Клиники и кабинеты</a></li>
                                <li><a className="header__menu_item" href="#">О нас</a></li>
                                <li><a className="header__menu_item" href="#">Статьи</a></li>
                                <li><a className="header__menu_item" href="#">FAQ</a></li>
                                <li><a className="header__menu_item" href="#">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );

    }
}