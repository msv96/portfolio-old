import React from "react";

function Projects() {
    return (
        <div className="project">
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
                    fill="hsl(0, 0%, 100%)"
                    stroke="hsl(210, 10%, 15%)"
                ></path>
            </svg>
            <div id="projects" className="projects">
                <div className="card">PROJECTS</div>
                <div className="cardline"></div>
            </div>
        </div>
    );
}

export default Projects;
