import React from 'react';
import {Route, Switch, Swtich} from 'react-router-dom';

const HomepageContainer = () => {

    return (
        <div className="homepage">
        <Switch>
            <Route exact path="/"></Route>
        </Switch>
        <h1>I'm <span className="name">Tina Houston</span></h1>
        <div className="homepage-h2">
        <h2>I <span className="design">design</span>, <span className="code">code</span>, <span className="account-manage">account manage</span> & <span className="draw">draw</span></h2>
        </div>
        <p><span className="small-writing">*Hover over for a pastel show.</span></p>
        <br></br>
        <br></br>
        <p>I am an eager Software Developer with a passion for UX Design,</p>
        <p>who has recently graduated from the Professional Software Development</p>
        <p>course at CodeClan. I love to design and create beautiful user experiences</p>
        <p>and I'm keen to continue my learning in industry</p>
        <a href="https://github.com/TinaHouston" target="blank"><button>View GitHub Profile</button></a>
        </div>
    )
}

export default HomepageContainer;