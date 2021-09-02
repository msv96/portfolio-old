import React from "react";

function Home() {
    return (
        <div className="content" id="home">
            <div className="intro">
                Hi, I'm <span className="myname">Srinivas</span>.
                <br />
                Learning Full-Stack Developer
                <br />
                Course at GUVI.
            </div>
            <a
                href="https://drive.google.com/file/d/1l9QeXd27c1imiMJbhtzPgpe19-jGgWn2/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
            >
                <button type="submit" className="btn btn1">
                    View Resume
                </button>
            </a>
            <a href="./assets/Srini Resume.pdf">
                <button type="submit" className="btn btn2">
                    Download Resume
                </button>
            </a>
        </div>
    );
}

export default Home;
