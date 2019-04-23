import React, { Component } from "react";
import style from "./style.scss";
import SocButton from "../../SocButtons/SocButtons.jsx";

class TestResult extends Component {
    render() {
        return (
            <div className="TestResult">
                <div className={`battery_btn btn${this.props.testpoints}`} />
                <div className="result_content">
                    <div className="result_title">
                        {resultText[Number(this.props.testpoints) - 1].title1}
                        <span>
                            &nbsp;
                            {
                                resultText[Number(this.props.testpoints) - 1]
                                    .title2
                            }
                        </span>
                    </div>
                    <div className="result_text">
                        <p>
                            {resultText[Number(this.props.testpoints) - 1].text}
                        </p>
                    </div>
                    <div className="result_socbtns">
                        <SocButton
                            link={`https://vk.com/share.php?image=https%3A%2F%2Fe-on.tnt-online.ru%2Fimages%2Fvk_share2%2F${
                                this.props.testpoints
                            }.jpg&url=https%3A%2F%2Fe-on.tnt-online.ru%2F%3FtestVK%3D${
                                this.props.testpoints
                            }&title=%D0%9F%D1%80%D0%BE%D0%B9%D0%B4%D0%B8+%D1%82%D0%B5%D1%81%D1%82+%D0%B8+%D1%83%D0%B7%D0%BD%D0%B0%D0%B9%2C+%D0%BA%D0%B0%D0%BA+%D0%B4%D0%B0%D0%BB%D0%B5%D0%BA%D0%BE+%D1%82%D1%8B+%D0%BF%D1%80%D0%BE%D0%B9%D0%B4%D0%B5%D1%88%D1%8C+%D0%B2+%D1%88%D0%BE%D1%83+%C2%AB%D0%9F%D0%95%D0%A1%D0%9D%D0%98%C2%BB%21`}
                            text={"Поделиться"}
                            classlist={"soc-vk"}
                            datasoc={"vk"}
                            socicon={"fa fa-vk"}
                        />
                        <SocButton
                            link={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fe-on.tnt-online.ru%2F%3FtestFB%3D${
                                this.props.testpoints
                            }&src=sdkpreparse`}
                            text={"Поделиться"}
                            classlist={"soc-fb"}
                            datasoc={"fb"}
                            socicon={"fa fa-facebook"}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const resultText = [
    {
        title1: "Ты эксперт",
        title2: "шоу «ПЕСНИ»!",
        text:
            "Ты знаешь наизусть все треки любимых исполнителей и с удовольствием их поешь, но только у себя дома и пока никто не видит. Возможно, ты больше любишь наблюдать со стороны, но может быть в тебе скрыт большой талант и пришло время его проявить? Рискни, выплесни свою творческую энергию и сделай то, о чем давно мечтаешь, будь всегда на E-ON впереди!"
    },
    {
        title1: "Ты звезда",
        title2: "кастингов!",
        text:
            "Твое выступление на кастингах еще долго будут обсуждать в социальных сетях, а продюсеры точно тебя не забудут. Несмотря на то, что тебе не удалось попасть в команду, ты все равно получаешь свою долю признания и популярности. Энергии в тебе много, а сдаваться не в твоих правилах, поэтому соберись, зарядись энергией E-ON ENERGY DRINK и в следующем году докажи, что ты победитель!"
    },
    {
        title1: "Ты один из",
        title2: "лучших!",
        text:
            "Тебе удается успешно пройти кастинги и своим обаянием влюбить в себя продюсеров. Многие соперники остались далеко позади, а в тебе еще достаточно энергии, чтобы в следующем году зажечь еще больше. Зарядись энергией E-ON ENERGY DRINK и докажи, что достоин стать победителем этого шоу!"
    },
    {
        title1: "Ты финалист",
        title2: "шоу «ПЕСНИ»!",
        text:
            "Тебе не хватило шага до победы, но быть финалистом и стоять на сцене среди лучших исполнителей шоу – это круто! Ты дошел до финала шоу и это повод гордиться собой и не останавливаться на достигнутом, может попробовать прийти на кастинг вновь и стать Победителем? Зарядись энергией E-ON ENERGY DRINK и действуй!"
    },
    {
        title1: "Ты победитель",
        title2: "шоу «ПЕСНИ»!",
        text:
            "Ты всегда на E-ON впереди! Твоя энергия и харизма сносят первые ряды в зрительном зале, а уровень твоего профессионализма не вызывает вопросов. В тебе столько уверенности, что ты легко можешь стать победителем шоу «ПЕСНИ» и мега-популярным артистом!"
    }
];

export default TestResult;
