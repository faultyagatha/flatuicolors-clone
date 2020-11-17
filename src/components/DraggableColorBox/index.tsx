import React from 'react';
import { makeStyles } from '@material-ui/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { SortableElement } from 'react-sortable-hoc';

interface IDraggableColorBox {
  color: string;
  name: string;
  handleDeleteClick(): void
};

const useStyles = makeStyles({
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "rgba(255, 255, 255, 0.5",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    color: "rgba(255, 255, 255, 0.5",
    transition: "all 0.3s ease-in-out"
  }
});

export const DraggableColorBox = SortableElement(({ color, name, handleDeleteClick }: IDraggableColorBox) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteOutlinedIcon className={classes.deleteIcon} onClick={handleDeleteClick} />
      </div>
    </div>
  )
});
