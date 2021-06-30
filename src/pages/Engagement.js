import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
    
const Engagement = () => {

    return (
        <div className="main-title">
        <h1><span className="engagement-title">Engagement</span></h1>
        <h3>Digital Art</h3>
        <h4>Created using Photoshop.<br></br>Image made up of free hand line drawing with different coloured backgrounds,<br></br>and personalised date and names.<br></br>If you'd like a closer look, click on the image.</h4>
        <div className="engagement">
            <Switch>
                <Route exact path="/engagement"></Route>
            </Switch>
            <div class="engagement-container">
            <div className="in-from-left">
            <a href = "http://localhost:3000/images/page_images/engagement_style1_1.jpg" target = "_blank"><img className="engagement-image" src="http://localhost:3000/images/page_images/engagement_style1_1.jpg" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div className="engagement-container2">
            <div className="in-from-bottom">
            <a href = "http://localhost:3000/images/page_images/engagement_style1_2.jpg" target = "_blank"><img className="engagement-image2" src="http://localhost:3000/images/page_images/engagement_style1_2.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div class="engagement-container3">
            <div className="in-from-right">
            <a href = "http://localhost:3000/images/page_images/engagement_style1_3.jpg" target = "_blank"><img className="engagement-image3" src="http://localhost:3000/images/page_images/engagement_style1_3.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
        </div>

        <div className="engagement2">
            <div class="engagement-container4">
            <div className="in-from-left">
            <a href = "http://localhost:3000/images/page_images/engagement_style2_1.jpg" target = "_blank"><img className="engagement-image4" src="http://localhost:3000/images/page_images/engagement_style2_1.jpg" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div className="engagement-container5">
            <div className="in-from-bottom">
            <a href = "http://localhost:3000/images/page_images/engagement_style2_2.jpg" target = "_blank"><img className="engagement-image5" src="http://localhost:3000/images/page_images/engagement_style2_2.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div class="engagement-container6">
            <div className="in-from-right">
            <a href = "http://localhost:3000/images/page_images/engagement_style2_3.jpg" target = "_blank"><img className="engagement-image6" src="http://localhost:3000/images/page_images/engagement_style2_3.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
        </div>

        <div className="engagement3">
            <div class="engagement-container7">
            <div className="in-from-left">
            <a href = "http://localhost:3000/images/page_images/engagement_style2_4.jpg" target = "_blank"><img className="engagement-image7" src="http://localhost:3000/images/page_images/engagement_style2_4.jpg" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div className="engagement-container8">
            <div className="in-from-bottom">
            <a href = "http://localhost:3000/images/page_images/engagement_style2_5.jpg" target = "_blank"><img className="engagement-image8" src="http://localhost:3000/images/page_images/engagement_style2_5.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div class="engagement-container9">
            <div className="in-from-right">
            <a href = "http://localhost:3000/images/page_images/engagement_style2_6.jpg" target = "_blank"><img className="engagement-image9" src="http://localhost:3000/images/page_images/engagement_style2_6.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
        </div>

        <a href="http://localhost:3000/portfolio"><button><i class="fas fa-chevron-left"></i>Portfolio</button></a>
        </div>
    )
}
    
export default Engagement;