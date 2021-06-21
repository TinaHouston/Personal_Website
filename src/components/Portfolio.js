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
                                            <img src="http://localhost:3000/images/Art_5.jpg" />
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
                                            <img src="http://localhost:3000/images/Art_6.jpg" />
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
                                            <img src="http://localhost:3000/images/Art_7.jpg" />
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
                                            <img src="http://localhost:3000/images/Art_8.jpg" />
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
                                            <img src="http://localhost:3000/images/Art_9.jpg" />
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
                                            <img src="http://localhost:3000/images/Art_10.jpg" />
                                        </div>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">CC News</h3>
                                            <p className="content-text">Java app using Weather and News API's<br></br>with a Java backend.</p>
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