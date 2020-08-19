import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { LABEL_LOGOUT } from "../content/labels";
import { CATEGORY_LOGOUT_DESCRIPTION } from "../content/categories";

export default function Logout(props) {
  return (
    <>
      <Dialog
        open={props.isLogoutOpen}
        onClose={props.onLogoutClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{LABEL_LOGOUT}</DialogTitle>
        <DialogContent>
          <Typography paragraph>
            {CATEGORY_LOGOUT_DESCRIPTION}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onLogoutClick} color="primary">
            {LABEL_LOGOUT}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

Logout.propTypes = {
  isLogoutOpen: PropTypes.bool,
  onLogoutClose: PropTypes.func,
  onLogoutClick: PropTypes.func,
};
