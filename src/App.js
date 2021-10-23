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
					<span dest="home" className="page_link links active">
						HOME
					</span>
					<span dest="about" className="page_link links">
						ABOUT
					</span>
					<span dest="projects" className="page_link links">
						PROJECTS
					</span>
					<span dest="contact" className="page_link links">
						CONTACT
					</span>
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
