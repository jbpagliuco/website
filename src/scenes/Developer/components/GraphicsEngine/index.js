import React from "react";

require("./styles.css");

export default class GraphicsEngine extends React.Component {
    render() {
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