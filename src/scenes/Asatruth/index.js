import React from "react";

import PageContainer from "components/PageContainer";

require("./styles.css");

export default class Asatruth extends React.Component {
    componentDidMount() {
        const nav = document.getElementById("nav");
        nav.classList.add("nav-asatruth");
    }

    componentWillUnmount() {
        const nav = document.getElementById("nav");
        nav.classList.remove("nav-asatruth");
    }

    render() {
        return (
            <PageContainer className="asa-container" backgroundImage="/public/images/bkg/asatruth.jpg" tint={0.2}>
                <div className="asa-content-container">
                    <h1>Asatruth</h1>
                    <p>
                        Around the 12th century, the Norse gods were all been locked up in a Christian dominated Sweden. After hundreds of years, they've been abandoned and forgotten about. Now, the world must rebuild itself after a recent global nuclear war that has brought mutations, destruction, and death. In Sweden, a group of people have gained superhuman abilities from the radiation caused by the war. Claiming to be the Second Coming of Jesus, they have taken Sweden into their own hands. After being forced to follow and obey The Prophet, a small resistance has emerged with a goal to return Sweden to its former glory under the Asatru religion.
                    </p>
                    <p>
                        <strong>Asatruth</strong> is a 2D metroidvania game, inspired by Norse mythology. The player takes control of Thor in an effort to take back Sweden from its superhuman captors. Exploring the large world, you will rescue other gods, save those who have been enslaved, and defeat all of the bosses that lie ahead.
                    </p>
                    <p>
                        We are still early in development, but expect to see something soon!
                    </p>
                </div>
            </PageContainer>
        );
    }
}