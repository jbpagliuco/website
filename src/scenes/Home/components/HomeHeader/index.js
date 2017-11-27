import React from "react";
import { Link } from "react-router-dom";
import ReactResizeDetector from "react-resize-detector";

import { scrollToId } from "services/scroll";

require("./styles.css");

export default class HomeHeader extends React.Component {
    constructor() {
        super();

        this.state = {
            betweenHighlight: this.getBetweenHighlights()
        };
    }

    getBetweenHighlights = () => {
        return (window.innerHeight < window.MOBILE_BREAKING_POINT) ? 
            <span className="nospace"><br/>and<br/></span> : 
            <span className="nospace">&nbsp;and&nbsp;</span>;
    }

    onResize = () => {
        this.setState({
            betweenHighlight: this.getBetweenHighlights()
        });
    }

    render() {
        return (
            <div className="home-header-container">
                <div className="home-header-video" />
                <div className="home-header-text-container">
                    <h1 class="home-header-name">Hi, I'm Joseph Pagliuco</h1>
                    <h2 className="home-header-subtitle-container">
                        <span className="home-header-subtitle-highlight" onClick={scrollToId.bind(null, "dev")}>Software Engineer</span>
                        {this.state.betweenHighlight}
                        <span className="home-header-subtitle-highlight" onClick={scrollToId.bind(null, "mus")}>Musician</span>
                    </h2>
                </div>
                
                <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
            </div>
        );
    }
}