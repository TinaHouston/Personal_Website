import React from 'react';
import {BrowserRouter as Route, Switch} from 'react-router-dom';
    
const Engagement = () => {

    return (
        <div className="main-title">
        <h1><span className="engagement-title">Engagement</span></h1>
        <h3>Digital Art</h3>
        <h4>Created using Photoshop.<br></br><br></br>Image made up of free hand line drawing<br></br>with different coloured backgrounds,<br></br>and personalised date and names.<br></br><br></br>If you'd like a closer look, click on the image.</h4>
        <div className="engagement">
            <Switch>
                <Route exact path="/engagement"></Route>
            </Switch>
            <div class="engagement-container">
            <div className="in-from-left">
            <a href = "https://christina-houston-portfolio.web.app/images/page_images/engagement_style1_1.jpg" target = "_blank"><img className="engagement-image" src="https://christina-houston-portfolio.web.app/images/page_images/engagement_style1_1.jpg" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div className="engagement-container2">
            <div className="in-from-bottom">
            <a href = "https://christina-houston-portfolio.web.app/images/page_images/engagement_style1_2.jpg" target = "_blank"><img className="engagement-image2" src="https://christina-houston-portfolio.web.app/images/page_images/engagement_style1_2.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div class="engagement-container3">
            <div className="in-from-right">
            <a href = "https://christina-houston-portfolio.web.app/images/page_images/engagement_style1_3.jpg" target = "_blank"><img className="engagement-image3" src="https://christina-houston-portfolio.web.app/images/page_images/engagement_style1_3.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
        </div>

        <div className="engagement2">
            <div class="engagement-container4">
            <div className="in-from-left">
            <a href = "https://christina-houston-portfolio.web.app/images/page_images/engagement_style2_1.jpg" target = "_blank"><img className="engagement-image4" src="https://christina-houston-portfolio.web.app/images/page_images/engagement_style2_1.jpg" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div className="engagement-container5">
            <div className="in-from-bottom">
            <a href = "https://christina-houston-portfolio.web.app/images/page_images/engagement_style2_2.jpg" target = "_blank"><img className="engagement-image5" src="https://christina-houston-portfolio.web.app/images/page_images/engagement_style2_2.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div class="engagement-container6">
            <div className="in-from-right">
            <a href = "https://christina-houston-portfolio.web.app/images/page_images/engagement_style2_3.jpg" target = "_blank"><img className="engagement-image6" src="https://christina-houston-portfolio.web.app/images/page_images/engagement_style2_3.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
        </div>

        <div className="engagement3">
            <div class="engagement-container7">
            <div className="in-from-left">
            <a href = "https://christina-houston-portfolio.web.app/images/page_images/engagement_style2_4.jpg" target = "_blank"><img className="engagement-image7" src="https://christina-houston-portfolio.web.app/images/page_images/engagement_style2_4.jpg" height="550"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div className="engagement-container8">
            <div className="in-from-bottom">
            <a href = "https://christina-houston-portfolio.web.app/images/page_images/engagement_style2_5.jpg" target = "_blank"><img className="engagement-image8" src="https://christina-houston-portfolio.web.app/images/page_images/engagement_style2_5.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
            <div class="engagement-container9">
            <div className="in-from-right">
            <a href = "https://christina-houston-portfolio.web.app/images/page_images/engagement_style2_6.jpg" target = "_blank"><img className="engagement-image9" src="https://christina-houston-portfolio.web.app/images/page_images/engagement_style2_6.jpg" height="500"/></a>
                <div class="art-overlay">
                </div>
            </div>
            </div>
        </div>

        <a href="https://christina-houston-portfolio.web.app/portfolio"><button><i class="fas fa-chevron-left"></i>Portfolio</button></a>
        </div>
    )
}
    
export default Engagement;