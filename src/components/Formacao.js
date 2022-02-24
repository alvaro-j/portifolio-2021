import React from "react";

import { Trans } from "react-i18next";

export default function Formacao() {
	return (
		<div>
			<section className="formacao">
				<article>
					<h1><Trans>Education</Trans></h1>
					<span className="formacao-span">
						<img src="/images/if.png" alt="instituto federal"></img> Instituto Federal de Pernambuco
					</span>
					<p><Trans>Analysis and Systems Development</Trans></p>
					<p>2020-2023</p>
				</article>
				<div className="formacao-img">
					<img draggable="false" src="/images/graduation.svg" alt="graduation svg"></img>
				</div>
			</section>
		</div>
	);
}
