import React from 'react';

class GAQuestionDetails extends React.Component {
    render() {
        return(
            <>
                <img src={this.props.question.cover} alt='' style={{maxHeight: "300px"}} class="img-fluid" />
                <h1>Who is this {this.props.question.sex}?</h1>
                <input type="text" id="userAnswer" />
                <input type="submit" value="submit" onClick={this.props.checkAnswer} />
            </>
        );
    }
}

export default GAQuestionDetails;