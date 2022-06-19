import React from "react";
import Projeto from "./Projeto";

import { Trans } from "react-i18next";

import { Container, Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	cardGrid: {
		padding: "20px 0",
		[theme.breakpoints.down("md")]: {
			padding: "20px 10px",
		},
	},
	typography: {
		marginBottom: "20px",
		fontSize: "3em",
		maxWidth: "960px",
		fontFamily: "Arial",
		fontWeight: "700",
	},
}));

export default function Projetos() {
	const classes = useStyles();
	return (
		<Container className={classes.cardGrid} maxWidth="md">
			<Typography className={classes.typography} variant="h1">
				<Trans>Projects</Trans>:
			</Typography>
			<Grid container spacing={4}>
				<Projeto
					urlImg={"images/feedget.png"}
					textSpan={" Project developed on NLW Return using React.js, Node.js and React Native."}
					urlDemo={"https://nlw-return-alvaro-j.vercel.app/"}
					urlRepo={"https://github.com/alvaro-j/NLW-Return"}
					imgAlt="feedget"
					title="NLW Return Feedget"
				/>
				<Projeto
					urlImg={"images/whats2.png"}
					textSpan={"Chat app made with React and Firebase."}
					urlDemo={"https://chat-app-react-indol.vercel.app/"}
					urlRepo={"https://github.com/alvaro-j/chat-app-react"}
					imgAlt="whatsapp 2"
					title="React chat app"
				/>
				<Projeto
					urlImg={"images/buylist-2.0.png"}
					textSpan={" Buylist made with React Context API."}
					urlDemo={"https://buylist-2-0.vercel.app/"}
					urlRepo={"https://github.com/alvaro-j/buylist-2.0"}
					imgAlt="buylist 2.0"
					title="buyList Context API"
				/>
				<Projeto
					urlImg={"images/pwa-weather-app.png"}
					textSpan={"PWA weather app made with React and OpenWeatherAPI. "}
					urlDemo={"https://pwa-weather-app-six.vercel.app/"}
					urlRepo={"https://github.com/alvaro-j/pwa-weather-app"}
					imgAlt="pwa weather app"
					title="PWA Weather App"
				/>
				<Projeto
					urlImg={"images/weather-app.png"}
					textSpan={"Weather app using OpenWeather API."}
					urlDemo={"https://weather-app-jet-iota.vercel.app/"}
					urlRepo={"http://github.com/alvaro-j/weather-app"}
					imgAlt="weather app"
					title="Weather app"
				/>
				<Projeto
					urlImg={"images/nlw-heat.png"}
					textSpan={"Project developed on NLW Heat using Github API."}
					urlDemo={"https://alvaro-j.github.io/NLW-Heat/"}
					urlRepo={"https://github.com/alvaro-j/NLW-heat"}
					imgAlt="nlw heat"
					title="NLW Heat"
				/>
				<Projeto
					urlImg={"images/url-shortener.png"}
					textSpan={"URL shortening API landing page. Challenge from Frontend Mentor."}
					urlDemo={"https://alvaro-j.github.io/url-shortening/"}
					urlRepo={"https://github.com/alvaro-j/url-shortening"}
					imgAlt="url shortener app"
					title="Url shortener app"
				/>
				<Projeto
					urlImg={"images/pricing-component.png"}
					textSpan={"Pricing component with toggle. Challenge from Frontend Mentor."}
					urlDemo={"https://alvaro-j.github.io/pricing-component/"}
					urlRepo={"https://github.com/alvaro-j/pricing-component"}
					imgAlt="pricing component"
					title="Pricing component app"
				/>
				<Projeto
					urlImg={"images/buylist.png"}
					textSpan={
						"Buy list with add and remove function. Made with JavaScript, HTML and CSS only."
					}
					urlDemo={"https://alvaro-j.github.io/buylist-project/"}
					urlRepo={"https://github.com/alvaro-j/buylist-project"}
					imgAlt="buylist"
					title="Simple shop list"
				/>
				<Projeto
					urlImg={"images/digital-clock.bmp"}
					textSpan={"Digital clock made with HTML, CSS and JavaScript."}
					urlDemo={"https://alvaro-j.github.io/digital-clock/"}
					urlRepo={"https://github.com/alvaro-j/digital-clock"}
					imgAlt="digital clock"
					title="Digital clock"
				/>
				<Projeto
					urlImg={"images/tip-calculator.bmp"}
					textSpan={"Tip calculator app. Challenge from Frondend Mentor."}
					urlDemo={"https://alvaro-j.github.io/tip-calculator-app/"}
					urlRepo={"http://github.com/alvaro-j/tip-calculator-app"}
					imgAlt="tip calculator app"
					title="Tip calculator app"
				/>
				<Projeto
					urlImg={"images/interrogacao.svg"}
					textSpan={""}
					urlDemo={"https://github.com/alvaro-j"}
					urlRepo={"http://github.com/alvaro-j"}
					imgAlt="question mark"
					title="Soon..."
				/>
			</Grid>
		</Container>
	);
}
