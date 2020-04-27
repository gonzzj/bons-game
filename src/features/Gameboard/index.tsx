import React from 'react';
import { useSelector } from 'react-redux';
import Character from './components/Character';
import Stats from './components/Stats';
import GameCard from './components/GameCard';
import Turns from './components/Turns';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './theme';
import { selectPlayer } from '../../model/selectors/player';
import { selectEnemy } from '../../model/selectors/enemy';
import { selectGame } from '../../model/selectors/game';
import { Enemy } from '../../shared/types/enemy';
import { Player } from '../../shared/types/player';
import { Game } from '../../shared/types/game';

const Gameboard = () => {
    const classes = useStyles();
    const game: Game = useSelector(selectGame);
    const player: Player = useSelector(selectPlayer);
    const enemy: Enemy = useSelector(selectEnemy);

	return (
        <Container maxWidth={'lg'}>
            <div className={classes.paper}>
                <Grid container spacing={10}>
                    <Grid container item spacing={6} xs={8}>
                        <Grid item xs={8}>
                            <Character
                                image={"https://vignette.wikia.nocookie.net/ssbb/images/8/84/Link_SSBU.png/revision/latest?cb=20180613002622&path-prefix=es"}
                                name={player.name}
                                hp={player.hp}
                                maxHp={player.maxHp}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Stats 
                                shield={player.shield}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Character 
                                image={enemy.image}
                                name={enemy.name}
                                hp={enemy.hp}
                                maxHp={enemy.maxHp}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Stats 
                                shield={enemy.shield}
                            />
                        </Grid>
                        {player.cards.map(card => 
                            <Grid item xs={4}>
                                <GameCard 
                                    image={card.image}
                                    effect={card.effect}
                                    value={card.value}
                                />
                            </Grid>
                        )}
                    </Grid>
                    <Grid item xs={4}>
                        <Turns
                            current={game.currentTurn}
                            past={game.currentTurn - 1}
                            left={game.maxTurns - game.currentTurn}
                        />
                    </Grid>
                </Grid>
            </div>
        </Container>
	);
};

export default Gameboard;
