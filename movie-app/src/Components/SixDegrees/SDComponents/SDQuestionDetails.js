import React from 'react';

import { HideUntilLoaded } from 'react-animation'

class SDQuestionDetails extends React.Component {
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
                <HideUntilLoaded animationIn="fadeInUp" durationIn="10000" imageToLoad={this.props.question.cover1 && this.props.question.cover2}>
                    <div id="content">
                        <img src={this.props.question.cover1} alt='' style={{maxHeight: "400px", padding:"5px"}} class="img-fluid" />
                        <img src={this.props.question.cover2} alt='' style={{maxHeight: "400px", padding: "5px"}} class="img-fluid" />
                        <h3 style={{paddingTop: "15px"}}>{this.props.question.question}</h3>
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

export default SDQuestionDetails;