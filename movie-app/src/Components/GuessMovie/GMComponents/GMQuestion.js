import React from 'react';
import { ClipLoader } from 'react-spinners';

import GMContent from './GMContent';

class GMQuestion extends React.Component {
    _mounted = false;

    constructor(props) {
        super(props);
        this.getQuestion = this.getQuestion.bind(this);
        this.removeQuestion = this.removeQuestion.bind(this);
        this.state = { questionAvailable: false, currentQueue: [] };
    }

    // getting a question
    async getQuestion() {
        if (this.props.queue.length === 0) {
            this.setState({ questionAvailable: false});
        }

        await fetch('http://localhost:5000/getMovieAPI').then(res => res.json()).then(data => {
            if (this._mounted === true) {
                var indexCheck = this.state.currentQueue.indexOf(data.actorID);

                if (indexCheck === -1) {
                    var newQueue = this.state.currentQueue;
                    newQueue.push([data.actor1ID, data.actor2ID, data.movieID]); // actor1 ID, actor2 ID, movieID
                    this.setState({ currentQueue: newQueue} );
                    this.props.enqueue(data);
                    this.setState({ questionAvailable: true });
                } else {
                    console.log("data already exists");
                    this.getQuestion();
                }
            }
        }).catch((error) => this.getQuestion());
    }

    removeQuestion() {
        if (this.props.queue.length === 1) {
            this.setState({ questionAvailable: false});
        }
        this.props.dequeue();
    }

    componentDidMount() { // onload of the component
        this._mounted = true;
        if (this.props.queue.length === 0) {
            this.getQuestion();
            this.getQuestion();
            this.getQuestion();
        } else {
            this.setState({ questionAvailable: true});
        }
        return () => this.setState({_mounted: false});
    }

    componentWillUnmount() {
        this._mounted = false;
        console.log(this._mounted);
        console.log("changed page to home");
    }

    render() {
        return(
            <>
                {this.state.questionAvailable ? <GMContent 
                                                    question={this.props.queue[0]} 
                                                    gameOver={this.props.gameOver} 
                                                    increaseScore={this.props.increaseScore}
                                                    resetScore={this.props.resetScore}
                                                    removeQuestion={this.removeQuestion} 
                                                    newQuestion={this.getQuestion}
                                                    score={this.props.score} /> 
                                                    : 
                                                    <div class="fade-in">
                                                        <div class="spinner-border text-light" role="status">
                                                        </div>
                                                    </div>
                                                    }
            </>
        )
    }
}

export default GMQuestion;