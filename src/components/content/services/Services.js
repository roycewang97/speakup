import React, {Component} from "react";
import "./Services.css";
class Services extends Component {

    render() {
        return <div className="service-container">
            <div className="service-item"> 
                <div className="service-text-container">
                    <p className="service-title"> Personal Tutorial </p>
                    <p> 
                        30 Minute Individual Zoom Lessons covering program content.
                        Activities and live feedback to help you to become a better speaker.
                        Will help build you up as a presenter. Finding your personal style.
                    </p>
                </div>
                <div className="price-container">
                    <p> $25 </p>
                </div>
            </div>
            <div className="service-item"> 
                <div className="service-text-container">
                    <p className="service-title"> Custom Feedback </p>
                    <p>
                        Have an upcoming presentation? I’m here to help. 30 Minutes - Provide exactly
                        what you need. Practice as much as you want. At the end, you’ll feel
                        confident about that upcoming presentation.
                    </p>
                </div>
                <div className="price-container">
                    <p> $30 </p>
                </div>
            </div>
            <div className="service-item"> 
                <div className="service-text-container">
                    <p className="service-title"> Pitch Deck Review </p>
                    <p>
                        Submit your pitch deck fo review in the Dropbox tab. This includes an 
                        additional custom feedback session, where you pitch and 
                        I provide live-feedback and personal training. If you refer someone and they complete a session, there 's a $10 reward for each referral.
                    </p>
                </div>
                <div className="price-container">
                    <p> $50 </p>
                </div>
            </div>
        </div>
    }
}

export default Services;