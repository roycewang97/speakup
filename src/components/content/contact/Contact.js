import React, {Component} from "react";
import "./Contact.css";

class Contact extends Component {

    render() {
        return <div className="contact-container">
            <div className="contact-item"> 
                <h2> Email </h2>
                <p> royce.wang.lund@gmail.com </p>
                <p> 
                    Please include the “SpeakUp - Session type” in the subject line. 
                    Don’t forget to email/name of person that referred you.
                    I will normally reply within 2-3 business days.
                </p>
                <h2> FAQ </h2>
                <h3> Is this program for me? </h3>
                <p> Any background is welcome. I normally help founders, technical professionals,
                    and students (ESL, grad, undergrad, and high school). </p>
                <h3> How do I pay? </h3>
                <p> Through PayPal. Will send you more information through email.</p>
                <h3> Discretion? </h3>
                <p> This is a sensitive learning environment. No information shared with me will ever
                    be disclosed outside of the meetings. No need for NDAs. </p>
                <p> Don’t forget to credit the name of person that referred you. </p>  
            </div>
        </div>
    }
}

export default Contact;