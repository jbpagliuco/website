import React from "react";

require("./styles.css");

export default class PageContainer extends React.Component {
    render() {
        const style = {
            backgroundImage: "linear-gradient( rgba(0, 0, 0, " + this.props.tint + "), rgba(0, 0, 0, " + this.props.tint + ")), " + "url(" + this.props.backgroundImage + ")",
        };

        let className = "pagecontainer";
        if (this.props.className)
            className += " " + this.props.className;

        return (
            <div className={className} style={style}>
                {this.props.children}
            </div>
        );
    }
}