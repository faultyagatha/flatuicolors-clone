import React from 'react';
import { useDispatch } from 'react-redux';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import { IMiniPalette } from '../../types';
import { openConfDialog, showAlert } from '../../redux/actions';
import { useStyles } from './useStyles';

export const MiniPalette = ({
  paletteName,
  id,
  colors,
  handlePaletteClick,
}: IMiniPalette) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (id === 'material-ui-colors') {
      console.log('ID: ', id)
      dispatch(showAlert());
    }
    else {
      dispatch(openConfDialog(id));
    }

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
    <>
      <div className={classes.root} onClick={handlePaletteClick}>
        <DeleteOutlinedIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.2s ease-in-out" }}
          onClick={handleDeleteClick}
        />
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName}
        </h5>
      </div>
    </>
  )
};
