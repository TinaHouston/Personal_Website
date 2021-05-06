import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomepageContainer from './HomepageContainer';
import Cv from '../components/Cv';

const MainContainer = () => {

    return (
        <Router>
            <>
            <NavBar className="navBar" />
            <Switch>
                <Route path="/cv" component={Cv} />
                <Route path="/" component={HomepageContainer} />
            </Switch>
            </>
        </Router>
    )
}

export default MainContainer;