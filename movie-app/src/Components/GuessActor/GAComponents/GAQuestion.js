import React from 'react';

import GAContent from './GAContent';

class GAQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.getQuestion = this.getQuestion.bind(this);
        this.removeQuestion = this.removeQuestion.bind(this);
        this.state = { questionAvailable: false };
    }

    // getting a question
    getQuestion() {
        fetch('http://localhost:5000/getActorAPI').then(res => res.json()).then(data => {
            this.props.enqueue(data);
            this.setState({ questionAvailable: true });
        }).catch((error) => this.getQuestion());
    }

    removeQuestion() {
        if (this.props.queue.length === 1) {
            this.setState({ questionAvailable: false});
        }
        this.props.dequeue();
    }

    componentDidMount() { // onload of the component
        this.getQuestion();
        this.getQuestion();
        this.getQuestion();
    }

    render() {
        return(
            <>
                <p>Score: {this.props.score}</p>
                <button onClick={this.getQuestion}>Add</button>
                <button onClick={this.removeQuestion}>Remove</button>
                <br/>
                {this.state.questionAvailable ? <GAContent question={this.props.queue[0]} gameOver={this.props.gameOver} score={this.props.score} /> : <p>Loading...</p>}
            </>
        )
    }
}

export default GAQuestion;