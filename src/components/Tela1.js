import React from "react";

export default function Tela1() {
	const showDiv = (e) => {
		e.target.nextElementSibling.classList.toggle("active-know-div")
		e.target.parentElement.classList.toggle("active-know-div")
	}
	return (
		<div>
			<section className="introducao">
				<article>
					<h2>👋Hello world</h2>
					<h1>Álvaro Jaime</h1>
					<h2>Front end Developer</h2>
					<p>Conhecimentos:</p>
					<div className="knowledge-wrapper active-know-div">
						<span onClick={showDiv}>Front end</span>
						<div className="knowledge-itens active-know-div">
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>JavaScript, React</p>
							</div>
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>CSS, SASS</p>
							</div>
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>HTML</p>
							</div>
						</div>
					</div>
					<div className="knowledge-wrapper">
						<span onClick={showDiv}>Ferramentas</span>
						<div className="knowledge-itens">
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>Git e Github</p>
							</div>
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>Visual Studio Code</p>
							</div>
						</div>
					</div>
					<div className="knowledge-wrapper">
						<span onClick={showDiv}>Idiomas</span>
						<div className="knowledge-itens">
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>Português fluente</p>
							</div>
							<div className="knowledge-item">
								<img src="images/check.png" alt="check icon"></img>
								<p>Inglês fluente</p>
							</div>
						</div>
					</div>
				</article>
				<div className="introducao-img">
					<img
						draggable="false"
						src="images/undraw_react_y7wq.svg"
						alt="svg react"
					></img>
				</div>
			</section>
		</div>
	);
}
