import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ChromePicker, ColorResult } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { arrayMove, SortEndHandler } from 'react-sortable-hoc';

import { DraggableColorList } from '../DraggableColorList';
import { useStyles } from './useStyles';
import { IPalette } from '../../types';

//TODO: FIX TYPES
interface ICreatePalette {
  saveNewPalette(newPalette: any): void;
  palettes: IPalette[];
  maxColors: number;
}

//TODO: refactor, clean up the input field
export const CreatePalette = ({ saveNewPalette, palettes, maxColors }: ICreatePalette) => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('purple');
  const [colorsArr, setColorsArr] = useState(palettes[0].colors)//useState([{ color: 'purple', name: 'purple' }]);
  const [colorName, setColorName] = useState('');
  const [paletteName, setPaletteName] = useState('my-palette');

  const isPaletteFull = colorsArr.length >= maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeColor = (newColor: ColorResult) => {
    setCurrentColor(newColor.hex);
  };

  const handleChangeColorName = (e: any) => {
    setColorName(e.target.value);
  };

  const handleChangePaletteName = (e: any) => {
    setPaletteName(e.target.value);
  };

  const handeleAddColor = () => {
    const newColor = {
      color: currentColor,
      name: colorName
    }
    setColorsArr(colorsArr.concat(newColor));
    setColorName(' '); //clean up the input
    console.log(colorsArr)
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

  const handleDeleteClick = (colorName: string) => {
    setColorsArr(colorsArr.filter(c => c.name !== colorName));
    console.log(colorsArr)
  };

  const handleClearColors = () => {
    setColorsArr([]);
  };

  const handleAddRandomColor = () => {
    //pick random color from the existing palettes
    const existingColors = palettes.map(p => p.colors).flat();
    let rand = Math.floor(Math.random() * existingColors.length);
    const randomColor = colorsArr.concat(existingColors[rand]);
    setColorsArr(randomColor);
  };

  const onSortEnd: SortEndHandler = ({ oldIndex, newIndex }) => {
    setColorsArr((colors) => arrayMove(colors, oldIndex, newIndex));
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      colorsArr.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      colorsArr.every(({ color }) => color !== currentColor)
    );

    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      palettes.every(({ paletteName }: any) => paletteName.toLowerCase() !== value.toLowerCase())
    );
  }, [colorsArr, currentColor, colorName, paletteName, palettes])

  return (
    <div className={classes.root}>
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
          </ValidatorForm>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h4" noWrap>Design your palette</Typography>
          <div className={classes.button}>
            <Button variant="contained" color="secondary" onClick={handleClearColors}>Clear Palette</Button>
            <Button variant="contained" color="primary" onClick={handleAddRandomColor} disabled={isPaletteFull}>Random Colour</Button>
          </div>
          <ChromePicker color={currentColor} onChangeComplete={(newColor) => handleChangeColor(newColor)} />
          <ValidatorForm
            onSubmit={handeleAddColor}
            onError={errors => console.log(errors)}>
            <TextValidator
              value={colorName}
              name="colorName"
              onChange={e => handleChangeColorName(e)}
              validators={["required", "isColorNameUnique", "isColorUnique"]}
              errorMessages={[
                "Enter a color name",
                "Color name must be unique",
                "Color already used!"
              ]} />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isPaletteFull}
              style={{ backgroundColor: isPaletteFull ? "grey" : currentColor }}
            >
              {isPaletteFull ? "Palette Full" : "Add Colour"}
            </Button>
          </ValidatorForm>

          <Divider />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colorsArr={colorsArr}
          handleDeleteClick={handleDeleteClick}
          axis="xy"
          onSortEnd={onSortEnd} />
      </main>
    </div>
  );
}
