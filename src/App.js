import React from "react";
import About from "./About";
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
                            <a href="#education" className="links">
                                Education
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
            <a href="#home" className="to_top">
                <button type="submit" className="btn3">
                    <i class="far fa-angle-up"></i>
                </button>
            </a>
        </>
    );
}

export default App;
