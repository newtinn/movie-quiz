import React from 'react';

import { HideUntilLoaded } from 'react-animation'

class GMQuestionDetails extends React.Component {
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
                <HideUntilLoaded animationIn="fadeInUp" durationIn="10000" imageToLoad={this.props.question.actor1Cover && this.props.question.actor2Cover} >
                    <div id="content">
                        <img src={this.props.question.actor1Cover} alt='' style={{maxHeight: "400px", padding:"5px"}} class="img-fluid" />
                        <img src={this.props.question.actor2Cover} alt='' style={{maxHeight: "400px", padding: "5px"}} class="img-fluid" />
                        <h3 style={{paddingTop: "15px"}}>What {this.props.question.genre} movie, released in {this.props.question.year},<br/>has both {this.props.question.actor1} and {this.props.question.actor2} been in?</h3>
                        <input type="text" id="userAnswer" className="text-line" placeholder="Type your answer here..." />
                        <br/><br/><input type="submit" value="Submit" className="btn btn-primary" onClick={this.fadeContentOut && this.props.checkAnswer} />
                        <br/>
                        <br/>
                        <br/>
                        <p></p>
                    </div>
                </HideUntilLoaded>
            </>
        );
    }
}

export default GMQuestionDetails;