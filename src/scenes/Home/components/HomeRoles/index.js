import React from "react";

import DeveloperRole from "components/Roles/Developer";
import MusicianRole from "components/Roles/Musician";

require("./styles.css");

export default class HomeRoles extends React.Component {
    render() {
        return (
            <div className="home-roles-container">
                <DeveloperRole id="dev" showPortfolioButton={true}/>
                <MusicianRole id="mus" showPortfolioButton={true}/>
            </div>
        );
    }
}