import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomepageContainer from './HomepageContainer';

const MainContainer = () => {

    return (
        <Router>
            <>
            <NavBar className="navBar" />
            <Switch>
                <Route path="/" component={HomepageContainer} />
            </Switch>
            </>
        </Router>
    )
}

export default MainContainer;