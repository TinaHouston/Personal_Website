import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
    
const CCnews = () => {

    return (
        <div className="webdev-title">
        <h1><span className="news-title">CC News</span></h1>
        <h3>Software Development</h3>
        <p>A news app created for news readers and journalists.<br></br>Allows readers to view a list of stories taken from the News API and from the Java backend<br></br>and allows journalists to add new stories.</p>
        <h4>What tools were used?</h4>
        <p>JavaScript, Java, CSS, HTML5. Used two API's including the Met Office API<br></br>to pull in real time weather information from various locations.<br></br>This was situated on the homepage.</p>
        <h4>What did I learn from this project.</h4>
        <p>Last opportunity to create an app using all skills<br></br>learned from the 16-week CodeClan course. Using Java as the main programming language<br></br>but also using JavaScript, HTML5 and CSS.</p>
        <h4>Group or individual project?</h4>
        <p>Group project.</p>
        <h4>How long did the project take?</h4>
        <p>This project was started from scratch and took 6 days in total.</p>
        <h4>UX Design</h4>
        <p>User research took place and competitors were studied including: BBC News and The Guardian.<br></br>Wireframes were created in the planning stage to ensure the best user journey.<br></br>I wanted to make this app as simple as possible so both<br></br>customers and gym owners could easily manage the system.<br></br>With a clear homepage and designated areas for members and classes.</p>

        <div className="art2">
            <Switch>
                <Route exact path="/ccnews"></Route>
            </Switch>
            <div class="art-container3 in-from-left">
                <a href = "http://localhost:3000/images/page_images/ccnews1.png" target = "_blank"><img className="art-image3" src="http://localhost:3000/images/page_images/ccnews1.png" height="550"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
            <div class="art-container4 in-from-right">
                <a href = "http://localhost:3000/images/page_images/ccnews2.png" target = "_blank"><img className="art-image4" src="http://localhost:3000/images/page_images/ccnews2.png" height="500"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
        </div>

        <h1 className="planning-title">Planning</h1>
        <p>Before starting the project, extensive planning took place.<br></br>Including code planning and wire frames<br></br>to ensure the app was as user friendly as possible</p>

        <div className="art2">
            <div class="art-container3 in-from-left">
                <a href = "http://localhost:3000/images/page_images/ccnews3.png" target = "_blank"><img className="art-image3" src="http://localhost:3000/images/page_images/ccnews3.png" height="550"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
            <div class="art-container4 in-from-right">
                <a href = "http://localhost:3000/images/page_images/ccnews4.png" target = "_blank"><img className="art-image4" src="http://localhost:3000/images/page_images/ccnews4.png" height="500"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
        </div>

        <div className="art2">
            <Switch>
                <Route exact path="/ccnews"></Route>
            </Switch>
            <div class="art-container3 in-from-left">
                <a href = "http://localhost:3000/images/page_images/ccnews5.png" target = "_blank"><img className="art-image3" src="http://localhost:3000/images/page_images/ccnews5.png" height="550"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
            <div class="art-container4 in-from-right">
                <a href = "http://localhost:3000/images/page_images/ccnews6.png" target = "_blank"><img className="art-image4" src="http://localhost:3000/images/page_images/ccnews6.png" height="500"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
        </div>

        <div className="buttons">
        <a href="https://www.youtube.com/watch?v=3CIGxUUhcpw"><button><i class="fas fa-chevron-left"></i>Watch app demo</button></a>
        <a href="https://github.com/TinaHouston/Java_News_App_Frontend"><button><i class="fas fa-chevron-left"></i>See the code</button></a>
        <a href="http://localhost:3000/portfolio"><button><i class="fas fa-chevron-left"></i>Back to portfolio</button></a>
        </div>

        </div>
    )
}
    
export default CCnews;