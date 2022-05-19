import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles, Button, Typography, Dialog, DialogTitle as MuiDialogTitle, DialogContent as MuiDialogContent, DialogActions as MuiDialogActions, IconButton, Grid } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        // padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    }
}))

const styles = (theme) => ({
    root: {
        margin: 0,
        // padding: theme.spacing(2),
        // paddingRight: '0px',
        width:"1000px",
        // width:"1250px"
        // width:"95%"
        "@media only screen and (max-width: 1040px)": {
            width:"500px",
        },
        "@media only screen and (max-width: 600px)": {
            width:"260px",
        },
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(2),
        // top: theme.spacing(3),
        // align:"right",
        color: theme.palette.grey[500],
        padding:"0%"
    },
});
  
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon/>
            </IconButton>
        ) : null}
        </MuiDialogTitle>
    );
});
  
const DialogContent = withStyles((theme) => ({
    root: {
        // padding: theme.spacing(2),
    },
}))(MuiDialogContent);
  
const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        // padding: theme.spacing(1),

    },
}))(MuiDialogActions);
  
export default function DialogModal({
    title,
    children,
    openPopup,
    setOpenPopup
}) {  
    const classes = useStyles();
    return (
        <Grid container align="center">
            <Grid item xs={10} md={10}>
                <Dialog 
                    onClose={() => setOpenPopup(false)} 
                    aria-labelledby="customized-dialog-title" 
                    open={openPopup}
                    maxWidth="lg" 
                    classes={{ paper: classes.dialogWrapper }}
                >
                    <DialogTitle 
                        id="customized-dialog-title" 
                        onClose={() => setOpenPopup(false)}
                    >
                        { title }
                    </DialogTitle>
                    <DialogContent style={{padding:"2%"}}>
                        { children }
                    </DialogContent>
                </Dialog>
            </Grid>
        </Grid>
    );
}