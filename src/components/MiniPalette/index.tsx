import React from 'react';
import { useDispatch } from 'react-redux';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import { IMiniPalette } from '../../types';
import { deletePalette } from '../../redux/actions';
import { useStyles } from './useStyles';

export const MiniPalette = ({
  paletteName,
  id,
  colors,
  handlePaletteClick
}: IMiniPalette) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  console.log('RENDERING: ', paletteName);

  const handleDeletePalette = (e: any) => {
    e.stopPropagation();
    // dispatch(deletePalette(id));
  };

  const miniColorBoxes = colors.map(color => {
    return (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={Math.random() * 10000}
      />
    )
  });
  return (
    <div className={classes.root} onClick={handlePaletteClick}>
      <DeleteOutlinedIcon
        className={classes.deleteIcon}
        style={{ transition: "all 0.2s ease-in-out" }}
        onClick={handleDeletePalette}
      />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
      </h5>
    </div>
  )
};
