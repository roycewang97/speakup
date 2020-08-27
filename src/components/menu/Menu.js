import React, {Component} from "react";
import "./Menu.css";
import Brand from "/Users/roycewang/Desktop/speakup/src/components/content/images/SpeakUp_Brand@2x.png";

class Menu extends Component {

    render() {
        return <div className="menu-container">
            <div className="menu-title"> 
                <img className="brand-logo" src={Brand} alt="brand"/>
                <p className="brand-text"> SpeakUp </p>
            </div>
            <div className="program-container">
                <h2 className="program-text"> Program </h2>
                <p className="menu-text"> Delivery </p>
                <p className="menu-text"> Narrative </p>
                <p className="menu-text"> Organization </p>
                <p className="menu-text"> Visual Aids </p>
                <p className="menu-text"> Q & A </p>
                <p className="menu-text"> Pitching </p>
                <p className="menu-text"> Technical Info </p>
            </div>
        </div>
    }
}

export default Menu;