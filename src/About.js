import React from "react";

function About() {
    return (
        <div id="about" className="about">
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
                >
                </path>
            </svg>
            <div className="card">ABOUT</div>
            <div className="about_content">
                <img src="./assets/img.png" alt="myimage" className="image" />
            </div>
        </div>
    );
}

export default About;
