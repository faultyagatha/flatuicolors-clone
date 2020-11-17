import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { arrayMove, SortEndHandler } from 'react-sortable-hoc';

import { DraggableColorList } from '../DraggableColorList';
import { CreatePaletteNav } from '../CreatePaletteNav';
import { ColorPicker } from '../ColorPicker';
import { useStyles } from './useStyles';
import { IPalette } from '../../types';

//TODO: FIX TYPES
interface ICreatePalette {
  saveNewPalette(newPalette: any): void;
  palettes: IPalette[];
  maxColors: number;
}

//TODO: clean up the input field
export const CreatePalette = ({ saveNewPalette, palettes, maxColors }: ICreatePalette) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [colorsArr, setColorsArr] = useState(palettes[0].colors)//useState([{ color: 'purple', name: 'purple' }]);

  const isPaletteFull = colorsArr.length >= maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAddColor = (currentColor: string, colorName: string) => {
    const newColor = {
      color: currentColor,
      name: colorName
    }
    setColorsArr(colorsArr.concat(newColor));
    // setColorName(' '); //clean up the input
    console.log(colorsArr)
  };

  //TODO: FIX DELETE CLICK
  const handleDeleteClick = (colorName: string) => {
    setColorsArr(colorsArr.filter(c => c.name !== colorName));
    // console.log(colorsArr)
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

  return (
    <div className={classes.root}>
      <CreatePaletteNav
        open={open}
        colorsArr={colorsArr}
        saveNewPalette={saveNewPalette}
        palettes={palettes}
        handleDrawerOpen={handleDrawerOpen}
      />
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
          <ColorPicker
            isPaletteFull={isPaletteFull}
            handleAddColor={handleAddColor}
            colorsArr={colorsArr}
          />
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
