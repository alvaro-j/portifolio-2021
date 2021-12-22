import React from "react";

export default function Formacao() {
	return (
		<div>
			<section className="formacao">
				<article>
					<h1>Formação</h1>
					<span className="formacao-span">
						<img src="/images/if.png" alt="instituto federal"></img> Instituto
						Federal de Pernambuco
					</span>
					<p>Análise e Desenvolvimento de Sistemas</p>
					<p>2020-2023</p>
				</article>
				<div className="formacao-img">
					<img
						draggable="false"
						src="/images/graduation.svg"
						alt="graduation svg"
					></img>
				</div>
			</section>
		</div>
	);
}
