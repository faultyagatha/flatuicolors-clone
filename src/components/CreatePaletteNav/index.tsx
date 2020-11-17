import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useStyles } from './useStyles';
import { IPalette } from '../../types';

interface ICreatePaletteNav {
  open: boolean;
  colorsArr: {
    name: string;
    color: string;
  }[];
  saveNewPalette: (newPalette: any) => void;
  palettes: IPalette[];
  handleDrawerOpen: () => void;
}

export const CreatePaletteNav = ({ open, colorsArr, saveNewPalette, palettes, handleDrawerOpen }: ICreatePaletteNav) => {
  const classes = useStyles();
  const history = useHistory();
  const [paletteName, setPaletteName] = useState('my-palette');

  const handleChangePaletteName = (e: any) => {
    setPaletteName(e.target.value);
  };

  const handleSavePalette = () => {
    const newPalette = {
      paletteName: paletteName,
      id: paletteName.toLowerCase().replace(/ /g, "-"),
      colors: colorsArr
    }
    saveNewPalette(newPalette);
    // console.log(newPalette);
    history.push("/");
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      palettes.every(({ paletteName }: any) => paletteName.toLowerCase() !== value.toLowerCase())
    );
  }, [colorsArr, paletteName, palettes])

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <ValidatorForm onSubmit={handleSavePalette}>
            <TextValidator
              value={paletteName}
              name="paletteName"
              label="Palette Name"
              onChange={handleChangePaletteName}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Name is already taken"]} />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
            >
              Save Palette
          </Button>
            <Link to="/"><Button variant="contained" color="secondary">Go Back</Button></Link>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </div>
  )
}
