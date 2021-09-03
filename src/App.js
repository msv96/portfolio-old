import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";

function App() {
    return (
        <>
            <header className="header">
                <nav className="toplist">
                    <a href="#home" className="links">
                        HOME
                    </a>
                    <a href="#about" className="links">
                        ABOUT
                    </a>
                    <a href="#projects" className="links">
                        PROJECTS
                    </a>
                    <a href="#contact" className="links">
                        CONTACT
                    </a>
                </nav>
            </header>
            <Home />
            <About />
            <Projects />
            <Contact />
            <footer className="foot">Portfolio of Srinivas</footer>
        </>
    );
}

export default App;
