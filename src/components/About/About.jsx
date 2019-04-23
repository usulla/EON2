import React, { Component } from "react";
import style from "./style.scss";
import logo_eon from "../../images/About/eon_logo.png";
import bottle1 from "../../images/About/bottle1.png";
import bottle2 from "../../images/About/bottle2.png";
import bottle3 from "../../images/About/bottle3.png";
import bottle4 from "../../images/About/bottle4.png";
import bottle5 from "../../images/About/bottle5.png";

class About extends Component {
    render() {
        return (
            <div className="About">
                <img className="logo_eon" src={logo_eon} alt="EON" />
                <div className="description">
                    <p>
                        Каждый день мир предлагает тебе огромное количество
                        возможностей, но недостаток времени и непредвиденные
                        обстоятельства не позволяют реализовать свой потенциал
                        на 100%. Что дает тебе E-ON ENERGY DRINK? Силы и
                        энергию, чтобы превратить каждую возможность в твою
                        личную победу! Одерживая больше побед, ты окажешься
                        впереди всех! Всегда впереди! Всегда на E-ON впереди!
                    </p>
                    <p>
                        E-ON ENERGY DRINK — энергетический напиток с яркими
                        вкусами и эффективной тонизирующей формулой на основе
                        натуральных фруктовых соков. E-ON ENERGY DRINK не
                        содержит искусственных красителей и консервантов.
                    </p>
                </div>
                <div className="tastes">
                    <div className="taste taste1">
                        <div className="taste_description">
                            <div className="title">KIWI BLAST</div>
                            <div className="text">
                                Харизматичный микс киви и
                                ананаса — это взрывное сочетание тропической
                                энергии. KIWI BLAST — это напиток для тех, кто
                                ценит высокое качество и пробовал наслаждение на
                                вкус.
                            </div>
                        </div>
                        <div className="bottle_image">
                            <img src={bottle1} alt="EON" />
                        </div>
                    </div>
                    <div className="taste taste2">
                        <div className="taste_description">
                            <div className="title">GINGER CRUSH</div>
                            <div className="text">
                                Взрывное сочетание сладкого граната, кислой
                                клюквы и пряного имбиря — заряжает отличным
                                настроением и стимулирует внутренние силы.
                                GINGER CRUSH создан для тех, кто чувствует пульс
                                жизни, замечая все детали.
                            </div>
                        </div>
                        <div className="bottle_image">
                            <img src={bottle2} alt="EON" />
                        </div>
                    </div>

                    <div className="taste taste3">
                        <div className="taste_description">
                            <div className="title">BLACK POWER</div>
                            <div className="text">
                                Оригинальный бодрящий вкус энергетического
                                напитка, содержащий в себе всеми любимые
                                классические фруктово- карамельные ноты гуараны.
                                Заряжает энергией для активной жизни и обостряет
                                чувство настоящего момента.
                            </div>
                        </div>
                        <div className="bottle_image">
                            <img src={bottle3} alt="EON" />
                        </div>
                    </div>

                    <div className="taste taste4">
                        <div className="taste_description">
                            <div className="title">CITRUS PUNCH</div>
                            <div className="text">
                                Классический насыщенный вкус апельсина — приятно
                                бодрит и тонизирует волю к успеху. CITRUS PUNCH
                                — это выбор тех, кто привык действовать и все
                                успевать.
                            </div>
                        </div>
                        <div className="bottle_image">
                            <img src={bottle4} alt="EON" />
                        </div>
                    </div>

                    <div className="taste taste5">
                        <div className="taste_description">
                            <div className="title">ALMOND RUSH</div>
                            <div className="text">
                                Неординарный микс свежести абрикоса и ароматной
                                миндальной горчинки — прекрасно тонизирует и
                                освежает. ALMOND RUSH — это напиток для тех, кто
                                стремится в любых обстоятельствах сохранять
                                активность и свежий взгляд на жизнь.
                            </div>
                        </div>
                        <div className="bottle_image">
                            <img src={bottle5} alt="EON" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
