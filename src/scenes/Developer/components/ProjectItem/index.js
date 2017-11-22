import React from "react";
import { Grid, Col } from "react-bootstrap";

require("./styles.css");

export default class ProjectItem extends React.Component {
    render() {
        return (
            <div className="projectitem-container">
                <div className="projectitem-content-container">
                    <h1 className="projectitem-title">
                        {this.props.title}
                    </h1>

                    <h2 className="projectitem-desc">{this.props.description}</h2>

                    <Grid className="projectitem-info-container">
                        <Col md={6} className="projectitem-info-panel">
                            <div className="projectitem-info-panel-content">
                                {this.props.left}
                            </div>
                        </Col>
                        
                        <Col md={6}  className="projectitem-info-panel">
                            <div className="projectitem-info-panel-content">
                                {this.props.right}
                            </div>
                        </Col>
                    </Grid>

                    <div className="projectitem-display-container">
                        {this.props.display}
                    </div>
                </div>
            </div>
        );
    }
}