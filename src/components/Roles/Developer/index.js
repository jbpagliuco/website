import React from "react";
import { Link } from "react-router-dom";

require("./styles.css");
require("../styles.css");

export default class RoleDeveloper extends React.Component {
    onPortfolioClick = () => {
        const e = document.getElementById("dev");
        window.localStorage.setItem("scroll.dev", Math.min(e.getBoundingClientRect().top, screen.height));
    }

    getLastParagraph = () => {
        if (this.props.showPortfolioButton) {
            return "Since then, I've been able to work on 2 large projects for classes here at UIUC. The first was a real time graphics engine, with lighting, reflections, skyboxes, shadows, object scripting, and more. The second was a production-level ray tracing engine, built to render high quality and realistic images from flexible user-defined scenes. Both of these can be seen in my developer portfolio, linked below.";
        }
        else {
            return "Since then, I've been able to work on 2 large projects for classes here at UIUC. The first was a real time graphics engine, with lighting, reflections, skyboxes, shadows, object scripting, and more. The second was a production-level ray tracing engine, built to render high quality and realistic images from flexible user-defined scenes. Both of these can be seen below.";
        }
    }

    getPortfolioLink = () => {
        if (!this.props.showPortfolioButton) {
            return <div className="nospace" />
        }
        else {
            return (
                <Link to="/developer" onClick={this.onPortfolioClick}>
                    <button className="role-viewportfolio role-dev-viewportfolio">View my developer portfolio</button>
                </Link>
            );
        }
    }

    render() {
        return (
            <div id={this.props.id} className="role-container">
                <img className="role-image" src="public/images/bkg/BKG_Dev.jpg" />
                <div className="role-text role-dev-text">
                    <h1 className="role-text-title">Software Developer</h1>
                    <div className="role-text-main">
                        <p>
                            Believe it or not, after studying Computer Science for several years, I consider myself a software developer. My journey began in highschool with a calculator, trying to make my life easier by making programs for my math classes. Eventually, I got behind the keyboard and began learning Visual Basic and Java (those were dark times). All this was around the time Skyrim was out, and I spent countless hours playing it. I realized that I was utterly fascinated by what I was seeing... an entire world, within my PS3.
                        </p>
                        <p>
                            I quickly found myself buying books on computer graphics and trying to figure out how it all worked. I started by implementing a wireframe 3d graphics pipeline in Java for a highschool project. After that, I learned how to use XNA with C#, then DirectX and OpenGL with C++. I started making more complicated engines, playing around with lighting, terrain, and whatever else I could think of.
                        </p>
                        <p>
                            {this.getLastParagraph()}
                        </p>
                    </div>
                    {this.getPortfolioLink()}
                </div>
            </div>
        );
    }
}