import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
    
const Basus = () => {

    return (
        <div className="webdev-title">
        <h1><span className="basus-title">Basus Home</span></h1>
        <h3>Web Development and Logo Creation</h3>
        <p>Basus Home is a furniture store located in Giffnock, Glasgow.<br></br>The client needed a new logo to feature throughout the store and on their digital channels,<br></br>along with an easy to use but attractive website to showcase their products.</p>
        <h4>Research</h4>
        <p>Competitor anlysis and user research was undertaken before starting the design and website creation.</p>
        <h4>What tools were used for the website?</h4>
        <p>As the client would be managing the website themselves after the work was completed,<br></br>Square Space was used to create the website and give the client<br></br>an easier user experience after the project was finished.</p>
        <h1><span className="website-title">Website Preview</span></h1>
        <div className="engagement">
            <Switch>
                <Route exact path="/basus"></Route>
            </Switch>
            <div class="engagement-container">
            <div className="in-from-left">
            <a href = "http://localhost:3000/images/page_images/basus1.png" target = "_blank"><img className="engagement-image" src="http://localhost:3000/images/page_images/basus1.png" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div className="engagement-container2">
            <div className="in-from-bottom">
            <a href = "http://localhost:3000/images/page_images/basus2.png" target = "_blank"><img className="engagement-image2" src="http://localhost:3000/images/page_images/basus2.png" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div class="engagement-container3">
            <div className="in-from-right">
            <a href = "http://localhost:3000/images/page_images/basus3.png" target = "_blank"><img className="engagement-image3" src="http://localhost:3000/images/page_images/basus3.png" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
        </div>

        <h1><span className="logo-title">Logo Preview</span></h1>
        <p>After speaking with the client and visiting the store to view the frontage.<br></br>It was decided an easy to read, impactful logo was required.<br></br>Using a simple font and a brihght blue helped us to achieve this.</p>

        <div className="art">
            <div class="art-container in-from-left">
            <a href = "http://localhost:3000/images/Logo-1jpg" target = "_blank"><img className="image" src="http://localhost:3000/images/Logo_1.jpg" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            <div class="art-container2 in-from-right">
            <a href = "http://localhost:3000/images/page_images/logo2.jpg" target = "_blank"><img className="image2" src="http://localhost:3000/images/page_images/logo2.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
        </div>

        <div className="gym-buttons">
        <a href="https://www.basus-home.co.uk/home"><button><i class="fas fa-chevron-left"></i>View website</button></a>
        <a href="http://localhost:3000/portfolio"><button><i class="fas fa-chevron-left"></i>Back to portfolio</button></a>
        </div>

        </div>
    )
}
    
export default Basus;