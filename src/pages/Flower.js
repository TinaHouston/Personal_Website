import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
    
const Flower = () => {

    return (
        <div className="art-title">
        <h1><span className="flower-title">Flower</span></h1>
        <h3>Digital Art</h3>
        <h4>Created using Photoshop, made up of single line drawing.<br></br>Image made up of one single line, drawn by free hand and spaces roughly coloured in.<br></br>If you'd like a closer look, click on the image.</h4>
        <div className="art">
            <Switch>
                <Route exact path="/bee"></Route>
            </Switch>
            <div class="art-container in-from-left">
            <a href = "http://localhost:3000/images/Art_10.jpg" target = "_blank"><img className="image" src="http://localhost:3000/images/Art_10.jpg" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            <div class="art-container2 in-from-right">
            <a href = "http://localhost:3000/images/page_images/flower.jpg" target = "_blank"><img className="image2" src="http://localhost:3000/images/page_images/flower.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
        </div>
        <a href="http://localhost:3000/portfolio"><button><i class="fas fa-chevron-left"></i>Portfolio</button></a>
        </div>
    )
}
    
export default Flower;