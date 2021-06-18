import React from 'react';

import banner from './movie.jpg';

class Home extends React.Component {
    render() {
        return(
            <>
                <div className="fade-in">
                    <h1 style={{fontSize: "72px"}}>Home</h1>
                    <img src={banner} style={{maxHeight: "300px", padding: "15px"}} className="img-fluid" alt='' />
                    <h3>Movie App</h3>
                    <p>
                        A movie quiz app that uses data from IMDb to create questions.
                        <br/>
                        Want to play?
                        <br/>
                        There are three available modes you can play:
                        <br/><br/>
                        <table style={{marginLeft: "auto", marginRight: "auto"}}>
                            <tr>
                                <th><a href="/guessactor"><input value="Easy" type="submit" className="btn btn-info"/></a></th>
                                <th><a href="/guessmovie"><input value="Medium" type="submit" className="btn btn-info"/></a></th>
                                <th><input value="Hard" type="submit" className="btn btn-info"/></th>
                            </tr>
                        </table>
                    </p>
                </div>
            </>
        );
    }
}

export default Home;