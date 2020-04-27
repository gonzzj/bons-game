import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './theme';

const Stats = () => {
	const classes= useStyles();
	
	return (
        <Card className={classes.root}>
			<CardContent className={classes.content}>
				<Typography component="span" variant="h5">
					Shield: <strong>50</strong>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Stats;
