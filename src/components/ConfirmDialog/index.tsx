import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

import { deletePalette } from '../../redux/actions';

/** could be refactored with useToggle hook */
export const ConfirmDialog = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  const handleOpenDialog = (id: string) => {
    setOpen(true);
    setDeleteId(id);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setDeleteId('');
  };

  const handleDelete = () => {
    console.log('palette will be deleted')
    // handleDeletePalette(deleteId);
    dispatch(deletePalette(deleteId));
    handleCloseDialog();
  };

  return (
    <Dialog
      open={open}
      aria-labelledby='delete-dialog-title'
      onClose={handleOpenDialog}
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
