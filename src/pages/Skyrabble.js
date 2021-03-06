import React from 'react';
import {BrowserRouter as Route, Switch} from 'react-router-dom';
    
const Skyrabble = () => {

    return (
        <div className="webdev-title">
        <h1><span className="skyrabble-title">Skyrabble</span></h1>
        <h3><span className="skyrabble-title2">Software Development</span></h3>
        <p> A flight based app allowing users to enter their location<br></br>using the What 3 Words API and show a list<br></br>of flights in their area pulled from the Open Sky API</p>
        <h4>What tools were used?</h4>
        <p>JavaScript, MongoDB, React, Express, CSS, HTML5.</p>
        <h4>What did I learn from this project?</h4>
        <p>This was an opportunity to use all the JavaScript skills and knowledge<br></br>I picked up from the previous 4 weeks to create something<br></br>I could imagine using in the real world. I wanted this app to have<br></br>a clear user journey and make sure it was easy to use<br></br>whilst showing off many of the things we learned throughout the project,<br></br>myself and my group wanted to push our knowledge and create functionalities<br></br>we hadn't necessarily learned to show off what we could do.</p>
        <h4>Group or Individual project?</h4>
        <p>This was a group project, we took an agile approach<br></br>to this project with myself as the Scrum Master.</p>
        <h4>How long did the project take?</h4>
        <p>This project was started from scratch and took 6 days in total.</p>
        <div className="webdev">
            <Switch>
                <Route exact path="/skyrabble"></Route>
            </Switch>
            <div class="skyrabble-container in-from-left">
                <a href = "https://skyrabble.herokuapp.com/" target = "_blank"><img className="skyrabble-image" src="https://christina-houston-portfolio.web.app/images/Art_1.jpg" height="800"/></a>
                    <div class="art-overlay">
                    </div>
            </div>
        </div>
        <div className="buttons">
        <a href="https://skyrabble.herokuapp.com/"><button><i class="fas fa-chevron-left"></i>See Skyrabble in action</button></a>
        <a href="https://github.com/TinaHouston/SkyRabble"><button><i class="fas fa-chevron-left"></i>See the code</button></a>
        <a href="https://christina-houston-portfolio.web.app/portfolio"><button><i class="fas fa-chevron-left"></i>Back to portfolio</button></a>
        </div>
        </div>
    )
}
    
export default Skyrabble;