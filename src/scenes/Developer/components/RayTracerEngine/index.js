import React from "react";
import { Carousel } from "react-bootstrap";

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
        return (
            <Carousel.Item key={i}>
                <img width={1000} height={1000} src={"/public/images/rte/" + image.link}/>
                <Carousel.Caption>
                    <p className="rte-imagedesc">{image.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        );
    }

    render() {
        return (
            <div className="rte-container transition-item">
                <div className="ge-desc-container">
                    <h1 className="ge-desc-title">Ray Tracing Engine (2016)</h1>
                    <p>
                        This was a project for the course CS 419, called Production Computer Graphics. The result of about half a semester's work was a Monte Carlo rendering engine, implemented purely in C++. From a scene description, the engine could produce high quality images, with features such as area lighting and soft shadows, perfect and glossy reflections, and transparency. Because this used Monte Carlo techniques, several samples were taken per ray to result in a smooth image, and this meant long rendering times. To help alleviate this, I implemented several acceleration techniques. The first thing I did was to use geometric data structures for the world, namely regular grids and KD-trees. The second was parallelizing the rendering process over multiple CPU cores. Below are some of the pictures rendered by the engine.
                    </p>
                
                    <Carousel className="rte-imagecarousel">
                        {images.map(this.getImage)}
                    </Carousel>
                </div>
            </div>
        );
    }
}