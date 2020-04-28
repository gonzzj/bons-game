import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Character from './components/Character';
import EndGameModal from './components/Modal/endGameModal';
import TurnModal from './components/Modal/turnModal';
import Stats from './components/Stats';
import GameCard from './components/GameCard';
import Turns from './components/Turns';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './theme';
import { selectPlayer } from '../../model/selectors/player';
import { selectEnemy } from '../../model/selectors/enemy';
import { selectGame } from '../../model/selectors/game';
import { selectCard } from '../../model/actions/player';
import { endTurn, endGame, setModalEffects } from '../../model/actions/game';
import Enemy from '../../shared/types/enemy';
import Player from '../../shared/types/player';
import Game from '../../shared/types/game';

const Gameboard = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [endGameWin, setEndGameWin] = useState(false);
    const [endGameLose, setEndGameLose] = useState(false);
    const game: Game = useSelector(selectGame);
    const player: Player = useSelector(selectPlayer);
    const enemy: Enemy = useSelector(selectEnemy);
    const isMobile = useMediaQuery('(max-width:480px)');

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
                <Grid container spacing={isMobile ? 1 : 10}>
                    <Grid container item spacing={isMobile ? 1 : 6} xs={12} md={8}>
                        <Grid item xs={12} md={8}>
                            <Character
                                image={"https://vignette.wikia.nocookie.net/ssbb/images/8/84/Link_SSBU.png/revision/latest?cb=20180613002622&path-prefix=es"}
                                name={player.name}
                                hp={player.hp}
                                maxHp={player.maxHp}
                                loading={game.gameLoading}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stats 
                                shield={player.shield}
                                horror={player.horror}
                                loading={game.gameLoading}
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Character 
                                image={enemy.image}
                                name={enemy.name}
                                hp={enemy.hp}
                                maxHp={enemy.maxHp}
                                loading={game.gameLoading}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stats 
                                shield={enemy.shield}
                                loading={game.gameLoading}
                            />
                        </Grid>
                        {player.cards.map(card => 
                            <Grid item xs={12} md={4} key={card.id}>
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
                    <Grid item xs={12} md={4}>
                        <Turns
                            current={game.currentTurn + 1}
                            past={game.currentTurn}
                            left={game.turnsLeft}
                            onClick={() => dispatch(endTurn())}
                            disabled={game.gameLoading}
                        />
                    </Grid>
                </Grid>
                <Backdrop className={classes.backdrop} open={game.turnLoading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                <TurnModal
                    openModal={game.modalEffects}
                    title={"Turn actions"}
                    closeButton={"Fight"}
                    playerEffect={player.effect?.name || ""}
                    playerValue={player.effect?.value || 0}
                    enemyEffect={enemy.effect.name}
                    enemyValue={enemy.effect.value}
                    onClickButton={() => dispatch(setModalEffects(false))}
                />
                <EndGameModal
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
