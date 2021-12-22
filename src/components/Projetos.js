import React from "react";
import Projeto from "./Projeto";

export default function Projetos() {
	return (
		<div>
			<section className="projetos">
				<h1>Projetos:</h1>
				<article>
					<Projeto
						urlImg={"images/weather-app.png"}
						textSpan={"Weather app using OpenWeather API."}
						urlDemo={"https://weather-app-jet-iota.vercel.app/"}
						urlRepo={"http://github.com/alvaro-j/weather-app"}
						imgAlt="weather app"
					/>
					<Projeto
						urlImg={"images/nlw-heat.png"}
						textSpan={"Project developed on NLW Heat using Github API."}
						urlDemo={"https://alvaro-j.github.io/NLW-Heat/"}
						urlRepo={"https://github.com/alvaro-j/NLW-heat"}
						imgAlt="nlw heat"
					/>
					<Projeto
						urlImg={"images/url-shortener.png"}
						textSpan={
							"URL shortening API landing page. Challenge from Frontend Mentor."
						}
						urlDemo={"https://alvaro-j.github.io/url-shortening/"}
						urlRepo={"https://github.com/alvaro-j/url-shortening"}
						imgAlt="url shortener app"
					/>
					<Projeto
						urlImg={"images/buylist.png"}
						textSpan={"Buy list with add and remove function."}
						urlDemo={"https://alvaro-j.github.io/buylist-project/"}
						urlRepo={"https://github.com/alvaro-j/buylist-project"}
						imgAlt="buylist"
					/>
					<Projeto
						urlImg={"images/pricing-component.png"}
						textSpan={
							"Pricing component with toggle. Challenge from Frontend Mentor."
						}
						urlDemo={"https://alvaro-j.github.io/pricing-component/"}
						urlRepo={"https://github.com/alvaro-j/pricing-component"}
						imgAlt="pricing component"
					/>
					<Projeto
						urlImg={"images/digital-clock.bmp"}
						textSpan={"Digital clock made with HTML, CSS and JavaScript."}
						urlDemo={"https://alvaro-j.github.io/digital-clock/"}
						urlRepo={"https://github.com/alvaro-j/digital-clock"}
						imgAlt="digital clock"
					/>
					<Projeto
						urlImg={"images/tip-calculator.bmp"}
						textSpan={"Tip calculator app. Challenge from Frondend Mentor."}
						urlDemo={"https://alvaro-j.github.io/tip-calculator-app/"}
						urlRepo={"http://github.com/alvaro-j/tip-calculator-app"}
						imgAlt="tip calculator app"
					/>
					<Projeto
						urlImg={"images/interrogacao.svg"}
						textSpan={"Soon..."}
						urlDemo={"https://alvaro-j.github.io/tip-calculator-app/"}
						urlRepo={"http://github.com/alvaro-j/tip-calculator-app"}
						imgAlt="interrogação"
					/>
					<Projeto
						urlImg={"images/interrogacao.svg"}
						textSpan={"Soon..."}
						urlDemo={"http://github.com/alvaro-j/"}
						urlRepo={"http://github.com/alvaro-j/"}
						imgAlt="interrogação"
					/>
				</article>
			</section>
		</div>
	);
}
