import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
    
const Cv = () => {

    return (
        <div className="CV-title">
        <h1>About me</h1>
        <div className="cv">
            <Switch>
                <Route exact path="/cv"></Route>
            </Switch>
            <div class="container in-from-left">
            <a href = "http://localhost:3000/images/cv.pdf" target = "_blank"><img className="image" src="http://localhost:3000/images/cvscreenshot1.png" height="550"/></a>
                <div class="overlay">
                </div>
            </div>
            <div class="container2 in-from-right">
            <a href = "http://localhost:3000/images/cv.pdf" target = "_blank"><img className="image2" src="http://localhost:3000/images/cvscreenshot2.png" height="550"/></a>
                <div class="overlay">
                </div>
            </div>
        </div>
        <a href="http://localhost:3000/images/cv.pdf" target="blank"><button><i class="fas fa-search-plus"></i> Click to zoom</button></a>
        </div>
    )
}
    
export default Cv;