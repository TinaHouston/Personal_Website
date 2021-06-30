import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
    
const ElephantPark = () => {

    return (
        <div className="webdev-title">
        <h1><span className="ep-title">Elephant Park</span></h1>
        <h3>Front end development</h3>
        <p>Front end web development for client. Created the layout and styling of various pages.</p>        
        <h4>UX Design</h4>
        <p>Worked alongside UX Design agency to create a user-friendly, insight driven website.<br></br>Human-centred approach used to ensure the users took meaningful actions at each step of the journey.</p>
        <div className="art">
            <Switch>
                <Route exact path="/elephantpark"></Route>
            </Switch>
            <div class="art-container in-from-left">
            <a href = "http://localhost:3000/images/page_images/ep.png" target = "_blank"><img className="art-image" src="http://localhost:3000/images/page_images/ep1.png" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            <div class="art-container2 in-from-right">
            <a href = "http://localhost:3000/images/page_images/ep2.png" target = "_blank"><img className="art-image2" src="http://localhost:3000/images/page_images/ep2.png" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
        </div>

        <div className="art2">
            <div class="art-container3 in-from-left">
                <a href = "http://localhost:3000/images/page_images/ep3.png" target = "_blank"><img className="art-image3" src="http://localhost:3000/images/page_images/ep3.png" height="550"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
            <div class="art-container4 in-from-right">
                <a href = "http://localhost:3000/images/page_images/ep4.png" target = "_blank"><img className="art-image4" src="http://localhost:3000/images/page_images/ep4.png" height="500"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
            </div>

        <a href="http://localhost:3000/portfolio"><button><i class="fas fa-chevron-left"></i>Portfolio</button></a>
        </div>
    )
}
    
export default ElephantPark;