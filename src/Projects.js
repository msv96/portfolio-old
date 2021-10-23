import React from "react";

function Projects() {
	return (
		<>
			<div id="projects">
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
						fill="hsl(0, 0%, 100%)"
						stroke="hsl(210, 10%, 15%)"
					></path>
				</svg>
				<div className="projects">
					<div className="card">PROJECTS</div>
					<div className="cardline"></div>
					<div className="siteflex flex">
						<a
							href="https://srini-task-7.netlify.app/"
							target="_blank"
							rel="noreferrer"
							className="link2"
						>
							<img
								src="./assets/1.png"
								alt="first-site"
								className="site"
							/>
							<div className="textpad">
								Simple Dictionary Site
							</div>
						</a>
						<a
							href="https://srini-react-3.netlify.app/"
							target="_blank"
							rel="noreferrer"
							className="link2"
						>
							<img
								src="./assets/2.png"
								alt="first-site"
								className="site"
							/>
							<div className="textpad">
								Simple Shopping Cart Site
							</div>
						</a>
						<a
							href="https://srini-task-8.netlify.app/"
							target="_blank"
							rel="noreferrer"
							className="link2"
						>
							<img
								src="./assets/3.png"
								alt="first-site"
								className="site"
							/>
							<div className="textpad">
								Simple IP Information Site
							</div>
						</a>
						<a
							href="https://srini-task-6.netlify.app/"
							target="_blank"
							rel="noreferrer"
							className="link2"
						>
							<img
								src="./assets/4.png"
								alt="first-site"
								className="site"
							/>
							<div className="textpad">Simple News Site</div>
						</a>
					</div>
				</div>
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
					d="M0 0 L50 97 L100 0"
					fill="hsl(210, 10%, 15%)"
					stroke="hsl(210, 10%, 15%)"
				></path>
			</svg>
		</>
	);
}

export default Projects;
