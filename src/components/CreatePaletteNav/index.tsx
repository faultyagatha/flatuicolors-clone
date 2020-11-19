import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

import { useStyles } from './useStyles';
import { ICreatePaletteNav } from '../../types';
import { PaletteDialog } from '../PaletteDialog';



export const CreatePaletteNav = ({
  open,
  colorsArr,
  saveNewPalette,
  palettes,
  handleDrawerOpen
}: ICreatePaletteNav) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSavePalette = (paletteName: string) => {
    const newPalette = {
      paletteName: paletteName,
      id: paletteName.toLowerCase().replace(/ /g, "-"),
      colors: colorsArr
    }
    saveNewPalette(newPalette);
    history.push("/");
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  }

  const handleHideDialog = () => {
    setDialogOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant='h6' color='inherit' noWrap>
            CREATE YOUR PALETTE
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Back
              </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDialogOpen}
            className={classes.button}
          >
            Save
              </Button>
        </div>
      </AppBar>
      {dialogOpen && (
        <PaletteDialog
          palettes={palettes}
          handleSavePalette={handleSavePalette}
          handleHideDialog={handleHideDialog}
          dialogOpen={dialogOpen}
        />
      )}
    </div>
  )
}
