import { makeStyles } from '@material-ui/core/styles';

import { DRAWER_WIDTH } from '../../constants';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: "100vh"
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    height: "100vh"
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    display: "flex",
    alignItems: "center"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: "0 8px",
    width: "100%",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: 0, //theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -DRAWER_WIDTH,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center"
  },
  button: {
    width: "50%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "0.9rem",
  }
}));