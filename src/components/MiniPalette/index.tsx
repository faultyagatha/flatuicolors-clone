import React from 'react';
import { useDispatch } from 'react-redux';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import { IMiniPalette } from '../../types';
import { useStyles } from './useStyles';

export const MiniPalette = (props: IMiniPalette) => {
  const { paletteName, emoji, colors, handlePaletteClick } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeletePalette = (e: any) => {
    e.stopPropagation();
  };

  const miniColorBoxes = colors.map(color => {
    return (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      />
    )
  });
  return (
    <div className={classes.root} onClick={handlePaletteClick}>
      <DeleteOutlinedIcon
        className={classes.deleteIcon}
        style={{ transition: "all 0.3s ease-in-out" }}
        onClick={handleDeletePalette}
      />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  )
};
