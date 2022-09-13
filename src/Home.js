import React from "react";

function Home() {
	return (
		<>
			<div className="content" id="home">
				<div className="intro">
					Hello, I'm <span className="myname">Srinivasan Mohan</span>.
					<br />Full-stack Web Developer.
				</div>
				<a
					href="https://drive.google.com/file/d/187802MXNEs1iaWY-BegSIHIIDOILL82D/view"
					target="_blank"
					rel="noreferrer"
				>
					<button type="submit" className="btn btn1">
						View My Résumé
					</button>
				</a>
			</div>
		</>
	);
}

export default Home;
