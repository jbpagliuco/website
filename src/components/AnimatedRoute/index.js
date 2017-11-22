import React from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { Element as ScrollerElement } from "react-scroll";

import { ScrollToTopOnMount } from "components/Scroll";

require("./styles.css");

export default class AnimatedRoute extends React.Component {

    childrenRenderer = ( { match } ) => {
        const Component = this.props.component;

        return (
            <CSSTransition
                in={!!match}
                unmountOnExit
                timeout={700} 
                classNames={this.props.classNames}
            >
                <div className="nospace fullsize">
                    <ScrollToTopOnMount />
                    <Component {...this.props.props} />
                </div>
            </CSSTransition>
        );
    }
    
    render() {
        return (
            <Route 
                exact={this.props.exact || false}
                path={this.props.path}
                children={this.childrenRenderer}
            />
        );
    }
}