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
            <button type="submit" className="btn btn1">View Resume</button>
            <button type="submit" className="btn btn2">Download Resume</button>
        </div>
    );
}

export default Home;
