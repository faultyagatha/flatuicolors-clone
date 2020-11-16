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

import { DraggableColorBox } from '../DraggableColorBox';
import { useStyles } from './useStyles';

interface ICreatePalette {
  saveNewPalette(newPalette: any): void;
}

//TODO: refactor, clean up the input field
export const CreatePalette = ({ saveNewPalette }: ICreatePalette) => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('purple');
  const [colorsArr, setColorsArr] = useState([{ color: 'purple', name: 'purple' }]);
  const [colorName, setColorName] = useState('');
  const [paletteName, setPaletteName] = useState('my-palette');

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

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      colorsArr.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      colorsArr.every(({ color }) => color !== currentColor)
    );
  }, [colorsArr, currentColor, colorName])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
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
              onChange={handleChangePaletteName} />
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
            <Button variant="contained" color="secondary">Clear Palette</Button>
            <Button variant="contained" color="primary">Random Colour</Button>
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
              style={{ backgroundColor: currentColor }}
            >
              Add Colour
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
        <ul>{colorsArr.map(color => (
          <DraggableColorBox color={color.color} name={color.name} />
        ))}</ul>
      </main>
    </div>
  );
}
