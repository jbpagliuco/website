import React from "react";
import { Link } from "react-router-dom";

import { scrollToId } from "services/scroll";

require("./styles.css");

export default class DeveloperHome extends React.Component {
    render() {
        return (
            <div className="dev-home">
                <div className="dev-home-tint">
                    <div className="dev-home-text-container">
                        <h1>My Software Developer Portfolio</h1>
                        <h2>Hey there! This is where you can see what I've been working lately within the realm of Software Development!</h2>
                        <div className="dev-home-toc">
                            <Link to="/asatruth" className="dev-home-toc-item">Asatruth</Link>
                            <Link to="/developer/raytracingengine" className="dev-home-toc-item">Ray Tracing Engine</Link>
                            <Link to="/developer/gameengine" className="dev-home-toc-item">Real-time Graphics Engine</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}