import React from 'react';

class About extends React.Component {
    render() {
        return(
            <>
                <h1 style={{fontSize: "72px"}}>About</h1>
                <p>
                    Welcome to the about page!
                    <br/>
                    <br/>
                    The Big Fat Film Quiz is a website that is about testing your knowledge on films.
                    <br/>
                    To really test your knowledge there are three gamemodes. From easy to hard, there are questions for everyone!
                    <br/>
                    <br/>
                </p>
                <p style={{fontSize: "10px"}}>
                Copyright Information:<br/>
                I must state that in NO way, shape or form am I intending to infringe rights of the copyright holder.<br/>Content used is strictly for research/reviewing purposes and to help educate. All under the Fair Use law.
                <br/>"Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as <br/>
                criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing.<br/>Non-profit, educational or personal use tips the balance in favor of fair use."
                <br/>All these rights are owned by IMDb and I do not intend to infringe these rights.
                </p>
                <h2>About the creator</h2>
                <p>
                    Hey! My name's Newtinn and I created this app. This is my first website that I have created and put online.
                    <br/>
                    Before this website, I have mostly created games in Unity and GameMaker: Studio.
                    <br/>If you want to check those out check out my itch.io here:
                    <br/><a href="https://newtinn.itch.io/" target="_blank"><input value="itch.io" type="submit" className="btn btn-info" /></a>
                    <br/>
                    <br/>
                    Some of my interests include:
                    <br/>• Gaming
                    <br/>• Listening to lofi
                    <br/>• Watching sports
                    <br/><br/>If you want to contact me go to the contact page!
                </p>
            </>
        )
    }
}

export default About;