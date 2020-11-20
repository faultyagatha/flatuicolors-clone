import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

import { deletePalette, closeConfDialog } from '../../redux/actions';
import { RootState } from '../../redux/reducers';

export const ConfirmDialog = () => {
  const { isConfDialogOpen, deleteId } = useSelector((state: RootState) => state.ui)
  const dispatch = useDispatch();

  const handleCloseDialog = () => {
    dispatch(closeConfDialog());
  };

  const handleDelete = () => {
    dispatch(deletePalette(deleteId));
    handleCloseDialog();
  };

  return (
    <Dialog
      open={isConfDialogOpen}
      aria-labelledby='delete-dialog-title'
    >
      <DialogTitle id='delete-dialog-title'>
        Delete This Palette?
          </DialogTitle>
      <List>
        <ListItem button onClick={handleDelete}>
          <ListItemAvatar>
            <Avatar
              style={{ backgroundColor: blue[100], color: blue[600] }}
            >
              <CheckIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Delete' />
        </ListItem>
        <ListItem button onClick={handleCloseDialog}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
              <CloseIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Cancel' />
        </ListItem>
      </List>
    </Dialog>
  )
}
