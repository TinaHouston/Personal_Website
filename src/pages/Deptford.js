import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
    
const Deptford = () => {

    return (
        <div className="webdev-title">
        <h1><span className="deptford-title">Deptford Landings</span></h1>
        <h3>Front end development</h3>
        <p>Front end web development for client. Created the layout and styling of various pages.</p>        
        <h4>UX Design</h4>
        <p>Worked alongside UX Design agency to create a user-friendly, insight driven website.<br></br>Human-centred approach used to ensure the users took meaningful actions at each step of the journey.</p>
        <div className="art">
            <Switch>
                <Route exact path="/silhouette"></Route>
            </Switch>
            <div class="art-container in-from-left">
            <a href = "http://localhost:3000/images/page_images/deptford1.png" target = "_blank"><img className="art-image" src="http://localhost:3000/images/page_images/deptford1.png" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            <div class="art-container2 in-from-right">
            <a href = "http://localhost:3000/images/page_images/deptford2.png" target = "_blank"><img className="art-image2" src="http://localhost:3000/images/page_images/deptford2.png" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
        </div>

        <div className="art2">
            <div class="art-container3 in-from-left">
                <a href = "http://localhost:3000/images/page_images/deptford3.png" target = "_blank"><img className="art-image3" src="http://localhost:3000/images/page_images/deptford3.png" height="550"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
            <div class="art-container4 in-from-right">
                <a href = "http://localhost:3000/images/page_images/deptford4.png" target = "_blank"><img className="art-image4" src="http://localhost:3000/images/page_images/deptford4.png" height="500"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
            </div>

        <a href="http://localhost:3000/portfolio"><button><i class="fas fa-chevron-left"></i>Portfolio</button></a>
        </div>
    )
}
    
export default Deptford;