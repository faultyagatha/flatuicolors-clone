import React from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { SortableElement } from 'react-sortable-hoc';

import { useStyles } from './useStyles';
import { IDraggableColorBox } from '../../types/app';


export const DraggableColorBox = SortableElement((props: IDraggableColorBox) => {
  const { color, name, handleDeleteClick } = props;
  const classes = useStyles(props);
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
