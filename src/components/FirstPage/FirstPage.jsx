import React, { Component } from "react";
import logo_pesni from "../../images/FirstPage/pesni_logo.png";
import logo_eon from "../../images/FirstPage/eon-logo.png";
import bottles_eon from "../../images/FirstPage/bottles_eon.png";
import age_limit from "../../images/FirstPage/age_limit2.png";
import style from "./style.scss";

class FirstPage extends Component {
    render() {
        var simulateClick = function(elem) {
            // Create our event (with options)
            var evt = new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
                view: window
            });
            // If cancelled, don't dispatch our event
            var canceled = !elem.dispatchEvent(evt);
        };

        var scrollCount = 0;
        const testBlock = document.querySelector(".ContestRules");

        return (
            <div className="FirstPage">
                <a
                    data-scroll
                    href="#id_for_scroll"
                    className="btn_for_scroll"
                />
                <div className="FirstPage__center-block">
                    <div className="logo">
                        <img src={logo_pesni} />
                        <div className="age_limit">
                            <img src={age_limit} />
                        </div>
                    </div>

                    <div className="FirstPage__toptext">
                        <div className="titles">
                            <div className="only_desktop">
                                <div className="title1">
                                    E-ON дарит тебе
                                    <br />
                                    <span>дополнительный голос</span>
                                    <br />
                                    за любимого участника!
                                </div>
                            </div>
                            <div className="only_mobile">
                            <div className="title1">
                                    E-ON дарит тебе
                                    <br />
                                    <span>дополнительный <br /> голос&nbsp;</span>
                                   
                                    за любимого участника!
                                </div>
                            </div>
                            <a className="title2" href='http://tnt-club.com/' target="_blank">
                                <span className="title2__text">Получи дополнительный голос!</span><span className="title2__plus">+1</span>
                            </a>
                        </div>
                    </div>
                   
                    <a data-scroll href="#ContestRules" className="scroll-down">
                        <i className="fas fa-arrow-circle-down"></i>

                    </a>
                </div>
                 <div className="bottles_line" />
            </div>
        );
    }
}

export default FirstPage;
