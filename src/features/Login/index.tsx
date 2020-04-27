import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGame } from '../../model/actions/game';
import { isEmpty } from 'lodash';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import SportsEsportsIcon from '@material-ui/icons/SportsEsportsRounded';
import Typography from '@material-ui/core/Typography';
import useStyles from './theme';

const Login = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const [name, changeName] = useState('');

	return (
        <Container maxWidth={'sm'}>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <SportsEsportsIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Welcome to Bons Game</Typography>
                <Typography component="h3" variant="subtitle1">What's your name?</Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        onChange={e => changeName(e.target.value)}
                        autoFocus
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => dispatch(createGame(name))}
                        disabled={isEmpty(name)}
                    >
                        Let's Play
                    </Button>
                </form>
            </div>
        </Container>
	);
};

export default Login;
