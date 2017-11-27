import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Grid, Col } from "react-bootstrap";
import ReactResizeDetector from 'react-resize-detector';

import { scrollToTop } from "services/scroll";

require("./styles.css");

export default class Nav extends React.Component {
    constructor() {
        super();

        this.MINI_IMAGE_SIZE = 40;
        this.oldWidth = window.innerWidth;
        this.state = {
            navLinks: this.getNavLinks()
        };
    }

    getNavLinks = () => {
        if (window.innerWidth < window.MOBILE_BREAKING_POINT) {
            return this.getMiniNavLinks();
        }
        else {
            return this.getFullSizeNavLinks();
        }
    }

    getFullSizeNavLinks = () => {
        return (
            <Col className="nospace" md={6}>
                <ul className="nav-links">
                    <h2 className="nav-link-container">
                        <NavLink exact className="nav-link" to="/" activeClassName="nav-link-active" onClick={scrollToTop}>
                            <h2 className="nospace nav-sectiontext">Home</h2>
                        </NavLink>
                    </h2>
                    
                    <h2 className="nav-link-container">
                        <NavLink className="nav-link" to="/developer" activeClassName="nav-link-active"onClick={scrollToTop}>
                            <h2 className="nospace nav-sectiontext">Software Engineer</h2>
                        </NavLink>
                    </h2>
                    
                    <h2 className="nav-link-container">
                        <NavLink className="nav-link" to="/musician" activeClassName="nav-link-active" onClick={scrollToTop}>
                            <h2 className="nospace nav-sectiontext">Musician</h2>
                        </NavLink>
                    </h2>

                    <h2 className="nav-link-container">
                        <NavLink className="nav-link" to="/Asatruth" activeClassName="nav-link-active">
                            {/* <img src="/public/images/logo/AsatruthLogo.png" height={51}/> */}
                            <h2 className="nospace nav-sectiontext nav-link-asatruth">Asatruth</h2>
                        </NavLink>
                    </h2>
                </ul>
            </Col>
        );
    }

    getMiniNavLinks = () => {
        const navHeight = (window.innerWidth < window.MOBILE_BREAKING_POINT) ? this.MINI_IMAGE_SIZE : 75;
        return (
            <Col className="nospace" xs={6}>
                <img className="nav-mini-button" src="/public/images/icon/navbarmini.png" width={navHeight} height={navHeight} />
            </Col>
        );
    }


    onResize = () => {
        const nw = window.innerWidth;
        const bp = window.MOBILE_BREAKING_POINT;
        const goFull = (this.oldWidth < bp && nw > bp);
        const goMini = (this.oldWidth > bp && nw < bp);
        if (goFull || goMini) {
            this.setState({
                navLinks: this.getNavLinks()
            });
        }
        
        this.oldWidth = nw;
    }
    
    render() {
        const navHeight = (window.innerWidth < window.MOBILE_BREAKING_POINT) ? this.MINI_IMAGE_SIZE : 75;
        return (
            <Grid id="nav" className="nav">
                <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />

                <Col className="nav-logo-container" xs={6} onClick={scrollToTop}>
                    <img className="nav-logo" src="/public/images/logo/Logo4.png" height={navHeight} />
                </Col>

                {this.state.navLinks}
            </Grid>
        );
    }
}