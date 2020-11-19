import { makeStyles } from '@material-ui/styles';
import chroma from 'chroma-js';

import { BREAKPOINTS } from '../../constants';

export const useStyles = makeStyles({
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    // textTransform: "uppercase",
    // marginBottom: "-3.5px",
    "&:hover svg": {
      color: (props: any) =>
        chroma(props.color).luminance() >= 0.7
          ? "rgba(255,255,255,0.8)"
          : "rgba(0,0,0,0.6)",
      transform: "scale(1.5)"
    },
    [BREAKPOINTS.down("lg")]: {
      width: "25%",
      height: "33.3333%"
    },
    [BREAKPOINTS.down("md")]: {
      width: "50%",
      height: "20%"
    },
    [BREAKPOINTS.down("xs")]: {
      width: "100%",
      height: "10%"
    }
  },
  content: {
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
    color: 'olive',//"rgba(255, 255, 255, 0.5",
    transition: "all 0.3s ease-in-out"
  }
});