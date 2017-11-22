import React from "react";
import { Link } from "react-router-dom";
import { Grid, Col } from "react-bootstrap";

import { scrollToId } from "services/scroll";

require("./styles.css");

export default class DeveloperHome extends React.Component {
    getImage(opt) {
        const style = {
            backgroundImage: "url(" + opt.bkgImg + ")"
        };

        const md = window.innerWidth > 1400 ? 6 : 12;
        
        return (
            <Link className="dev-home-toc-item-container" to={opt.to} >
                <h2 className="dev-home-toc-item-title">{opt.text}</h2>
                <div className="dev-home-toc-item-text-container" style={style}>
                    <p className="dev-home-toc-item-desc">{opt.desc}</p>
                </div>
            </Link>
        );
    }

    render() {
        return (
            <div className="dev-home">
                <div className="dev-home-text-container">
                    <h1>My Software Engineer Portfolio</h1>
                    <Grid className="dev-home-toc">
                        {this.getImage({
                            to: "/asatruth",
                            text: "Asatruth",
                            desc: "A 2D pixel art game",
                            bkgImg: "/public/images/bkg/asatruth.jpg"
                        })}
                        
                        {this.getImage({
                            to: "/developer/raytracingengine",
                            text: "Ray Tracing Engine",
                            desc: "High quality image renderer",
                            bkgImg: "/public/images/rte/zebralow.png"
                        })}

                        {this.getImage({
                            to: "/developer/graphicsengine",
                            text: "Graphics Engine",
                            desc: "Real-time rendering engine",
                            bkgImg: "/public/images/bkg/graphicsengine.jpg",
                        })}
                    </Grid>
                </div>
            </div>
        );
    }
}