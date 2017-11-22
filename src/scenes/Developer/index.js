import React from "react";
import { Route } from "react-router-dom";
import AnimatedRoute from "components/AnimatedRoute";
import { ScrollToTopOnMount } from "components/Scroll";

import DeveloperHome from "./components/DeveloperHome";
import GraphicsEngine from "./components/GraphicsEngine";
import RayTracerEngine from "./components/RayTracerEngine";

require("./styles.css");

export default class DeveloperPage extends React.Component {
    render() {
        return (
            <div className="nospace">
                <AnimatedRoute
                    classNames="fade"
                    exact={true}
                    path="/developer"
                    component={DeveloperHome} />

                <AnimatedRoute
                    classNames="fade"
                    path="/developer/raytracingengine"
                    component={RayTracerEngine} />
                    
                <AnimatedRoute
                    classNames="fade"
                    path="/developer/graphicsengine"
                    component={GraphicsEngine} />
            </div>
        );
    }
}