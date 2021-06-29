import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
    
const Bee = () => {

    return (
        <div className="art-title">
        <h1><span className="bee-title">Bee</span></h1>
        <h3>Digital Art</h3>
        <h4>Created using Photoshop, made up of different sized layers to make the shape of a bee.<br></br>Layers drawn by freehand and filled in.<br></br>If you'd like a closer look, click on the image.</h4>
        <div className="art">
            <Switch>
                <Route exact path="/bee"></Route>
            </Switch>
            <div class="art-container in-from-left">
            <a href = "http://localhost:3000/images/Art_6.jpg" target = "_blank"><img className="image" src="http://localhost:3000/images/Art_6.jpg" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            <div class="art-container2 in-from-right">
            <a href = "http://localhost:3000/images/page_images/bee.jpg" target = "_blank"><img className="image2" src="http://localhost:3000/images/page_images/bee.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
        </div>
        <a href="http://localhost:3000/portfolio"><button><i class="fas fa-chevron-left"></i>Portfolio</button></a>
        </div>
    )
}
    
export default Bee;