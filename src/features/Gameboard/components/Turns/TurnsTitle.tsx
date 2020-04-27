import React from 'react';
import Typography from '@material-ui/core/Typography';

interface TurnsTitleProps {
	title: string,
	value: number
}

const TurnsTitle = ({title, value}: TurnsTitleProps) => {
	return (
		<>
			<Typography gutterBottom variant="h4" component="h2">
				{title}
			</Typography>
			<Typography gutterBottom variant="h3" component="h3">
				<strong>{value}</strong>
			</Typography>
		</>
	);
};

export default TurnsTitle;