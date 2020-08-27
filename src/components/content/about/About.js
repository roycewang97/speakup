import React, {Component} from "react";
import "./About.css";
import Profile from "/Users/roycewang/Desktop/speakup/src/components/content/images/Portfolio_profile_pic.jpg";

class About extends Component {

    render() {
        return<div className="bio-container"> 
            <img className="profile-pic"src={Profile} alt="Royce Wang"/>
            <div>
                <p> I’m Royce and I used to teach Public Speaking (ENGR 103) at Stanford as a TA. </p>
                <br/>
                <p> I’m an entrepreneur and an aspiring VC.  </p>
                <p> I created this venture to help people to improve their public speaking skills. </p>
                <br/>
                <p> My background is in design and in software development. </p>
                <p> I used to fence for Stanford and for the Taiwanese National Team.  </p>
                <p> Now, I’m traveling around the world and researching for new problems to solve. </p>
                <p> Currently, I’m living in Sweden. </p>   
            </div>
        </div>
    }
}

export default About;