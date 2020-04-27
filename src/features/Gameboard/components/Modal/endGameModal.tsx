import React from 'react';
import { isEmpty } from 'lodash';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface ModalProps {
    openModal: boolean,
    title?: string,
    body?: string,
    closeButton?: string,
    onClickButton: () => void
};

const EndGameModal = ({openModal, title, body, closeButton, onClickButton}: ModalProps) => {
    return (
        <Dialog
            open={openModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {!isEmpty(title) && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
            <DialogContent>
                <DialogContentText id="alert-dialog-description" variant={"h4"}>
                    {body}
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

export default EndGameModal;