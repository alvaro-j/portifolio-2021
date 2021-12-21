import React from "react";

export default function Tela1() {
	return (
		<div>
			<section className="introducao">
				<article>
					<h2>👋Hello world</h2>
					<h1>Álvaro Jaime</h1>
					<h2>Front end Developer</h2>
					<p>Conhecimentos:</p>
					<details open>
						<summary>Front End</summary>
						<div className="knowledge-div">
							<img src="images/check.png" alt="check icon"></img>
							<p>JavaScript, React</p>
						</div>
						<div className="knowledge-div">
							<img src="images/check.png" alt="check icon"></img>
							<p>CSS, SASS</p>
						</div>
						<div className="knowledge-div">
							<img src="images/check.png" alt="check icon"></img>
							<p>HTML</p>
						</div>
					</details>
					<details>
						<summary>Ferramentas</summary>
            <div className="knowledge-div">
							<img src="images/check.png" alt="check icon"></img>
							<p>Git e Github</p>
						</div>
            <div className="knowledge-div">
							<img src="images/check.png" alt="check icon"></img>
							<p>Visual Studio Code</p>
						</div>          
					</details>
					<details>
						<summary>Idiomas</summary>
            <div className="knowledge-div">
							<img src="images/check.png" alt="check icon"></img>
							<p>Inglês</p>
						</div>   
            <div className="knowledge-div">
							<img src="images/check.png" alt="check icon"></img>
							<p>Português</p>
						</div>   
					</details>
				</article>
				<div className="introducao-img">
					<img src="images/undraw_react_y7wq.svg" alt="svg react"></img>
				</div>
			</section>
		</div>
	);
}
