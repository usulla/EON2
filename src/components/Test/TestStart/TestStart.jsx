import React, { Component } from "react";
import style from "./style.scss";

class TestStart extends Component {
    render() {
        return (
            <div className="TestStart">
                <div className="title">
                    <span>
                        Пройди тест и узнай,
                        <br />
                    </span>
                    как далеко ты пройдешь
                    <br />в шоу «ПЕСНИ»
                </div>
                <div
                    className="battery_btn"
                    onClick={() => {
                        this.props.updatetest(false, true, false);
                    }}
                >
                    Начать тест
                </div>
            </div>
        );
    }
}

export default TestStart;
