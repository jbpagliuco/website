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
        let bkgImgSrc = "/public/images/bkg/asatruth/asatruthbkg.png";
        // if (window.innerWidth > 2000)
        //     bkgImgSrc = "/public/images/bkg/asatruth/asatruthbkg_BIG.png";

        return (
            <PageContainer className="asa-container" backgroundImage={bkgImgSrc} tint={0.2}>
                <div className="asa-content-container">
                    <img className="asa-logo-img" src="/public/images/logo/AsatruthLogo2.png" />
                    <p className="asa-desc">
                        <strong className="asa-desc-strong">Asatruth</strong> is a 2D metroidvania game, inspired by Norse mythology. The player takes control of the ancient warrior god Thor in an effort to take back Sweden from its superhuman captors. Exploring the large world, you will rescue other gods, save those who have been enslaved, and defeat all of the bosses that lie ahead.
                    </p>
                    <div className="asa-intro">
                        <p>
                            Introduction
                        </p>
                        <p>
                            In the 12th century, the Christian religion dominated Scandinavia. The fall of the Asatru religion was near. It finally became a reality when the Norse gods were captured and imprisoned by the Christian population. Before long, they were forgotten and just thought of as myth. Centuries later, the world had erupted into World War 3. Every nation was involved, and it quickly became mankind's devastation. 
                        </p>
                        <p>
                            Eventually, the war turned nuclear and brought upon destruction. Every powerful nation shot nuclear missles at eachother, until there was almost nothing left. Mankind was set back thousands of years, with just a fraction of the population remaining. Those who were unlucky enough to survive suffered terrible mutations. In most cases, the mutations just brought upon sickness and death. However, some people had gained superhuman abilities and used these powers to their advantage. They took it upon themselves to rebuild the world, but not always with benevolent intentions.
                        </p>
                        <p>
                            In Sweden, one group has taken control over the remaining populace. Their rise to power stems from their incredible powers caused by the war. More importantly, their leader claims to be the second coming of Jesus Christ, and his partners the reincarnations of other biblical figures. Together, they force the normal people to worship and fear them, in return for food and survival.
                        </p>
                        <p>
                            One night, a bolt of lightning causes Thor to finally wake up...
                        </p>
                    </div>
                    <p>
                        We are still early in development, but expect to see something very soon!
                    </p>
                </div>
            </PageContainer>
        );
    }
}