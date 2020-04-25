import React from 'react';
import Character from './character';
import Stats from './stats';
import GameCard from './GameCard';
import Turns from './turns';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './theme';

const Login = () => {
    const classes = useStyles();

	return (
        <Container maxWidth={'lg'}>
            <div className={classes.paper}>
                <Grid container spacing={10}>
                    <Grid container item spacing={6} xs={8}>
                        <Grid item xs={8}>
                            <Character />
                        </Grid>
                        <Grid item xs={4}>
                            <Stats />
                        </Grid>
                        <Grid item xs={8}>
                            <Character />
                        </Grid>
                        <Grid item xs={4}>
                            <Stats />
                        </Grid>
                        <Grid item xs={4}>
                            <GameCard />
                        </Grid>
                        <Grid item xs={4}>    
                            <GameCard />
                        </Grid>
                        <Grid item xs={4}>
                            <GameCard />
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Turns />
                    </Grid>
                </Grid>
            </div>
        </Container>
	);
};

export default Login;
