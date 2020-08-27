import React,  {Component} from "react";
import "./Dropbox.css";

class Dropbox extends Component {
//this is the dropbox, where I put my email out there.
    render() {
        return <div className="dropbox-container">
            <h2 className="dropbox-title"> Drop Me An Email With These Aspects Filled </h2>
            <div className="dropbox-text"> 
                <p> 1. Who are you? (Founder, VC, Manager, Professional, Student, etc) </p>
                <p> 2. What is the purpose of the pitch? </p>
                <p> 3. When are you free - please include time zone? </p>
                <p> 4. Why are you pitching? </p>
                <p> 5. Who is your audience? </p>
            </div>
            <p className="dropbox-title"> Response Time within 2-3 business days </p>
        </div>
    }
}

export default Dropbox;