import React from "react";

function About() {
    return (
        <div id="about" className="abt">
            <svg
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                height="100"
                width="100%"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 0 L50 97 L100 0"
                    fill="hsl(210, 10%, 15%)"
                    stroke="hsl(210, 10%, 15%)"
                ></path>
            </svg>
            <div className="about">
                <div className="card">ABOUT</div>
                <div className="cardline"></div>
                <div className="about_content">
                    <img
                        src="./assets/img.png"
                        alt="myimage"
                        className="image"
                    />
                    <div>
                        <h3>Who's this guy?</h3>
                        <div className="about_me">
                            Lives in Erode. Looking for a developer job where I
                            can learn more and contribute my knowlodge to the organization.
                        </div>
                    </div>
                </div>
                <div className="about_content">
                    <div>
                        <div class="hexagon">
                            <i class="far fa-tachometer-alt"></i>
                        </div>
                        <h2>Fast</h2>
                        <div className="about_me">
                            Fast load times and lag free interaction, my highest
                            priority.
                        </div>
                    </div>
                    <div>
                        <div class="hexagon">
                            <i class="far fa-mobile-alt"></i>
                        </div>
                        <h2>Responsive</h2>
                        <div className="about_me">
                            My layouts will work on any device, big or small.
                        </div>
                    </div>
                    <div>
                        <div class="hexagon">
                            <i class="far fa-lightbulb"></i>
                        </div>
                        <h2>Intuitive</h2>
                        <div className="about_me">
                            Strong preference for easy to use, intuitive UX/UI.
                        </div>
                    </div>
                    <div>
                        <div class="hexagon">
                            <i class="far fa-rocket"></i>
                        </div>
                        <h2>Dynamic</h2>
                        <div className="about_me">
                            Websites don't have to be static, I love making
                            pages come to life.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
