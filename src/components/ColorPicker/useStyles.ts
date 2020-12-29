import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    width: "90%"
  },
  picker: {
    width: "100% !important",
    marginTop: "2rem"
  },
  addColor: {
    width: "70%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "1rem",
  },
  colorNameInput: {
    width: "100%",
    height: "70px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  colorNameText: {
    // width: "100% !important",
    alignItems: "center"
  }
});