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
                            <div class="flex-item">1</div>
                        </div>
                        <div class="flex-cell">
                            <div class="flex-item">2</div>
                        </div>
                        <div class="flex-cell">
                            <div class="flex-item">3</div>
                        </div>
                        <div class="flex-cell">
                            <div class="flex-item">4</div>
                        </div>
                        <div class="flex-cell">
                            <div class="flex-item">5</div>
                        </div>
                        <div class="flex-cell">
                            <div class="flex-item">6</div>
                        </div>
                        <div class="flex-cell">
                            <div class="flex-item">7</div>
                        </div>
                        <div class="flex-cell">
                            <div class="flex-item">8</div>
                        </div>
                    </div>
                </div>
        </div>
    )
};
    
export default Portfolio;