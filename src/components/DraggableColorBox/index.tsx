import React from 'react';
import { makeStyles } from '@material-ui/styles';

interface IDraggableColorBox {
  color: string;
  name: string;
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
    "&:hover button": {
      opacity: 1
    }
  }
});

export const DraggableColorBox = ({ color, name }: IDraggableColorBox) => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: color }}>
      {name}
    </div>
  )
};
