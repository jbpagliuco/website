import React from "react";

export default (text, props) => {
    text = text.replace(/\n|\r\n/g, "<br/>");
    const replacers = {
        "\n": "<br/>",
        "\r\n": "<br/>",
    };

    const containerClass = "nospace " + (props.className || "");
    delete props.className;
    return (
        <div className={containerClass} {...props}>
            {text}
        </div>
    )
}