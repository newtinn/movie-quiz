import React from 'react';

import banner from './movie.jpg';

class Home extends React.Component {
    render() {
        return(
            <>
                <div className="fade-in">
                    <h1 style={{fontSize: "72px"}}>Home</h1>
                    <img src={banner} style={{maxHeight: "300px", padding: "15px"}} className="img-fluid" alt='' />
                    <h4>The Big Fat Film Quiz</h4>
                    <p>
                        A film quiz app
                    </p>
                    <h1 style={{paddingBottom: "10px"}}>Want to play?</h1>
                    <table style={{marginLeft: "auto", marginRight: "auto"}}>
                        <tr>
                            <th><a href="/guessactor"><input value="Easy" type="submit" className="btn btn-info" style={{fontSize: "24px"}}/></a></th>
                            <th><a href="/guessmovie"><input value="Medium" type="submit" className="btn btn-info" style={{fontSize: "24px"}}/></a></th>
                            <th><a href="/sixdegrees"><input value="Hard" type="submit" className="btn btn-info" style={{fontSize: "24px"}}/></a></th>
                        </tr>
                    </table>
                    <p>
                        <br/>There is information about how each gamemode works if you scroll down.
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1><u>Gamemodes</u></h1>
                        </p>
                        <h3>Easy</h3>
                        <p>In this gamemode you will be given an image of an actor or actress and from that image<br/>you will have to guess who the actor/actress is.</p>
                        <br/>
                        <h3>Medium</h3>
                        <p>In this gamemode you will be given an image of two actors/actresses and from those images<br/>you will have to guess what film both of them have been in.</p>
                        <br/>
                        <h3>Hard</h3>
                        <p>In this gamemode you will be given an actor/actress and a film.
                            <br/>From this actor/actress mentioned there will be another actor/actress they have done<br/>work with who has featured in the film mentioned in the question.
                            <br/>Your task would be to find the actor/actress who is the link between the film and the actor/actress mentioned.</p>
                        <p style={{paddingBottom: "150px"}}></p>
                </div>
            </>
        );
    }
}

export default Home;