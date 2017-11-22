import React from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import AnimatedRoute from "components/AnimatedRoute";

import Nav from "components/Nav";
import Home from "scenes/Home";
import Developer from "scenes/Developer";
import Musician from "scenes/Musician";
import Asatruth from "scenes/Asatruth";

export default class App extends React.Component {
    render() {
        return (
            <div className="page-container">
                <Nav />

                <AnimatedRoute
                    classNames="fade"
                    exact={true}
                    path="/"
                    component={Home} />

                <AnimatedRoute
                    path="/developer"
                    classNames="fade"
                    component={Developer} />
                    
                <AnimatedRoute
                    path="/musician"
                    classNames="fade"
                    component={Musician} />

                <AnimatedRoute
                    classNames="fade"
                    exact={true}
                    path="/asatruth"
                    component={Asatruth} />
            </div>
        );
    }
}