import React from 'react';

class GAQuestionAnswered extends React.Component {
    constructor(props) {
        super(props);
        this.nextRound = this.nextRound.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    nextRound() {
        this.props.removeQuestion();
        this.props.newQuestion();
        this.props.nextQuestion();
    }

    resetGame() {
        this.props.resetScore();
        this.props.removeQuestion();
        this.props.removeQuestion();
        this.props.removeQuestion();
        this.props.newQuestion();
        this.props.newQuestion();
        this.props.newQuestion();
    }

    render() {
        if (this.props.correct === true) {
            return(
                <>
                    Correct!
                    <input type="submit" value="Next Question" class="btn btn-primary" onClick={this.nextRound} />
                </>
            );
        }
        if (this.props.correct === false) {
            return(
                <>
                    Incorrect! The answer was {this.props.answer}.
                    <input type="submit" value="Reset" class="btn btn-primary" onClick={this.resetGame} />
                </>
            );
        }
    }
}

export default GAQuestionAnswered;