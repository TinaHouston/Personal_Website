import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
    
const Rainbow = () => {

    return (
        <div className="art-title">
        <h1><span className="rainbow-title">Rainbow</span></h1>
        <h3>Digital Art</h3>
        <h4>Created using Photoshop, made up of single line drawing.<br></br>Image made up of one single line, drawn by free hand and spaces roughly coloured in.<br></br>If you'd like a closer look, click on the image.</h4>
        <div className="art">
            <Switch>
                <Route exact path="/silhouette"></Route>
            </Switch>
            <div class="art-container in-from-left">
            <a href = "http://localhost:3000/images/page_images/rainbow1.jpg" target = "_blank"><img className="art-image" src="http://localhost:3000/images/page_images/rainbow1.jpg" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            <div class="art-container2 in-from-right">
            <a href = "http://localhost:3000/images/page_images/rainbow2.jpg" target = "_blank"><img className="art-image2" src="http://localhost:3000/images/page_images/rainbow2.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
        </div>
        <div className="art2">
            <div class="art-container5 in-from-left">
                <a href = "http://localhost:3000/images/Art_5.jpg" target = "_blank"><img className="art-image5" src="http://localhost:3000/images/Art_5.jpg" height="550"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
        </div>
        <a href="http://localhost:3000/portfolio"><button><i class="fas fa-chevron-left"></i>Portfolio</button></a>
        </div>
    )
}
    
export default Rainbow;