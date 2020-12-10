import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { arrayMove, SortEndHandler } from 'react-sortable-hoc';

import { DraggableColorList } from '../DraggableColorList';
import { CreatePaletteNav } from '../CreatePaletteNav';
import { ColorPicker } from '../ColorPicker';
import { useStyles } from './useStyles';
import { ICreatePalette } from '../../types';
import { openDrawer, closeDrawer } from '../../redux/actions';
import { RootState } from '../../redux/reducers';

//TODO: clean up the input field
export const CreatePalette = ({ saveNewPalette, palettes, maxColors }: ICreatePalette) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const dispatch = useDispatch();
  const { isDrawerOpen } = useSelector((state: RootState) => state.ui)
  const [colorsArr, setColorsArr] = useState(palettes[0].colors);

  const isPaletteFull = colorsArr.length >= maxColors;

  const handleDrawerOpen = () => {
    dispatch(openDrawer());
  };

  const handleDrawerClose = () => {
    dispatch(closeDrawer());
  };

  const handleAddColor = (currentColor: string, colorName: string) => {
    const newColor = {
      color: currentColor,
      name: colorName
    }
    setColorsArr(colorsArr.concat(newColor));
    // setColorName(' '); //clean up the input
  };

  const handleDeleteClick = (colorName: string) => {
    setColorsArr(colorsArr.filter(c => c.name !== colorName));
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
        open={isDrawerOpen}
        colorsArr={colorsArr}
        saveNewPalette={saveNewPalette}
        palettes={palettes}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={handleClearColors}
          >
            Clear Palette
              </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleAddRandomColor}
            disabled={isPaletteFull}
          >
            Random Colour
              </Button>
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
          [classes.contentShift]: isDrawerOpen,
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
