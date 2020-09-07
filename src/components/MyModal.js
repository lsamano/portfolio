import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const MyModal = ({ handleClickOpen, handleClose, open, title, subtitle, tags, img_url, github_url, demo_url }) => {

  const style = {
    width: "100%",
    height: "auto",
  }

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="sm">
        <img src={img_url} style={style} alt={`preview of ${title}`}/>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          { title }
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1" gutterBottom>
            { subtitle }
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            { tags.join(", ") }
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus href={github_url} onClick={handleClose} color="secondary">
            Repo
          </Button>
          {demo_url &&
            <Button autoFocus href={demo_url} onClick={handleClose} color="primary">Demo</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}

MyModal.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tags: PropTypes.array,
  img_url: PropTypes.string,
};

export default MyModal;
