import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from './theme';

interface StatsProps {
	shield: number,
	loading: boolean,
	horror?: boolean
}

const Stats = ({ shield, loading, horror }: StatsProps) => {
	const classes= useStyles();
	
	return (
        <Card className={classes.root}>
			<CardContent className={classes.content}>
				{!loading ? 
					<Skeleton animation="wave" height={40} width={"100%"} />
				:
					<>
						<Typography component="span" variant="h5">
							Shield: <strong>{shield}</strong>
						</Typography>
						{horror && 
							<Typography component="span" variant="h5">
								Effect: <strong>HORROR</strong>
							</Typography>
						}
					</>
				}
			</CardContent>
		</Card>
	);
};

export default Stats;
