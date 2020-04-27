import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from './theme';
import { Effect } from '../../../../shared/types/effect';

interface CardProps {
	image: string,
	effect: Effect,
	value: number,
	id: string,
	selected: boolean,
	disabled: boolean,
	loading: boolean,
	onClick: (id: string) => void
}

const GameCard = ({ image, effect, value, id, selected, onClick, disabled, loading }: CardProps) => {
	const classes = useStyles();

	const classRoot = selected ? classes.root2 : classes.root;
	
	return (
		<Card className={classRoot}>
			<ButtonBase className={classes.action} onClick={() => onClick(id)} disabled={disabled}>
				{!loading ?
					<Skeleton animation="wave" className={classes.media} />
				:	
					<CardMedia
						className={classes.media}
						image={image}
						title={effect}
					/>
				}			
				<CardContent className={classes.content}>
					{!loading ?
						<Skeleton animation="wave" height={40} width={'100%'} />
					:
						<Typography gutterBottom variant="h5" component="h2">
							{effect} : {value}
						</Typography>
					}
				</CardContent>
			</ButtonBase>
		</Card>
	);
};

export default GameCard;
