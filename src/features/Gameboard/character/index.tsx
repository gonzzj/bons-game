import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './theme';


const Character = () => {
	const classes = useStyles();
	
	return (
        <Card className={classes.root}>
			<CardMedia
				className={classes.cover}
				image="https://www.zbrushcentral.com/uploads/default/original/3X/0/c/0c3cf6cb673d4e549e027ef90007dc5019dda60d.jpeg"
				title="Live from space album cover"
			/>
			<CardContent className={classes.content}>
				<Typography component="h5" variant="h5">
					Enemy
				</Typography>
				<Typography component="span" variant="h6">
					HP: <strong>32/40</strong>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Character;
