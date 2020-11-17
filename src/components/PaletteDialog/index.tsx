import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { IPalette } from '../../types';

interface IPaletteDialog {
  palettes: IPalette[];
  handleSavePalette: (paletteName: string) => void;
}

export const PaletteDialog = ({ palettes, handleSavePalette }: IPaletteDialog) => {
  const [open, setOpen] = useState(true);
  const [paletteName, setPaletteName] = useState('my-palette');

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleChangePaletteName = (e: any) => {
    setPaletteName(e.target.value);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      palettes.every(({ paletteName }: any) => paletteName.toLowerCase() !== value.toLowerCase())
    );
  }, [paletteName, palettes])

  return (
    <div>
      <Button
        variant='outlined'
        color='primary'
        onClick={handleOpenDialog}
      >
        Open form dialog
        </Button>
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={() => handleSavePalette(paletteName)}>
          <DialogContent>
            <DialogContentText>
              Enter a unique name for your new palette.
            </DialogContentText>
            <TextValidator
              value={paletteName}
              name="paletteName"
              label="Palette Name"
              onChange={handleChangePaletteName}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Name is already taken"]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color='primary'>
              Cancel
            </Button>
            <Button variant='contained' color='primary' type='submit'>
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  )
}
