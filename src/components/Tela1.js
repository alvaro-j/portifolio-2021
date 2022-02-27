import React from "react";
import { Trans } from "react-i18next";

export default function Tela1() {
	const showDiv = (e) => {
		e.target.nextElementSibling.classList.toggle("active-know-div");
		e.target.parentElement.classList.toggle("active-know-div");
	};

	return (
		<div>
			<section className="introducao">
				<article>
					<h2>
						👋<Trans>Hello world</Trans>
					</h2>
					<h1>Álvaro Jaime</h1>
					<h2>
						<Trans>Front end Developer</Trans>
					</h2>
					<p>
						<Trans>Knowledge</Trans>:
					</p>
					<div className="knowledge-wrapper active-know-div">
						<span onClick={showDiv}>Front end</span>
						<div className="knowledge-itens active-know-div">
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>JavaScript, React.js</p>
							</div>
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>Material UI</p>
							</div>
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>CSS, SASS, BEM</p>
							</div>
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>HTML</p>
							</div>
						</div>
					</div>
					<div className="knowledge-wrapper">
						<span onClick={showDiv}>
							<Trans>Tools</Trans>
						</span>
						<div className="knowledge-itens">
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>Git, Github</p>
							</div>
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>Visual Studio Code</p>
							</div>
						</div>
					</div>
					<div className="knowledge-wrapper">
						<span onClick={showDiv}>
							<Trans>Languages</Trans>
						</span>
						<div className="knowledge-itens">
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>
									<Trans>Fluent Portuguese</Trans>
								</p>
							</div>
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>
									<Trans>Advanced English</Trans>
								</p>
							</div>
						</div>
					</div>
				</article>
				<div className="introducao-img">
					<img draggable="false" src="images/undraw_react_y7wq.svg" alt="svg react"></img>
				</div>
			</section>
		</div>
	);
}
