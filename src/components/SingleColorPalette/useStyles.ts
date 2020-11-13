import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  palette: {
    height: "100vh",
    // display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    opacity: 1,
    backgroundColor: "black",
    color: "white",
    // top: "50%",
    // left: "50%",
    // marginLeft: "-50px",
    // marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none"
  }
})