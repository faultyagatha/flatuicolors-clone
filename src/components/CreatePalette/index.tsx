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
  savePalette(newPalette: any): void;
}


export const CreatePalette = ({ savePalette }: ICreatePalette) => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('purple');
  const [colorsArr, setColorsArr] = useState([{ color: 'purple', name: 'purple' }]);
  const [colorName, setColorName] = useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeColor = (newColor: ColorResult) => {
    setCurrentColor(newColor.hex);
  };

  const handeleAddColor = (color: string) => {
    const newColor = {
      color: color,
      name: colorName
    }
    // const newColorsArr = colorsArr.concat(newColor);
    setColorsArr(colorsArr.concat(newColor));
    console.log(colorsArr)
  };

  const handleNameChange = (e: any) => {
    setColorName(e.target.value);
  };

  const handleSavePalette = () => {
    const newPalette = {
      paletteName: "New test Palette",
      colors: colorsArr
    }
    savePalette(newPalette);
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
  }, [colorsArr, currentColor])

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
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSavePalette}
          >Save Palette</Button>
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
            onSubmit={() => handeleAddColor(currentColor)}
            onError={errors => console.log(errors)}>
            <TextValidator
              value={colorName}
              name='color'
              onChange={e => handleNameChange(e)}
              validators={["required", "isColorNameUnique", "isColorUnique"]}
              errorMessages={[
                "Enter a color name",
                "Color name must be unique",
                "Color already used!"
              ]} />
          </ValidatorForm>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ backgroundColor: currentColor }}
            onClick={() => handeleAddColor(currentColor)}
          >
            Add Colour
          </Button>
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
          <DraggableColorBox color={color.color} />
        ))}</ul>
      </main>
    </div>
  );
}
