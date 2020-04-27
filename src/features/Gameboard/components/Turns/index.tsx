import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './theme';
import TurnsTitle from './TurnsTitle';

interface TurnsProps {
	current: number,
	past: number,
	left: number,
	disabled: boolean,
	onClick: () => void
}

const Turns = ({current, past, left, onClick, disabled} : TurnsProps) => {
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
				<TurnsTitle title={'Current'} value={current} />
				<TurnsTitle title={'Past'} value={past} />
				<TurnsTitle title={'Left'} value={left} />
			</div>
			<Divider />
			<div className={classes.bottom}>
				<Button variant="contained" color="primary" className={classes.button} onClick={() => onClick()} disabled={!disabled}>
					End Turn
				</Button>
			</div>
		</Paper>
	);
};

export default Turns;
