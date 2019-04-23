import React, { Component } from "react";
import icon1 from "../../images/ContestRules/icon1.png";
import icon2 from "../../images/ContestRules/icon2.png";
import icon3 from "../../images/ContestRules/icon3.png";
import icon4 from "../../images/ContestRules/icon4.png";
import plus12 from "../../images/ContestRules/12plus.png";
import style from "./style.scss";

class ContestRules extends Component {
    render() {
        return (
            <div className="ContestRules" id="ContestRules">
                <div className="titles">
                    <div className="title_small">
                        Каждую неделю ты можешь<br/><span>получить дополнительный голос</span><br/> и
                        отдать его за любимого участника шоу.
                    </div>
                    <div className="title1">
                        Что для этого <span>нужно сделать:</span>
                    </div>
                </div>
                <div className="icons">
                    <div className="icon icon1">
                        <div className="description">
                            <div className="number">01.</div>
                            <div classNme="text">
                                <span>Купи любой</span>
                                <br />
                                энергетический
                                <br /> напиток E-ON
                            </div>
                        </div>
                    </div>
                    <div className="icon icon2">
                        <div className="description">
                            <div className="number">02.</div>
                            <div classNme="text">
                                <span>Зайди в приложение</span>
                                <br />
                                ТНТ-CLUB
                                <img src={plus12} alt='12 plus'/>
                            </div>
                        </div>
                    </div>
                    <div className="icon icon3">
                        <div className="description">
                            <div className="number">03.</div>
                            <div classNme="text">
                                <span>
                                    Отсканируй штрих-код
                                    <br />
                                    на упаковке с помощью
                                </span>
                                <br />
                                приложения ТНТ-CLUB
                            </div>
                        </div>
                    </div>
                    <div className="icon icon4">
                        <div className="bg" />
                        <div className="description">
                            <div className="number">04.</div>
                            <div classNme="text">
                                <span>Голосуй за любимого</span>
                                <br />
                                участника шоу «ПЕСНИ»
                            </div>
                        </div>
                    </div>
                </div>
                <div className='license'>
                *Энергетический напиток. Киви бласт. Джинжер краш. Блэк пауэр. Цитрус панч. Алмонд раш. Срок проведения акции с 4 мая 2019 по 28 мая 2019. Подробности об организаторе акции, о правилах ее проведения, результатах мероприятия и сроках уточняйте на сайте tnt-online.ru и в ТНТ-CLUB.
                </div>
            </div>
        );
    }
}

export default ContestRules;
