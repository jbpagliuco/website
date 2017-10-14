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
            <div className="">
                <DeveloperHome />

                <div className="developerpage-item-cover">
                    <AnimatedRoute
                        classNames="fade"
                        exact={true}
                        path="/developer/raytracingengine"
                        component={RayTracerEngine} />
                        
                    <AnimatedRoute
                        classNames="fade"
                        exact={true}
                        path="/developer/gameengine"
                        component={GraphicsEngine} />
                </div>
            </div>
        );
    }
}