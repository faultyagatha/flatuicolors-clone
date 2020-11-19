import { makeStyles } from "@material-ui/styles";

import { BREAKPOINTS } from '../../constants';

export const useStyles = makeStyles({
  /** css transition group customisation */
  "@global": {
    ".fade-exit": {
      opacity: 1,
      color: "purple"
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
      color: "blue"
    }
    /** end of css transition customisation */
  },
  root: {
    backgroundColor: "#d7f1f3",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "scroll"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [BREAKPOINTS.down("xl")]: {
      width: "80%"
    },
    [BREAKPOINTS.down("xs")]: {
      width: "75%"
    }
  },
  title: {
    fontSize: "2rem"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    "& a": {
      color: "black",
      // fontSize: "1.2rem",
      textDecoration: "none"
    }
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none"
    },
    [BREAKPOINTS.down("xs")]: {
      marginRight: "0.5rem"
    },
  },
  palettes: {
    // boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
    [BREAKPOINTS.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [BREAKPOINTS.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem"
    }
  }
});