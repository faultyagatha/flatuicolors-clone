import React from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { SortableElement } from 'react-sortable-hoc';

import { useStyles } from './useStyles';

interface IDraggableColorBox {
  color: string;
  name: string;
  handleDeleteClick(): void
};

export const DraggableColorBox = SortableElement(({ color, name, handleDeleteClick }: IDraggableColorBox) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{ backgroundColor: color }}
    >
      <div className={classes.content}>
        <span>{name}</span>
        <DeleteOutlinedIcon
          className={classes.deleteIcon}
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  )
});
