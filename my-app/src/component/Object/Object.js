import React from "react";
import "./Object.scss"

import object1png from "./img/object1.png";
import object2png from "./img/object2.png";
import object3png from "./img/object3.png";
import object4png from "./img/object4.png";


export default class Header extends React.Component {
    render() {
        return (
            <div className="object">
                <div className="object_container container">
                    <div className="object1">
                        <img className="object_img" src={object1png} alt="стетоскоп"/>
                        <p className="object_text">
                            <strong>Best Treatment</strong><br/><br/>
                            Sed ut perspiciatis unde omnis iste natus<br/>
                            error sit voluptatem accusantium dolore-<br/>
                            emque laudantium.<br/></p></div>

                    <div className="object2">
                        <img className="object_img" src={object2png} alt="телефон с плюсом"/>
                            <p className="object_text">
                                <strong>Emergency Help</strong><br/><br/>
                                Sed ut perspiciatis unde omnis iste natus<br/>
                                error sit voluptatem accusantium dolor-<br/>
                                emque laudantium.<br/></p></div>

                    <div className="object3">
                        <img className="object_img" src={object3png} alt="медсестра"/>
                            <p className="object_text">
                                <strong>Medical Staff</strong><br/><br/>
                                Sed ut perspiciatis unde omnis iste natus<br/>
                                error sit voluptatem accusantium dolor-<br/>
                                emque laudantium.<br/></p>
                    </div>

                    <div className="object4">
                        <img className="object_img" src={object4png} alt="машинка"/>
                            <p className="object_text">
                                <strong>Qualified Doctors</strong><br/><br/>
                                Sed ut perspiciatis unde omnis iste natus<br/>
                                error sit voluptatem accusantium dolor-<br/>
                                emque laudantium.<br/></p>
                    </div>
                </div>
            </div>
    );
    }
    }
