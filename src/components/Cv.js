import React from 'react';
import {BrowserRouter as Route, Switch} from 'react-router-dom';
    
const Cv = () => {

    return (
        <div className="CV-title">
        <h1><span className="aboutme-title">About me</span></h1>
        <div className="cv">
            <Switch>
                <Route exact path="/cv"></Route>
            </Switch>
            <div class="container in-from-left">
            <a href = "https://christina-houston-portfolio.web.app/images/cv.pdf" target = "_blank"><img className="image" src="https://christina-houston-portfolio.web.app/images/cvpage1.png" height="550"/></a>
                <div class="overlay">
                </div>
            </div>
            <div class="container2 in-from-right">
            <a href = "https://christina-houston-portfolio.web.app/images/cv.pdf" target = "_blank"><img className="image2" src="https://christina-houston-portfolio.web.app/images/cvpage2.png" height="550"/></a>
                <div class="overlay">
                </div>
            </div>
        </div>
        <a href="https://christina-houston-portfolio.web.app/images/cv.pdf" target="blank"><button><i class="fas fa-search-plus"></i> Click to zoom</button></a>
        </div>
    )
}
    
export default Cv;