import React from 'react';

import GAQuestionAnswered from './GAQuestionAnswered';
import GAQuestionDetails from './GAQuestionDetails';

class GAContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { answered: false, correct: null };
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    checkAnswer() {
        var userAnswer = document.getElementById("userAnswer").value;
        if (userAnswer === this.props.question.actor) {
            this.setState({correct: true});
        } else {
            this.setState({correct: false});
        }
        this.setState({answered: true});
    }

    render() {
        return(
            <>
                {this.state.answered ? <GAQuestionAnswered correct={this.state.correct} /> : <GAQuestionDetails question={this.props.question} checkAnswer={this.checkAnswer} /> }
            </>
        )
    }
}

export default GAContent;
