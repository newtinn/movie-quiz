import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <h1>Home</h1>
                <br/><a href="/guessactor"><input type="submit" value="Guess Actor" /></a>
            </>
        );
    }
}

export default Home;