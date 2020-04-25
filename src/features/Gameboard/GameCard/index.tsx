import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import useStyles from './theme';


const GameCard = () => {
	const classes = useStyles();
	
	return (
		<Card className={classes.root}>
			<ButtonBase className={classes.action}>
				<CardMedia
					className={classes.media}
					image="https://www.zbrushcentral.com/uploads/default/original/3X/0/c/0c3cf6cb673d4e549e027ef90007dc5019dda60d.jpeg"
					title="Contemplative Reptile"
				/>
				<CardContent className={classes.content}>
					<Typography gutterBottom variant="h4" component="h2">
						Heal
					</Typography>
				</CardContent>
			</ButtonBase>
		</Card>
	);
};

export default GameCard;
