import React from 'react';

import GAQuestion from './GAComponents/GAQuestion';

class GuessActor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { queue: [] , queueMaxSize: 3, question: null, score: 0, gameOver: false };
        this.enqueue = this.enqueue.bind(this);
        this.dequeue = this.dequeue.bind(this);
        this.checkFull = this.checkFull.bind(this);
        this.checkEmpty = this.checkEmpty.bind(this);
        this.increaseScore = this.increaseScore.bind(this);
        this.resetScore = this.resetScore.bind(this);
    }

    // queue functions
    enqueue(questionToAdd) {
        if (this.checkFull() === false) {
            var currentQueue = this.state.queue;
            currentQueue.push(questionToAdd);
            this.setState({ queue: currentQueue });
            console.log(this.state.queue);
        } else {
            console.log("queue is full!");
        }
    }
    dequeue() {
        if (this.checkEmpty() === false) {
            var currentQueue = this.state.queue;
            currentQueue.shift();
            this.setState({ queue: currentQueue });
            console.log(this.state.queue);
        }
    }
    checkEmpty() {
        if (this.state.queue.length === 0) {
            return true;
        } else {
            return false;
        }
    }
    checkFull() {
        if (this.state.queue.length === this.state.queueMaxSize) {
            return true;
        } else {
            return false;
        }
    }

    increaseScore() {
        var currentScore = this.state.score;
        currentScore += 1;
        this.setState({ score: currentScore});
    }

    resetScore() {
        var currentScore = this.state.score;
        currentScore = 0;
        this.setState({ score: currentScore});
    }

    render() {
        return(
            <div className="fade-in">
                <h1>Easy mode</h1>
                <p>Guess the actor/actress</p>
                <GAQuestion 
                    enqueue={this.enqueue} 
                    dequeue={this.dequeue} 
                    checkEmpty={this.checkEmpty} 
                    checkFull={this.checkFull} 
                    queue={this.state.queue} 
                    gameOver={this.state.gameOver} 
                    increaseScore={this.increaseScore}
                    resetScore={this.resetScore}
                    score={this.state.score} 
                    controller={this.controller} />
            </div>
        );
    }
}

export default GuessActor;