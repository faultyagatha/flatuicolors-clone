import React from 'react';

import { IMiniPalette } from '../../types/types';
import { useStyles } from './useStyles';

export const MiniPalette = (props: IMiniPalette) => {
  const { paletteName, emoji, colors, handlePaletteClick } = props;
  const classes = useStyles();
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
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  )
};
