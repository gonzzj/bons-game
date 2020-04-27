import React from 'react';
import { isEmpty } from 'lodash';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

interface ModalProps {
    openModal: boolean,
    title?: string,
    playerEffect?: string,
    playerValue?: number,
    enemyEffect?: string,
    enemyValue?: number,
    closeButton?: string,
    onClickButton: () => void
};

const TurnModal = ({openModal, title, playerEffect = "", playerValue = 0, enemyEffect, enemyValue, closeButton, onClickButton}: ModalProps) => {
    return (
        <Dialog
            open={openModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {!isEmpty(title) && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
            <DialogContent>
                <DialogContentText id="alert-dialog-description" variant={"h6"} style={{display: 'flex', flexDirection: 'column'}}>
                    <strong>Player</strong>
                    <Typography component="span" variant="inherit">Card effect: <strong>{playerEffect}</strong></Typography>
                    <Typography component="span" variant="inherit">Value: <strong>{playerValue}</strong></Typography>
                    <Divider style={{margin: '16px 0'}} />
                    <strong>Enemy</strong>
                    <Typography component="span" variant="inherit">Card effect: <strong>{enemyEffect}</strong></Typography>
                    <Typography component="span" variant="inherit">Value: <strong>{enemyValue}</strong></Typography>
                </DialogContentText>
            </DialogContent>
            {!isEmpty(closeButton) &&
                <DialogActions>
                    <Button 
                        onClick={() => onClickButton()} 
                        color="primary"
                    >
                        {closeButton}
                    </Button>
                </DialogActions>
            }
        </Dialog>
    );
}

export default TurnModal;