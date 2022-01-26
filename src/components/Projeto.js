import React from "react";

import { Typography, CardActions, CardContent, CardMedia, Grid, Button, Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	buttons: {
		marginTop: "40px",
	},
	card: {
		height: "100%",
		flex: "flex",
		flexDirection: "column",
		"&:hover": {
			transform: "scale(1.05)",
			transition: "0.4s",
		},
	},
	cardMedia: {
		paddingTop: "56.25%", // isso deixa a imagem em 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
}));

const Projeto = ({ title, textSpan, urlImg, urlDemo, urlRepo, imgAlt }) => {
	const classes = useStyles();
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card className={classes.card}>
				<CardMedia className={classes.cardMedia} image={urlImg} alt={imgAlt} />
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom variant="h5">
						{title}
					</Typography>
					<Typography>{textSpan}</Typography>
				</CardContent>
				<CardActions>
					<Button target="_blank" href={urlDemo} variant="contained" size="small" color="primary">
						Demo
					</Button>
					<Button target="_blank" href={urlRepo} variant="contained" size="small" color="primary">
						Repo
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Projeto;
