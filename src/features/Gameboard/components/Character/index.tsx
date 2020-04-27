import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from './theme';

interface CharacterProps {
	image: string,
	name: string,
	hp: number,
	maxHp: number,
	loading: boolean
}

const Character = ({ image, name, hp, maxHp, loading }: CharacterProps) => {
	const classes = useStyles();
	
	return (
        <Card className={classes.root}>
			{!loading ?
				<Skeleton animation="wave" className={classes.cover} />
			:	
				<CardMedia
					className={classes.cover}
					image={image}
					title={name}
				/>
			}
			<CardContent className={classes.content}>
				{!loading ?
					<>
						<Skeleton animation="wave" height={40} width={"100%"} />
						<Skeleton animation="wave" height={40} width={"100%"} />
					</>
				:
					<>
						<Typography component="h5" variant="h5">
							{name}
						</Typography>
						<Typography component="span" variant="h6">
							HP: <strong>{hp} / {maxHp}</strong>
						</Typography>
					</>
				}
			</CardContent>
		</Card>
	);
};

export default Character;
