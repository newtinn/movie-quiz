import React from 'react';

import SDQuestionAnswered from './SDQuestionAnswered';
import SDQuestionDetails from './SDQuestionDetails';

class SDContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { answered: false, correct: null };
        this.checkAnswer = this.checkAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    checkAnswer() {
        var userAnswer = document.getElementById("userAnswer").value;
        userAnswer = userAnswer.trim();
        if (userAnswer.toLowerCase() === this.props.question.answer.toLowerCase()) {
            this.props.increaseScore();
            this.setState({correct: true});
        } else {
            this.setState({correct: false});
        }
        this.setState({answered: true});
    }

    nextQuestion() {
        this.setState({ answered: false, correct: null});
    }

    render() {
        return(
            <>
               
                {this.state.answered ? 
                    <SDQuestionAnswered 
                        correct={this.state.correct} 
                        answer={this.props.question.answer} 
                        newQuestion={this.props.newQuestion} 
                        removeQuestion={this.props.removeQuestion}
                        resetScore={this.props.resetScore}
                        nextQuestion={this.nextQuestion}
                        score={this.props.score}
                        cover={this.props.question.answerCover}
                        answered={this.state.answered} /> : 
                    <SDQuestionDetails question={this.props.question} checkAnswer={this.checkAnswer} /> 
                }
            </>
        )
    }
}

export default SDContent;