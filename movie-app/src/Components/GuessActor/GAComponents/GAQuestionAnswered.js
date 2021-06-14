import React from 'react';

import { AnimateOnChange } from 'react-animation';

class GAQuestionAnswered extends React.Component {
    constructor(props) {
        super(props);
        this.nextRound = this.nextRound.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.contentFadeOut = this.contentFadeOut.bind(this);
    }

    contentFadeOut() {
        document.getElementById("content").className = "fade-out";
        if (this.props.correct === true) {
            this.nextRound();
        }
        if (this.props.correct === false) {
            this.resetGame();
        }
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
                    <div class="fade-in" id="content">
                        <h2>Correct!</h2>
                        <br/><input type="submit" value="Next Question" class="btn btn-primary" onClick={this.contentFadeOut} />
                    </div>
                </>
            );
        }
        if (this.props.correct === false) {
            return(
                <>
                    <div class="fade-in" id="content">
                        <h2>Incorrect! The answer was {this.props.answer}.</h2>
                        <br/><input type="submit" value="Reset" class="btn btn-primary" onClick={this.contentFadeOut} />
                    </div>
                </>
            );
        }
    }
}

export default GAQuestionAnswered;