import React from 'react';
import {BrowserRouter as Route, Switch} from 'react-router-dom';
    
const Face = () => {

    return (
        <div className="art-title">
        <h1><span className="face-title">Face</span></h1>
        <h3>Digital Art</h3>
        <h4>Created using Photoshop<br></br><br></br>Image made up of one single line, drawn by free hand and spaces coloured in.<br></br><br></br>If you'd like a closer look, click on the image.</h4>
        <div className="art">
            <Switch>
                <Route exact path="/bee"></Route>
            </Switch>
            <div class="art-container in-from-left">
            <a href = "https://christina-houston-portfolio.web.app/images/Art_9.jpg" target = "_blank"><img className="image" src="https://christina-houston-portfolio.web.app/images/Art_9.jpg" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            <div class="art-container2 in-from-right">
            <a href = "https://christina-houston-portfolio.web.app/images/page_images/face.jpg" target = "_blank"><img className="image2" src="https://christina-houston-portfolio.web.app/images/page_images/face.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
        </div>
        <a href="https://christina-houston-portfolio.web.app/portfolio"><button><i class="fas fa-chevron-left"></i>Portfolio</button></a>
        </div>
    )
}
    
export default Face;