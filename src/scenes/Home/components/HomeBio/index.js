import React from "react";

require("./styles.css");

const getSocialMediaIcon = (icon, link) => {
    const image = "public/sm/Social Media Icons/SVG/Square Color/" + icon + ".svg";
    
    return (
        <a href={link} target="_blank">
           <img className="sm-icon" src={image} width={50} height={50} />
        </a>
    );
}

class BioSection extends React.Component {
    render() {
        return (
            <div className={"home-bio-section " + this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export default class HomeBio extends React.Component {
    render() {
        return (
            <div className="home-bio-container">
                <h1 className="home-bio-title">About Me</h1>
                <div className="home-bio-text-container">
                    <BioSection>
                        <p>
                            My passion lies in creating a fantastic user experience, whether through stunning visuals, smooth and fun interactions, or amazing music. <strong>Behind the computer</strong>, I experiment with game development, computer graphics, and web design. <strong>Behind a drumset</strong>, I jam with friends and perform live for the crowd. If I'm not doing those, chances are you'll find me gaming, cooking, or learning how to sing.
                        </p>
                    </BioSection>

                    <BioSection>
                        <p>
                            I am in my final year of studying Computer Science at the University of Illinois at Urbana-Champaign. As I wrap up my collegiate adventure, I aspire to be a professional game developer. On my way there, I am creating my 2d Norse mythology inspired game, Asatruth.
                        </p>
                    </BioSection>

                    <BioSection>
                        <p>
                            If you would like to connect with me, then please send me an email at&nbsp;
                            <a href="mailto:jbpagliuco@gmail.com">jbpagliuco@gmail.com</a>,
                            or check out the links below.
                        </p>
                    </BioSection>

                    <BioSection className="home-bio-sm-container">
                        {getSocialMediaIcon("Linkedin", "https://www.linkedin.com/in/josephpagliuco/")}
                        {getSocialMediaIcon("Github", "https://github.com/jbpagliuco")}
                        {getSocialMediaIcon("Facebook", "https://www.facebook.com/joe.pagliuco.5")}
                        {getSocialMediaIcon("YouTube", "https://www.youtube.com/channel/UCwREXzCz_uTIzuHgkZ_kgoQ?view_as=subscriber")}
                    </BioSection>
                </div>
            </div>
        );
    }
}