import React from "react";

import PageContainer from "components/PageContainer";

require("./styles.css");

export default class Musician extends React.Component {
    render() {
        return (
            <PageContainer className="mus-container" backgroundImage="/public/images/bkg/BKG_Mus2.jpg" tint={0.3}>
                <div className="mus-content-container">
                    <h1>My Musician Portfolio</h1>
                    <p>
                        Nothing here quite yet. I will be working on recording covers and originals, so check back soon!
                    </p>
                </div>
            </PageContainer>
        );
    }
}