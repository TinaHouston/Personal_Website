import React from 'react';
import {BrowserRouter as Route, Switch} from 'react-router-dom';
    
const CCnews = () => {

    return (
        <div className="webdev-title">
        <h1><span className="news-title">CC News</span></h1>
        <h3>Software Development</h3>
        <p>A news app created for news readers and journalists.<br></br>Allows readers to view a list of stories taken from<br></br>the News API and from the Java backend and allows<br></br>journalists to add new stories.</p>
        <h4>What tools were used?</h4>
        <p>JavaScript, Java, CSS, HTML5. Used two API's including the<br></br>Met Office API to pull in real time weather information<br></br>from various locations. This was situated on the homepage.</p>
        <h4>What did I learn from this project.</h4>
        <p>Last opportunity to create an app using all skills<br></br>learned from the 16-week CodeClan course.<br></br>Using Java as the main programming language<br></br>but also using JavaScript, HTML5 and CSS.</p>
        <h4>Group or individual project?</h4>
        <p>Group project.</p>
        <h4>How long did the project take?</h4>
        <p>This project was started from scratch and took 6 days in total.</p>
        <h4>UX Design</h4>
        <p>User research took place and competitors were studied<br></br>including: BBC News and The Guardian.<br></br>Wireframes were created in the planning stage to ensure<br></br>the best user journey. I wanted to make this app as<br></br>simple as possible so both customers and gym owners could<br></br>easily manage the system. With a clear homepage<br></br>and designated areas for members and classes.</p>

        <div className="art2">
            <Switch>
                <Route exact path="/ccnews"></Route>
            </Switch>
            <div class="art-container3 in-from-left">
                <a href = "https://christina-houston-portfolio.web.app/images/page_images/ccnews1.png" target = "_blank"><img className="art-image3" src="https://christina-houston-portfolio.web.app/images/page_images/ccnews1.png" height="550"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
            <div class="art-container4 in-from-right">
                <a href = "https://christina-houston-portfolio.web.app/images/page_images/ccnews2.png" target = "_blank"><img className="art-image4" src="https://christina-houston-portfolio.web.app/images/page_images/ccnews2.png" height="500"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
        </div>

        <h1 className="planning-title">Planning</h1>
        <p>Before starting the project, extensive planning took place.<br></br>Including code planning and wire frames<br></br>to ensure the app was as user friendly as possible</p>

        <div className="art2">
            <div class="art-container3 in-from-left">
                <a href = "https://christina-houston-portfolio.web.app/images/page_images/ccnews3.png" target = "_blank"><img className="art-image3" src="https://christina-houston-portfolio.web.app/images/page_images/ccnews3.png" height="550"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
            <div class="art-container4 in-from-right">
                <a href = "https://christina-houston-portfolio.web.app/images/page_images/ccnews4.png" target = "_blank"><img className="art-image4" src="https://christina-houston-portfolio.web.app/images/page_images/ccnews4.png" height="500"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
        </div>

        <div className="art2">
            <Switch>
                <Route exact path="/ccnews"></Route>
            </Switch>
            <div class="art-container3 in-from-left">
                <a href = "https://christina-houston-portfolio.web.app/images/page_images/ccnews5.png" target = "_blank"><img className="art-image3" src="https://christina-houston-portfolio.web.app/images/page_images/ccnews5.png" height="550"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
            <div class="art-container4 in-from-right">
                <a href = "https://christina-houston-portfolio.web.app/images/page_images/ccnews6.png" target = "_blank"><img className="art-image4" src="https://christina-houston-portfolio.web.app/images/page_images/ccnews6.png" height="500"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
        </div>

        <div className="buttons">
        <a href="https://www.youtube.com/watch?v=3CIGxUUhcpw"><button><i class="fas fa-chevron-left"></i>Watch demo</button></a>
        <a href="https://github.com/TinaHouston/Java_News_App_Frontend"><button><i class="fas fa-chevron-left"></i>See code</button></a>
        <a href="https://christina-houston-portfolio.web.app/portfolio"><button><i class="fas fa-chevron-left"></i>Back to portfolio</button></a>
        </div>

        </div>
    )
}
    
export default CCnews;