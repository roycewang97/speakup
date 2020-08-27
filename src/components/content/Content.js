import React, {Component} from "react";
import "./Content.css";
import Nav from "./nav/Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./about/About";
import Contact from "./contact/Contact";
import Services from "./services/Services";
import Dropbox from "./dropbox/Dropbox";

class Content extends Component {

    render() {
        return <div className = "content-container">
            <Router>
                <Nav/>
                <div className = "content-selection">
                    <Switch>
                        <Route exact path = "/about">
                            <About/>
                        </Route>
                        <Route exact path = "/services">
                            <Services/>
                        </Route>
                        <Route exact path = "/dropbox">
                            <Dropbox/>
                        </Route>
                        <Route exact path = "/contact">
                            <Contact/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    }
}

export default Content;