import React from "react";

function Home() {
    return (
        <>
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
            <svg
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
                height="100"
                width="100%"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 0 L50 100 L100 0"
                    fill="hsl(210, 10%, 15%)"
                    stroke="hsl(210, 10%, 15%)"
                ></path>
            </svg>
        </>
    );
}

export default Home;
