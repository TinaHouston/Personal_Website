import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomepageContainer from './HomepageContainer';
import Cv from '../components/Cv';
import Portfolio from '../components/Portfolio';
// import Basus from '../pages/Basus';
import Bee from '../pages/Bee';
// import CCnews from '../pages/CCnews';
import Couple from '../pages/Couple';
// import Deptford from '../pages/Deptford';
// import ElephantPark from '../pages/ElephantPark';
import Engagement from '../pages/Engagement';
import Face from '../pages/Face';
import Flower from '../pages/Flower';
import Gym from '../pages/Gym';
import Rainbow from '../pages/Rainbow';
import Silhouette from '../pages/Silhouette';
import Skyrabble from '../pages/Skyrabble';

const MainContainer = () => {

    return (
        <Router>
            <>
            <NavBar className="navBar" />
            <Switch>
                <Route path="/cv" component={Cv} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/bee" component={Bee} />
                <Route path="/couple" component={Couple} />
                <Route path="/face" component={Face} />
                <Route path="/flower" component={Flower} />
                <Route path="/silhouette" component={Silhouette} />
                <Route path="/rainbow" component={Rainbow} />
                <Route path="/engagement" component={Engagement} />
                <Route path="/skyrabble" component={Skyrabble} />
                <Route path="/gym" component={Gym} />
                <Route path="/" component={HomepageContainer} />
                {/* <Route path="/basus" component={Basus} />
                <Route path="/ccnews" component={CCnews} />
                <Route path="/deptford" component={Deptford} />
                <Route path="/elephantpark" component={ElephantPark} /> */}
            </Switch>
            </>
        </Router>
    )
}

export default MainContainer;