import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <>
                <h1 style={{fontSize: "72px"}}>Contact</h1>
                <p>
                    Welcome to the contact page!
                    <br/>
                    If you want to send an inquiry about the quiz or just want to say hi to the creator, you have come to the right place!
                    <br/>
                    Contact details:
                    <br/>
                    <br/>
                    Email: newtinn@hotmail.com
                    <br/>
                    Twitter: @newtinn - <a href="https://www.twitter.com/@newtinn" target="_blank"><input type="submit" value="Twitter" className="btn btn-info" /></a><br/>
                    Youtube: newtinn - <a href="https://www.youtube.com/channel/UCo48YTr8_mMz_U8GOzmV_bg" target="_blank"><input type="submit" value="Youtube" className="btn btn-danger" /></a>
                </p>
                <br/>
                <br/>
                <br/>
                <br/>
                <p style={{paddingBottom: "150px"}}></p>
            </>
        );
    }
}

export default Contact;