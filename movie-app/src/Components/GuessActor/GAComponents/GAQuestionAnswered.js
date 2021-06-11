import React from 'react';

class GAQuestionAnswered extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.correct === true) {
            return(
                <>
                    Correct!
                </>
            );
        }
        if (this.props.correct === false) {
            return(
                <>
                    Incorrect!
                </>
            );
        }
    }
}

export default GAQuestionAnswered;