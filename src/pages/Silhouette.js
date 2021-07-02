import React from 'react';
import {BrowserRouter as Route, Switch} from 'react-router-dom';
    
const Silhouette = () => {

    return (
        <div className="art-title">
        <h1><span className="silhouette-title">Silhouette</span></h1>
        <h3>Digital Art</h3>
        <h4>Created using Photoshop.<br></br><br></br>Image made up of free hand line drawing,<br></br>with various textures found online and coloured in.<br></br><br></br>If you'd like a closer look, click on the image.</h4>
        <div className="art">
            <Switch>
                <Route exact path="/silhouette"></Route>
            </Switch>
            <div class="art-container in-from-left">
            <a href = "https://christina-houston-portfolio.web.app/images/Art_7.jpg" target = "_blank"><img className="art-image" src="https://christina-houston-portfolio.web.app/images/Art_7.jpg" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            <div class="art-container2 in-from-right">
            <a href = "https://christina-houston-portfolio.web.app/images/page_images/silhouette_blue.jpg" target = "_blank"><img className="art-image2" src="https://christina-houston-portfolio.web.app/images/page_images/silhouette_blue.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
        </div>
        <div className="art2">
            <div class="art-container3 in-from-left">
                <a href = "https://christina-houston-portfolio.web.app/images/page_images/silhouette_brown.jpg" target = "_blank"><img className="art-image3" src="https://christina-houston-portfolio.web.app/images/page_images/silhouette_brown.jpg" height="550"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
            <div class="art-container4 in-from-right">
                <a href = "https://christina-houston-portfolio.web.app/images/page_images/silhouette_orange.jpg" target = "_blank"><img className="art-image4" src="https://christina-houston-portfolio.web.app/images/page_images/silhouette_orange.jpg" height="500"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
            </div>
        <a href="https://christina-houston-portfolio.web.app/portfolio"><button><i class="fas fa-chevron-left"></i>Portfolio</button></a>
        </div>
    )
}
    
export default Silhouette;