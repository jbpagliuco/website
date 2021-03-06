import React from "react";
import { Link } from "react-router-dom";

require("./styles.css");
require("../styles.css");

export default class RoleMusician extends React.Component {
    getPortfolioLink = () => {
        if (!this.props.showPortfolioButton) {
            return <div className="nospace" />
        }
        else {
            return (
                <Link to="/musician">
                    <button className="role-viewportfolio role-mus-viewportfolio">View my musician portfolio</button>
                </Link>
            );
        }
    }

    render() {
        return (
            <div id={this.props.id} className="role-container">
                <div className="role-text role-mus-text">
                    <h1 className="role-text-title">Musician</h1>
                    <div className="role-text-main">
                        <p>
                            I've been playing music for as long as I remember. I started with piano when I was around 5 years old. I played for several years, until I eventually tried out the cello. I ended up dropping it so I could join the school band on drums. I enjoyed that a lot, and a few years later my parents got me a drumset, and I've been banging on that thing ever since.
                        </p>
                        <p>
                            A lot of my inspiration stems from Neil Peart (Rush) and Mike Portnoy (Dream Theater). I've been a huge fan of progressive metal ever since I discovered the genre in middle school. However, since joining my band,&nbsp;
                            <a className="role-mus-iclink" href="https://www.facebook.com/illinicontraband/" target="_blank">Illini Contraband</a>
                            ,&nbsp;I find myself listening to just about anything.
                        </p>
                        <p>
                            I never just stick to drumming though. I'm always learning something new, which at the moment happens to be singing (because using 4 body parts at once was too easy). This is also the first time I'm trying my hand at composing for my game&nbsp;
                            <Link className="role-mus-aslink" to="/asatruth">Asatruth</Link>
                            . Check out my portfolio to see what I've been working on!
                        </p>
                    </div>
                    {this.getPortfolioLink()}
                </div>
                <div className="role-image" style={{backgroundImage: "url(/public/images/bkg/BKG_Mus.jpg)"}}/>
            </div>
        );
    }
}