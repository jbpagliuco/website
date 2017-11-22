import React from "react";
import { Carousel } from "react-bootstrap";

import ProjectItem from "../ProjectItem";

require("./styles.css");

const images = [
    {
        link: "zebralow.png",
        description: "A shot of zebra in a grassy plain."
    },
    {
        link: "reflective.png",
        description: "Reflective surfaces."
    },
    {
        link: "glossy.png",
        description: "A scene featuring glossy and perfect specular reflection."
    },
    {
        link: "mirror-sphere.png",
        description: "A ball looking into a mirror."
    },
    {
        link: "mirror.png",
        description: "Two mirrors infinitely reflecting off of eachother."
    },
    {
        link: "mirror-area.png",
        description: "Two mirrors infinitely reflecting off of eachother with area lighting."
    },
    {
        link: "spheres-alot.png",
        description: "A scene with over 100,000 spheres (rendered very quickly!)"
    },
    {
        link: "transparent.png",
        description: "A scene with a transparent bunny."
    },
];

export default class RayTracerEngine extends React.Component {
    getImage = (image, i) => {
        const size = (window.innerWidth > 2000) ? 1000 : 500;
        return (
            <Carousel.Item key={i}>
                <img className="rte-image" src={"/public/images/rte/" + image.link}/>
                <Carousel.Caption>
                    <p className="rte-imagedesc">{image.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        );
    }

    getLongDescription = () => {
        return (
            <div className="nospace">
                <p>
                    This was a project for the course CS 419, called Production Computer Graphics. The result of about half a semester's work was a Monte Carlo rendering engine. From a scene description, the engine could produce high quality images, with features such as area lighting and soft shadows, perfect and glossy reflections, and transparency.
                </p>

                <p>
                    Due to using Monte Carlo techniques, several samples were taken per pixel to result in a smooth image, and this meant long rendering times. To help alleviate this, I implemented several acceleration techniques. The first thing I did was to use geometric data structures for the world, namely regular grids and KD-trees. The second was parallelizing the rendering process over multiple CPU cores.
                </p>
            </div>
        );
    }

    getInfo = () => {
        return (
            <div className="nospace">
                <p><strong>Date</strong>: Spring 2017 semester</p>
                <p><strong>Language used</strong>: C++</p>
                <p>
                    <strong>Code Repository</strong>:&nbsp;
                    <a href="https://github.com/jbpagliuco/RayTracer-v2" target="_blank">https://github.com/jbpagliuco/RayTracer-v2</a>
                </p>
            </div>
        );
    }

    getDisplay = () => {
        return (
            <div className="nospace">
                <p>Images rendered by the engine</p>
                <Carousel className="rte-imagecarousel">
                    {images.map(this.getImage)}
                </Carousel>
            </div>
        );
    }

    render() {
        return (
            <div className="rte-container transition-item">
                <ProjectItem
                    title="Ray Tracing Engine"
                    description="A rendering engine used to produce high quality images from a 3d scene"
                    left={this.getLongDescription()}
                    right={this.getInfo()}
                    display={this.getDisplay()}
                    />
            </div>
        );
    }
}