import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { LABEL_LOGIN, LABEL_USERNAME, LABEL_PASSWORD } from "../content/labels";

export default function Login(props) {
  return (
    <>
      <Dialog
        open={props.isLoginOpen}
        onClose={props.onLoginClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{LABEL_LOGIN}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            name="username"
            label={LABEL_USERNAME}
            type="text"
            variant="outlined"
            onChange={props.onLoginChange}
            required
            fullWidth
          />
          <TextField
            margin="dense"
            name="password"
            id="password"
            label={LABEL_PASSWORD}
            type="password"
            variant="outlined"
            onChange={props.onLoginChange}
            required
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onLoginClick} color="primary">
            {LABEL_LOGIN}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

Login.propTypes = {
  isLoginOpen: PropTypes.bool,
  onLoginClose: PropTypes.func,
  onLoginChange: PropTypes.func,
  onLoginClick: PropTypes.func,
};
