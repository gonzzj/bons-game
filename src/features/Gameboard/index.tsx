import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Character from './components/Character';
import Modal from './components/Modal';
import Stats from './components/Stats';
import GameCard from './components/GameCard';
import Turns from './components/Turns';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import useStyles from './theme';
import { selectPlayer } from '../../model/selectors/player';
import { selectEnemy } from '../../model/selectors/enemy';
import { selectGame } from '../../model/selectors/game';
import { selectCard } from '../../model/actions/player';
import { endTurn, endGame } from '../../model/actions/game';
import { Enemy } from '../../shared/types/enemy';
import { Player } from '../../shared/types/player';
import { Game } from '../../shared/types/game';

const Gameboard = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [endGameWin, setEndGameWin] = useState(false);
    const [endGameLose, setEndGameLose] = useState(false);
    const game: Game = useSelector(selectGame);
    const player: Player = useSelector(selectPlayer);
    const enemy: Enemy = useSelector(selectEnemy);

    useEffect(() => {
        if (game.gameLoading && (player.hp <= 0 || game.turnsLeft === 0)) {
            setEndGameLose(true);
        }

        if (game.gameLoading && (enemy.hp <= 0)) {
            setEndGameWin(true);
        }
    }, [enemy.hp, player.hp, game.turnsLeft, game.gameLoading])

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
                                loading={game.gameLoading}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Stats 
                                shield={player.shield}
                                horror={player.horror}
                                loading={game.gameLoading}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Character 
                                image={enemy.image}
                                name={enemy.name}
                                hp={enemy.hp}
                                maxHp={enemy.maxHp}
                                loading={game.gameLoading}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Stats 
                                shield={enemy.shield}
                                loading={game.gameLoading}
                            />
                        </Grid>
                        {player.cards.map(card => 
                            <Grid item xs={4} key={card.id}>
                                <GameCard 
                                    image={card.image}
                                    effect={card.effect}
                                    value={card.value}
                                    id={card.id}
                                    selected={card.id === player.cardSelected}
                                    onClick={(id: string) => dispatch(selectCard(id))}
                                    disabled={player.horror}
                                    loading={game.gameLoading}
                                />
                            </Grid>
                        )}
                    </Grid>
                    <Grid item xs={4}>
                        <Turns
                            current={game.currentTurn + 1}
                            past={game.currentTurn}
                            left={game.turnsLeft}
                            onClick={() => dispatch(endTurn())}
                            disabled={game.gameLoading}
                        />
                    </Grid>
                </Grid>
                <Modal
                    openModal={game.turnLoading}
                    children={<CircularProgress />}
                    onClickButton={() => []}
                />
                <Modal
                    openModal={endGameLose || endGameWin}
                    title={"Game Over"}
                    body={endGameWin ? "Congratulations! You win! :)" : "Ups... You Lose! :("}
                    closeButton={"Go to login"}
                    onClickButton={() => dispatch(endGame())}
                />
            </div>
        </Container>
	);
};

export default Gameboard;
