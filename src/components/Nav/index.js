import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Grid, Col } from "react-bootstrap";

import { scrollToTop } from "services/scroll";

require("./styles.css");

export default class Nav extends React.Component {
    render() {
        return (
            <Grid id="nav" className="nav">
                <Col className="nav-logo-container" md={6} onClick={scrollToTop}>
                    <img className="nav-logo" src="/public/images/logo/Logo4.png" height={75} />
                </Col>

                <Col className="nospace" md={6}>
                    <ul className="nav-links">
                        <h2 className="nav-link-container">
                            <NavLink exact className="nav-link" to="/" activeClassName="nav-link-active" onClick={scrollToTop}>
                                <h2 className="nospace">Home</h2>
                            </NavLink>
                        </h2>
                        <div className="nav-link-separator"/>
                        <h2 className="nav-link-container">
                            <NavLink className="nav-link" to="/developer" activeClassName="nav-link-active"onClick={scrollToTop}>
                                <h2 className="nospace">Developer</h2>
                            </NavLink>
                        </h2>
                        <div className="nav-link-separator"/>
                        <h2 className="nav-link-container">
                            <NavLink className="nav-link" to="/musician" activeClassName="nav-link-active"onClick={scrollToTop}>
                                <h2 className="nospace">Musician</h2>
                            </NavLink>
                        </h2>
                        <div className="nav-link-separator"/>

                        <div className="nav-link-asatruth-separator" />
                        <h2 className="nav-link-container">
                            <NavLink className="nav-link nav-link-asatruth" to="/Asatruth" activeClassName="nav-link-active">
                                <img src="/public/images/logo/AsatruthLogo.png" height={51}/>
                            </NavLink>
                        </h2>
                    </ul>
                </Col>
            </Grid>
        );
    }
}