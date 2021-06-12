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
                <HideUntilLoaded animationIn="bounceIn" Spinner={()=> 
                                                            
                                                                <div class="spinner-border text-dark" role="status">
                                                                </div>
                                                            
                                                                }>
                    <div id="content">
                        <img src={this.props.question.cover} alt='' style={{maxHeight: "300px"}} class="img-fluid" />
                        <h1>Who is this {this.props.question.sex}?</h1>
                        <input type="text" id="userAnswer" />
                        <input type="submit" value="submit" onClick={this.fadeContentOut && this.props.checkAnswer} />
                    </div>
                </HideUntilLoaded>
            </>
        );
    }
}

export default GAQuestionDetails;