import React from "react";

const Projeto = ({textSpan, urlImg, urlDemo, urlRepo, imgAlt}) => {
	return (
			<div className="projeto-item">
				<img draggable="false" src={urlImg} alt={imgAlt}></img>
				<span>{textSpan}</span>
				<div className="container-btn">
					<a
						className="btn"
						href={urlDemo}
						target="_blank"
						rel="noreferrer"
					>
						Demo
					</a>
					<a
						className="btn"
						href={urlRepo}
						target="_blank"
						rel="noreferrer"
					>
						Repo
					</a>
				</div>
			</div>
	);
};

export default Projeto;
