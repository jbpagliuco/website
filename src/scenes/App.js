import React from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import AnimatedRoute from "components/AnimatedRoute";

import Nav from "components/Nav";
import Home from "scenes/Home";
import Developer from "scenes/Developer";
import Musician from "scenes/Musician";

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
                    classNames={{
                        enter: "developerpage-enter",
                        enterActive: "developerpage-enter-active",
                        exit: "developerpage-exit",
                        exitActive: "developerpage-exit-active",
                    }}
                    component={Developer} />
                    
                <AnimatedRoute
                    path="/musician"
                    classNames={{
                        enter: "musicianpage-enter",
                        enterActive: "musicianpage-enter-active",
                        exit: "musicianpage-exit",
                        exitActive: "musicianpage-exit-active",
                    }}
                    component={Musician} />
            </div>
        );
    }
}