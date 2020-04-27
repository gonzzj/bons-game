import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './theme';

interface CharacterProps {
	image: string,
	name: string,
	hp: number,
	maxHp: number
}

const Character = ({ image, name, hp, maxHp }: CharacterProps) => {
	const classes = useStyles();
	
	return (
        <Card className={classes.root}>
			<CardMedia
				className={classes.cover}
				image={image}
				title={name}
			/>
			<CardContent className={classes.content}>
				<Typography component="h5" variant="h5">
					{name}
				</Typography>
				<Typography component="span" variant="h6">
					HP: <strong>{hp} / {maxHp}</strong>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Character;
