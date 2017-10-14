import React from "react";
import { Link } from "react-router-dom";

import HomeHeader from "./components/HomeHeader";
import HomeBio from "./components/HomeBio";
import HomeRoles from "./components/HomeRoles";

require("./styles.css");

class BioSection extends React.Component {
    render() {
        return (
            <div className="home-bio-section">
                {this.props.children}
            </div>
        );
    }
}

export default class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <HomeHeader />
                <HomeBio />
                <HomeRoles />
            </div>
        );
    }
}