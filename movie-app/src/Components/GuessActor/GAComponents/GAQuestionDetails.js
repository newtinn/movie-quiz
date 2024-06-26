import React from 'react';

import { HideUntilLoaded } from 'react-animation'

class GAQuestionDetails extends React.Component {
    constructor(props) {
        super(props);
        this.fadeContentOut = this.fadeContentOut.bind(this);
    }

    fadeContentOut() {
        document.getElementById("content").className = "fade-out";
    }

    render() {
        return(
            <>
                <HideUntilLoaded animationIn="fadeInUp" durationIn="10000" imageToLoad={this.props.question.cover}>
                    <div id="content">
                        <img src={this.props.question.cover} alt='' style={{maxHeight: "400px"}} class="img-fluid" />
                        <h1 style={{paddingTop: "15px"}}>Who is this {this.props.question.sex}?</h1>
                        <input type="text" id="userAnswer" className="text-line" placeholder="Type your answer here..." />
                        <br/><br/><input type="submit" value="Submit" className="btn btn-primary" onClick={this.fadeContentOut && this.props.checkAnswer} />
                        <br/>
                        <br/>
                        <br/>
                        <p style={{paddingBottom: "150px"}}></p>
                    </div>
                </HideUntilLoaded>
            </>
        );
    }
}

export default GAQuestionDetails;