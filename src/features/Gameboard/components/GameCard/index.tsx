import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import useStyles from './theme';
import { Effect } from '../../../../shared/types/effect';

interface CardProps {
	image: string,
	effect: Effect,
	value: number,
}

const GameCard = ({ image, effect, value}: CardProps) => {
	const classes = useStyles();
	
	return (
		<Card className={classes.root}>
			<ButtonBase className={classes.action}>
				<CardMedia
					className={classes.media}
					image={image}
					title={effect}
				/>
				<CardContent className={classes.content}>
					<Typography gutterBottom variant="h5" component="h2">
						{effect} : {value}
					</Typography>
				</CardContent>
			</ButtonBase>
		</Card>
	);
};

export default GameCard;
