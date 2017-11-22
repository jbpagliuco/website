import React from "react";

import ProjectItem from "../ProjectItem";

require("./styles.css");

export default class GraphicsEngine extends React.Component {
    getLongDescription = () => {
        return (
            <div className="nospace">
                <p>
                    I have always loved learning how huge systems such as game engines work, and this was my first attempt at creating my own. The main reason for making it was to help me complete homework assignments for CS 418, a course on computer graphics. I decided to take the class a step further, and build a flexible graphics engine.
                </p>
                <p>
                    The engine was created using C++, OpenGL, and Lua. It allowed me to easily define scenes without any additional programming or recompilation of the engine. In a scene file, I could create any number of objects, and each object could use any combination of the built-in components, such as a mesh renderer, materials, and runtime Lua script controllers. In the end, I was able to render a scene with tons of cool properties, like lighting, shadows, reflections, and skyboxes. Below are a few short demos.
                </p>
            </div>
        );
    }

    getInfo = () => {
        return (
            <div className="nospace">
                <p><strong>Date</strong>: Spring 2016 semester</p>
                <p><strong>Language used</strong>: C++, Lua</p>
                <p><strong>Other technologies used</strong>: OpenGL</p>
                <p>
                    <strong>Code Repository</strong>:&nbsp;
                    <a href="https://github.com/jbpagliuco/CS418Engine" target="_blank">https://github.com/jbpagliuco/CS418Engine</a>
                </p>
            </div>
        );
    }

    getDisplay = () => {
        return (
            <div className="nospace">
                <strong>Video demos</strong>
                <div className="ge-display-container">
                    <iframe
                        className="ge-video"
                        src="https://www.youtube.com/embed/videoseries?list=PLe27dA7aKQtUqdCtAziwOvw7A41XrDR40&index=1"
                        allowFullScreen
                        onTouchStart={e=>{e.preventDefault()}}
                        onTouchMove={e=>{e.preventDefault()}}
                        >
                    </iframe>
                    <iframe
                        className="ge-video"
                        src="https://www.youtube.com/embed/videoseries?list=PLe27dA7aKQtUqdCtAziwOvw7A41XrDR40&index=2"
                        allowFullScreen
                        onTouchStart={e=>{e.preventDefault()}}
                        onTouchMove={e=>{e.preventDefault()}}
                        >
                    </iframe>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="ge-container">
                <ProjectItem
                    title="Graphics Engine"
                    description="A real-time graphics engine used to render and interact with scenes"
                    left={this.getLongDescription()}
                    right={this.getInfo()}
                    display={this.getDisplay()}
                    />
            </div>
        );

        return (
            <div className="ge-container"
                onTouchStart={e=>{e.preventDefault()}}
                onTouchMove={e=>{e.preventDefault()}}
            >
                <div className="ge-desc-container">
                    <h1 className="ge-desc-title">Graphics Engine (2016)</h1>
                    <p>
                        I have always loved learning how huge systems such as game engines work, and this was my first attempt at creating my own. The main reason for making it was to help me complete homework assignments for CS 418, a course on computer graphics. I decided to take the class a step further, and build a flexible graphics engine.
                    </p>
                    <p>
                        The engine was created using C++, OpenGL, and Lua. It allowed me to easily define scenes without any additional programming or recompilation of the engine. In a scene file, I could create any number of objects, and each object could use any combination of the built-in components, such as a mesh renderer, materials, and runtime Lua script controllers. In the end, I was able to render a scene with tons of cool properties, like lighting, shadows, reflections, and skyboxes. Below are a few short demos.
                    </p>
                
                    <div className="ge-iframe-container">
                        <div className="">
                            <iframe
                                className="ge-iframe"
                                src="https://www.youtube.com/embed/videoseries?list=PLe27dA7aKQtUqdCtAziwOvw7A41XrDR40&index=1"
                                allowFullScreen
                                onTouchStart={e=>{e.preventDefault()}}
                                onTouchMove={e=>{e.preventDefault()}}
                            >
                            </iframe>
                        </div>

                        <div className="">
                            <iframe
                                className="ge-iframe"
                                src="https://www.youtube.com/embed/videoseries?list=PLe27dA7aKQtUqdCtAziwOvw7A41XrDR40&index=2"
                                allowFullScreen
                                onTouchStart={e=>{e.preventDefault()}}
                                onTouchMove={e=>{e.preventDefault()}}
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}