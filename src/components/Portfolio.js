import React from 'react';
import {BrowserRouter as Route, Switch} from 'react-router-dom';
    
const Portfolio = () => {

        return (
            <div className="portfolio-title">
                <h1>Portfolio</h1>
                    <div className="portfolio">
                        <Switch>
                            <Route exact path="/portfolio"></Route>
                        </Switch>
                        <div class="flex-container">


                            <div class="flex-cell">
                                <div className="content">
                                        <a href="http://localhost:3000/">
                                            <div className="content-overlay">
                                            </div>
                                            <div class="flex-item">
                                                <img src="http://localhost:3000/images/Art_1.jpg" />
                                            </div>
                                            <div class="content-details fadeIn-bottom">
                                                <h3 className="content-title">Skyrabble</h3>
                                                <p className="content-text">JavaScript App using the W3W and<br></br>OpenSky API's.</p>
                                            </div>
                                        </a>
                                </div>
                            </div>

                        <div class="flex-cell">
                            <div className="content">
                                    <a href="http://localhost:3000/">
                                        <div className="content-overlay">
                                        </div>
                                        <div class="flex-item">
                                            <img src="http://localhost:3000/images/Art_2.jpg" />
                                        </div>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">Gym Manager</h3>
                                            <p className="content-text">Python App for a Gym<br></br>Management System.</p>
                                        </div>
                                    </a>
                            </div>
                        </div>

                        <div class="flex-cell">
                            <div className="content">
                                    <a href="http://localhost:3000/">
                                        <div className="content-overlay">
                                        </div>
                                        <div class="flex-item">
                                            <img src="http://localhost:3000/images/Art_3.jpg" />
                                        </div>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">CC News</h3>
                                            <p className="content-text">Java app using Weather and News API's<br></br>with a Java backend.</p>
                                        </div>
                                    </a>
                            </div>
                        </div>

                        <div class="flex-cell">
                            <div className="content">
                                    <a href="http://localhost:3000/">
                                        <div className="content-overlay">
                                        </div>
                                        <div class="flex-item">
                                            <img src="http://localhost:3000/images/Art_4.jpg" />
                                        </div>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">Engagament</h3>
                                            <p className="content-text">Digital print created using Photoshop.<br></br>Free hand drawing with personalised name and date.</p>
                                        </div>
                                    </a>
                            </div>
                        </div>

                        <div class="flex-cell">
                            <div className="content">
                                    <a href="http://localhost:3000/">
                                        <div className="content-overlay">
                                        </div>
                                        <div class="flex-item">
                                            <img src="http://localhost:3000/images/Art_5.jpg" />
                                        </div>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">Rainbow</h3>
                                            <p className="content-text">High resolution art created using Photoshop.</p>
                                        </div>
                                    </a>
                            </div>
                        </div>

                        <div class="flex-cell">
                            <div className="content">
                                    <a href="http://localhost:3000/bee">
                                        <div className="content-overlay">
                                        </div>
                                        <div class="flex-item">
                                            <img src="http://localhost:3000/images/Art_6.jpg" />
                                        </div>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">Bee</h3>
                                            <p className="content-text">High resolution art created using Photoshop.</p>
                                        </div>
                                    </a>
                            </div>
                        </div>

                        <div class="flex-cell">
                            <div className="content">
                                    <a href="http://localhost:3000/">
                                        <div className="content-overlay">
                                        </div>
                                        <div class="flex-item">
                                            <img src="http://localhost:3000/images/Art_7.jpg" />
                                        </div>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">Silhouette</h3>
                                            <p className="content-text">Digital print created using Photoshop.<br></br>Free hand drawing.</p>
                                        </div>
                                    </a>
                            </div>
                        </div>

                        <div class="flex-cell">
                            <div className="content">
                                    <a href="http://localhost:3000/couple">
                                        <div className="content-overlay">
                                        </div>
                                        <div class="flex-item">
                                            <img src="http://localhost:3000/images/Art_8.jpg" />
                                        </div>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">Couple</h3>
                                            <p className="content-text">Digital print created using Photoshop.<br></br>Free hand drawing.</p>
                                        </div>
                                    </a>
                            </div>
                        </div>

                        <div class="flex-cell">
                            <div className="content">
                                    <a href="http://localhost:3000/face">
                                        <div className="content-overlay">
                                        </div>
                                        <div class="flex-item">
                                            <img src="http://localhost:3000/images/Art_9.jpg" />
                                        </div>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">Face</h3>
                                            <p className="content-text">Digital print created using Photoshop.<br></br>Free hand drawing.</p>
                                        </div>
                                    </a>
                            </div>
                        </div>

                        <div class="flex-cell">
                            <div className="content">
                                    <a href="http://localhost:3000/flower">
                                        <div className="content-overlay">
                                        </div>
                                        <div class="flex-item">
                                            <img src="http://localhost:3000/images/Art_10.jpg" />
                                        </div>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">Flower</h3>
                                            <p className="content-text">Digital print created using Photoshop.<br></br>Free hand drawing.</p>
                                        </div>
                                    </a>
                            </div>
                        </div>

                        <div class="flex-cell">
                            <div className="content">
                                    <a href="http://localhost:3000/">
                                        <div className="content-overlay">
                                        </div>
                                        <div class="flex-item">
                                            <img src="http://localhost:3000/images/Website_1.jpg" />
                                        </div>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">Deptford Landings</h3>
                                            <p className="content-text">Front-end web development and UX Design.<br></br>Created using Sitecore.</p>
                                        </div>
                                    </a>
                            </div>
                        </div>

                        <div class="flex-cell">
                            <div className="content">
                                    <a href="http://localhost:3000/">
                                        <div className="content-overlay">
                                        </div>
                                        <div class="flex-item">
                                            <img src="http://localhost:3000/images/Website_2.jpg" />
                                        </div>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">Elephant Park London</h3>
                                            <p className="content-text">Front-end web development and UX Design.<br></br>Created using Sitecore.</p>
                                        </div>
                                    </a>
                            </div>
                        </div>

                        <div class="flex-cell">
                            <div className="content">
                                    <a href="http://localhost:3000/">
                                        <div className="content-overlay">
                                        </div>
                                        <div class="flex-item">
                                            <img src="http://localhost:3000/images/Website_3.jpg" />
                                        </div>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">Basus Home Website</h3>
                                            <p className="content-text">Front-end web development and UX Design.<br></br>Created using Square Space.</p>
                                        </div>
                                    </a>
                            </div>
                        </div>

                        <div class="flex-cell">
                            <div className="content">
                                    <a href="http://localhost:3000/">
                                        <div className="content-overlay">
                                        </div>
                                        <div class="flex-item">
                                            <img src="http://localhost:3000/images/Logo_1.jpg" />
                                        </div>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">Basus Home Logo</h3>
                                            <p className="content-text">Logo design.<br></br>Created using Photoshop.</p>
                                        </div>
                                    </a>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    )
};
    
export default Portfolio;