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
        this.props.nextQuestion();
        this.props.newQuestion();
        this.props.newQuestion();
        this.props.newQuestion();
        /*this.props.removeQuestion();
        this.props.removeQuestion();
        this.props.removeQuestion();
        this.props.newQuestion();
        this.props.newQuestion();
        this.props.newQuestion();*/
    }

    render() {
        if (this.props.correct === true) {
            return(
                <>
                    <div class="fade-in" id="content">
                        <img src={this.props.cover} alt='' style={{maxHeight: "400px", paddingBottom: "10px"}} class="img-fluid" />
                        <h2>Correct!</h2>
                        <h2 style={{color: "#27FB6B"}}>Score: {this.props.score}</h2>
                        <p>The answer was: {this.props.answer}.<br/>Click the button below to go to the next question. </p>
                        <input type="submit" value="Next Question" class="btn btn-primary" onClick={this.contentFadeOut} />
                    </div>
                </>
            );
        }
        if (this.props.correct === false) {
            return(
                <>
                    <div class="fade-in" id="content">
                        <img src={this.props.cover} alt='' style={{maxHeight: "400px", paddingBottom: "10px"}} class="img-fluid" />
                        <h2>Incorrect!<br/>The answer was {this.props.answer}.</h2>
                        <h2 style={{color: "#FF5A5F"}}>Score: {this.props.score}</h2>
                        <p>To play again press the button below.</p>
                        <input type="submit" value="Restart" class="btn btn-danger" onClick={this.contentFadeOut} />
                    </div>
                </>
            );
        }
    }
}

export default GAQuestionAnswered;