import { makeStyles } from '@material-ui/core/styles';

import { DRAWER_WIDTH, BREAKPOINTS } from '../../constants';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none',
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none"
    },
    [BREAKPOINTS.down("xs")]: {
      marginRight: "0.5rem"
    }
  },
  button: {
    margin: "0 0.5rem",
    background: "#d7dee1",
    color: "gray",
    [BREAKPOINTS.down("xs")]: {
      margin: "0 0.2rem",
      padding: "0.3rem"
    }
  },
  title: {
    [BREAKPOINTS.down("md")]: {
      display: "none"
    },
    [BREAKPOINTS.down("xs")]: {
      display: "none"
    }
  }
}));