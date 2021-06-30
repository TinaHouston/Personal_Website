import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
    
const Gym = () => {

    return (
        <div className="webdev-title">
        <h1><span className="gym-title">Gym Manager</span></h1>
        <h3>Software Development</h3>
        <p>A Gym Manager app created for gym owners.<br></br>Allows users to manage gym classes, gym members and bookings<br></br>as well as updating existing classes, members and bookings.</p>
        <h4>What tools were used?</h4>
        <p>Python, CSS, HTML5.</p>
        <h4>What did I learn from this project.</h4>
        <p>Another opportunity to create an app using all skills<br></br>learned from the first 4 weeks of CodeClan. Using Python as the main programming language<br></br>but also using HTML5 and CSS. First experience of using CSS grid and Flexbox.</p>
        <h4>Group or individual project?</h4>
        <p>Individual project.</p>
        <h4>How long did the project take?</h4>
        <p>This project was started from scratch and took 6 days in total.</p>
        <h4>UX Design</h4>
        <p>User research took place before this project and I tested out other Gym apps.<br></br>Studied their downfalls and where they could be improved.<br></br>I wanted to make this app as simple as possible so both<br></br>customers and gym owners could easily manage the system.<br></br>With a clear homepage and designated areas for members and classes.</p>

        <div className="engagement">
            <Switch>
                <Route exact path="/gym"></Route>
            </Switch>
            <div class="engagement-container">
            <div className="in-from-left">
            <a href = "http://localhost:3000/images/page_images/gym1.png" target = "_blank"><img className="engagement-image" src="http://localhost:3000/images/page_images/gym1.png" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div className="engagement-container2">
            <div className="in-from-bottom">
            <a href = "http://localhost:3000/images/page_images/gym2.png" target = "_blank"><img className="engagement-image2" src="http://localhost:3000/images/page_images/gym2.png" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div class="engagement-container3">
            <div className="in-from-right">
            <a href = "http://localhost:3000/images/page_images/gym3.png" target = "_blank"><img className="engagement-image3" src="http://localhost:3000/images/page_images/gym3.png" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
        </div>

        <h1 className="planning-title">Planning</h1>
        <p>Before starting the project, extensive planning took place.<br></br>Including code planning and wire frames<br></br>to ensure the app was as user friendly as possible</p>

        <div className="engagement">
            <div class="engagement-container">
            <div className="in-from-left">
            <a href = "http://localhost:3000/images/page_images/gym4.png" target = "_blank"><img className="engagement-image" src="http://localhost:3000/images/page_images/gym4.png" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div className="engagement-container2">
            <div className="in-from-bottom">
            <a href = "http://localhost:3000/images/page_images/gym5.png" target = "_blank"><img className="engagement-image2" src="http://localhost:3000/images/page_images/gym5.png" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div class="engagement-container3">
            <div className="in-from-right">
            <a href = "http://localhost:3000/images/page_images/gym6.png" target = "_blank"><img className="engagement-image3" src="http://localhost:3000/images/page_images/gym6.png" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
        </div>


        <div className="gym-buttons">
        <a href="https://github.com/TinaHouston/SkyRabble"><button><i class="fas fa-chevron-left"></i>See the code</button></a>
        <a href="http://localhost:3000/portfolio"><button><i class="fas fa-chevron-left"></i>Back to portfolio</button></a>
        </div>
        </div>
    )
}
    
export default Gym;