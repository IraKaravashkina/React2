import React from "react";
import "./Banner.scss"


export default class Banner extends React.Component {
    render() {
        return(
            <section className="banner">
            <div className="banner__photo"><p className="banner__text">
                Всю необходимую информацию о том, как и в каком центре<br />
                сделать МРТ, КТ и рентген исследованиях, сравнить интересующие<br />
                Вас клиники, цены на диагностику и порядок прохождения<br />
                процедур. а также записаться на исследование можно по<br />
                телефону 8 (812) 385-77-56<br /></p>
                <div className="banner__callback">Оставьте свой номер, а мы<br />Вам перезвоним</div>
                <form className="banner__form"><input type="tel" name="tel" placeholder="+380" />
                    <wbr />
                        <input type="submit" value="Отправить" /></form>
            </div>
        </section>
        );
        }
        }
