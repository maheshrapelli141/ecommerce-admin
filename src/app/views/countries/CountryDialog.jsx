import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import PropTypes from 'prop-types';

const CountryDialog = (props) => {
    const { onClose, ...other } = props;

    function handleClose() {
        onClose();
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" {...other}>
            <DialogTitle>Add Country</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    );
}

CountryDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
};

export default CountryDialog;