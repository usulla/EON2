import React, { Component } from "react";
import style from "./style.scss";
import dataQuestions from "./Questions.json";
import "nodelist-foreach-polyfill";

class Questions extends Component {
    constructor() {
        super();
        this.state = {
            currentQuestion: 0,
            questionsLength: dataQuestions.questions.length,
            answers: [
                [2, -2, 0],
                [-2, 2, 0],
                [-2, 0, 2],
                [-2, 2, 0],
                [0, 2, -2]
            ],
            userPoints: 0
        };
    }

    nextQuestion = e => {
        // If not last question
        if (this.state.currentQuestion !== this.state.questionsLength) {
            // Mark the index of the user's response to the question
            const usersResponse = e.currentTarget.dataset.id;
            const currentPoints = this.state.answers[
                this.state.currentQuestion
            ][usersResponse];

            // Add classes to answers
            document.querySelectorAll(".answer").forEach((item, index) => {
                const itemPoint = this.state.answers[
                    this.state.currentQuestion
                ][index];
                if (itemPoint == 2) {
                    item.classList.add("true");
                } else if (itemPoint == 0) {
                    item.classList.add("null");
                } else {
                    item.classList.add("error");
                }
            });
            // Increase currentQuestion or equate to zero if this is the last question

            setTimeout(
                function() {
                    this.setState(prevState => {
                        return {
                            currentQuestion:
                                this.state.currentQuestion !==
                                this.state.questionsLength - 1
                                    ? prevState.currentQuestion + 1
                                    : 0
                        };
                    });
                    document.querySelectorAll(".answer").forEach(item => {
                        item.classList.remove("null");
                        item.classList.remove("error");
                        item.classList.remove("true");
                    });
                    // Mark the current question in the panel with the question number
                    if (
                        document.querySelectorAll(".panels_num_quesion__item")[
                            this.state.currentQuestion - 1
                        ]
                    ) {
                        document
                            .querySelectorAll(".panels_num_quesion__item")
                            [this.state.currentQuestion - 1].classList.add(
                                "current"
                            );
                    } else {
                        if (this.state.userPoints == 0) {
                            this.props.testpoints(1);
                        } else if (this.state.userPoints == 2) {
                            this.props.testpoints(2);
                        } else if (
                            this.state.userPoints == 4 ||
                            this.state.userPoints == 6
                        ) {
                            this.props.testpoints(3);
                        } else if (this.state.userPoints == 8) {
                            this.props.testpoints(4);
                        } else {
                            this.props.testpoints(5);
                        }
                        this.props.updatetest(false, false, true);

                        document
                            .querySelectorAll(".panels_num_quesion__item")
                            .forEach(item => {
                                item.classList.remove("current");
                            });
                    }
                }.bind(this),
                1500
            );
            // Summarize the points of the user
            this.setState({
                userPoints: this.state.userPoints + Number(currentPoints)
            });
            if (currentPoints == -2 && this.state.userPoints == 0) {
                this.setState({ userPoints: 0 });
            }
        }
    };

    render() {
        return (
            <div className="Questions">
                <div
                    className={`battery_btn btn${this.state.currentQuestion +
                        1}`}
                />
                <div className="question_title">
                    {
                        dataQuestions.questions[this.state.currentQuestion]
                            .question
                    }
                </div>

                <div className="answers">
                    {dataQuestions.questions[
                        this.state.currentQuestion
                    ].answers.map((item, index) => {
                        return (
                            <div
                                className={`answer overanswer question${this
                                    .state.currentQuestion + 1}`}
                                key={index}
                                data-id={index}
                                onClick={this.nextQuestion}
                            >
                                <div className="answer_content">
                                    <div className="answer_num">
                                        {index + 1}.
                                    </div>
                                    <div className="answer_text">{item}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div
                    className={`panels_num_quesion q${this.state
                        .currentQuestion + 1}`}
                >
                    <div className="panels_num_quesion__item">
                        <span className="num_answer">вопрос 1</span>
                    </div>
                    <div className="panels_num_quesion__item">
                        <span className="num_answer">вопрос 2</span>
                    </div>
                    <div className="panels_num_quesion__item">
                        <span className="num_answer">вопрос 3</span>
                    </div>
                    <div className="panels_num_quesion__item">
                        <span className="num_answer">вопрос 4</span>
                        <span className="num_answer">вопрос 5</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Questions;
