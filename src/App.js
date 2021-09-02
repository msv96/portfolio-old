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
                    <ul className="list">
                        <li>
                            <a href="#home" className="links">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="links">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="links">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="links">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <Home />
            <About />
            <Projects />
            <Contact />
            <footer className="foot">
                Portfolio of Srinivas
            </footer>
        </>
    );
}

export default App;
