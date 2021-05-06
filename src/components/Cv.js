import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
    
const Cv = () => {

    return (
        <>
            <Switch>
                <Route exact path="/cv"></Route>
            </Switch>
            {/* <a href = "http://localhost:3000/images/cv.pdf" target = "_blank"><img id="image1" src="http://localhost:3000/images/cvscreenshot1.png" height="480"/></a>
            <a href = "http://localhost:3000/images/cv.pdf" target = "_blank"><img id="image2" src="http://localhost:3000/images/cvscreenshot2.png" height="480"/></a>
         */}
            <div class="container">
                <img src="http://localhost:3000/images/cvscreenshot1.png" height="550" alt="Avatar" class="image" />
                <div class="overlay">
                <div class="text">Click to view</div>
                </div>
            </div>
        </>
    )
}
    
export default Cv;