import React from "react";

function Home() {
    return (
        <>
            <div className="content" id="home">
                <div className="intro">
                    Hello, I'm <span className="myname">Srinivasan M</span>.
                    <br />
                    A full stack web developer.
                </div>
                <a
                    href="https://drive.google.com/file/d/1WW1-jrMzyZqd8L-Rug9ehVWVNRSJWbxT/view"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button type="submit" className="btn btn1">
                        View My Résumé
                    </button>
                </a>
                <a href="./assets/CV.pdf">
                    <button type="submit" className="btn btn2">
                        Download Résumé
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
