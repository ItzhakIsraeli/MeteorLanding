import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material";
import React from "react";

interface SuitableMeteorDialogProps {
    needAlert: boolean,
    handleClose: () => void,
    year:string
}

export const SuitableMeteorDialog = ({needAlert, handleClose, year}: SuitableMeteorDialogProps) => {
    return (
        <Dialog
            open={needAlert}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"The mass was not found..."}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Jumping to first-year where there is a mass that fits the criteria:
                    <Typography variant={'h4'} color={'primary'} paddingTop={1}>
                        {year}.
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant={'contained'} onClick={handleClose}>OK</Button>
            </DialogActions>
        </Dialog>
    )
}