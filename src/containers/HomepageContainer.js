import React from 'react';
import {Route, Switch, Swtich} from 'react-router-dom';

const HomepageContainer = () => {

    return (
        <div className="homepage">
        <Switch>
            <Route exact path="/"></Route>
        </Switch>
        <h1>This</h1>
        <h1>is me</h1>
        <br></br>
        <br></br>
        <p>I am an eager Software Developer who has recently graduated </p>
        <p>from the Professional Software Development course at CodeClan.</p>
        <p>A problem solver who's keen to continue my learning in industry</p>
        <p>by using my practical coding skills, which have been enhanced from</p>
        <p>various CodeClan projects, to do so.</p>
        <a href="https://github.com/TinaHouston" target="blank"><button>View GitHub Profile</button></a>
        </div>
    )


}

export default HomepageContainer;