import React, { Component } from "react";
import style from "./style.scss";
import TestStart from "./TestStart/TestStart.jsx";
import Questions from "./Questions/Questions.jsx";
import TestResult from "./TestResult/TestResult.jsx";

class Test extends Component {
    constructor() {
        super();
        this.state = {
            showTestStart: true,
            showQuestions: false,
            showTestResult: false,
            testPoints: 0
        };
    }
    updateShowTest = (showstart, showquestions, showresult) => {
        this.setState({
            showTestStart: showstart,
            showQuestions: showquestions,
            showTestResult: showresult
        });
    };
    testPoints = points => {
        this.setState({ testPoints: points });
    };

    render() {
        const { showTestStart, showQuestions, showTestResult } = this.state;
        return (
            <div className="Test" id="test">
                {showTestStart ? (
                    <TestStart updatetest={this.updateShowTest} />
                ) : showQuestions ? (
                    <Questions
                        updatetest={this.updateShowTest}
                        testpoints={this.testPoints}
                    />
                ) : (
                    <TestResult testpoints={this.state.testPoints} />
                )}
            </div>
        );
    }
}

export default Test;
