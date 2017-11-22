import React from "react";
import { Link } from "react-router-dom";

import { scrollToId } from "services/scroll";

require("./styles.css");

export default class HomeHeader extends React.Component {
    render() {
        return (
            <div className="home-header-container">
                <div className="home-header-video">
                    {/* <video className="home-header" loop muted autoPlay>
                        <source src="public/videos/HomeMain.mp4" type="video/mp4"/>
                    </video> */}
                </div>
                <div className="home-header-text-container">
                    <h1 class="home-header-name">Hi, I'm Joseph Pagliuco</h1>
                    <h2 className="home-header-subtitle-container">
                        <span className="home-header-subtitle-highlight" onClick={scrollToId.bind(null, "dev")}>Software Engineer</span>
                        &nbsp;and&nbsp;
                        <span className="home-header-subtitle-highlight" onClick={scrollToId.bind(null, "mus")}>Musician</span>
                    </h2>
                </div>
            </div>
        );
    }
}