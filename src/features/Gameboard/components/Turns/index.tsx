import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './theme';

interface TurnsProps {
	current: number,
	past: number,
	left: number
}

const Turns = ({current, past, left} : TurnsProps) => {
	const classes = useStyles();

	return (
        <Paper className={classes.root}>
			<div className={classes.header}>
				<Typography gutterBottom variant="h4" component="h2">
					Turns
				</Typography>
			</div>
			<Divider />
			<div className={classes.content}>
				<Typography gutterBottom variant="h4" component="h2">
					Current
				</Typography>
				<Typography gutterBottom variant="h3" component="h3">
					<strong>{current}</strong>
				</Typography>
				<Typography gutterBottom variant="h4" component="h2">
					Past
				</Typography>
				<Typography gutterBottom variant="h3" component="h3">
					<strong>{past}</strong>
				</Typography>
				<Typography gutterBottom variant="h4" component="h2">
					Left
				</Typography>
				<Typography gutterBottom variant="h3" component="h3">
					<strong>{left}</strong>
				</Typography>
			</div>
			<Divider />
			<div className={classes.bottom}>
				<Button variant="contained" color="primary" className={classes.button}>
					End Turn
				</Button>
			</div>
		</Paper>
	);
};

export default Turns;
