import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { IPaletteDialog } from '../../types';

export const PaletteDialog = ({
  palettes,
  handleSavePalette,
  handleHideDialog,
  dialogOpen
}: IPaletteDialog) => {
  const [paletteName, setPaletteName] = useState('my-palette');

  const handleChangePaletteName = (e: any) => {
    setPaletteName(e.target.value);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      palettes.every(({ paletteName }: any) => paletteName.toLowerCase() !== value.toLowerCase())
    );
  }, [paletteName, palettes])

  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={handleHideDialog}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>CHOOSE A PALETTE NAME</DialogTitle>
        <ValidatorForm onSubmit={() => handleSavePalette(paletteName)}>
          <DialogContent>
            <DialogContentText>
              Enter a unique name for your new palette.
            </DialogContentText>
            {/* <Picker /> */}
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
            <Button onClick={handleHideDialog} color='primary'>
              Cancel
            </Button>
            <Button variant='contained' color='primary' type='submit'>
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </>
  )
}
