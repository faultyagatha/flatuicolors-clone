import { makeStyles } from "@material-ui/styles";

import { BREAKPOINTS } from '../../constants';

export const useStyles = makeStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh"
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "18px",
    textTransform: "uppercase",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "gray",
    },
    [BREAKPOINTS.down("xs")]: {
      display: "none"
    }
  },
  goBack: {
    fontSize: "16px",
    textTransform: "uppercase",
    height: "70%",
    display: "flex",
    alignItems: "center",
    background: "#d7dee1",
    border: "none",
    outline: "none",
    color: "gray",
    "&:hover": {
      textDecoration: "none",
      cursor: "pointer",
      color: "black",
    },
    [BREAKPOINTS.down("xs")]: {
      display: "none"
    }
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem"
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-handle, .rc-slider-handle: active, .rc-slider-handle: hover, .rc-slider-handle: focus": {
      backgroundColor: "olivedrab",
      outline: "none",
      border: "2px solid olivedrab",
      boxShadow: "none",
      width: "14px",
      height: "14px",
      marginLeft: "-7px",
      marginTop: "-3px"
    },
    [BREAKPOINTS.down("sm")]: {
      width: "150px"
    }
  }
});