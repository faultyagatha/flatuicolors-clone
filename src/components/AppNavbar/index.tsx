import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { INavbar } from '../../types';
import { useStyles } from './useStyles';

export const Navbar = ({
  level,
  isSingleColor,
  paletteId,
  handleLevelChange,
  handleSelectChange
}: INavbar) => {
  const history = useHistory();
  const classes = useStyles();
  const [format, setFormat] = useState('hex');
  const [isOpen, setIsOpen] = useState(false);

  const handleFormatChange = (e: any) => {
    e.preventDefault();
    setIsOpen(true);
    setFormat(e.target.value);
    handleSelectChange(e.target.value);
  };

  const handleCloseSnackbar = () => {
    setIsOpen(false);
  };

  const handleGoBackClick = (id: string) => {
    history.push(`/palette/${id}`);
  };

  return (
    <header className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">Colour Picker</Link>
      </div>
      {!isSingleColor && <div className={classes.slider}>
        <span>Level: {level}</span>
        <div>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={handleLevelChange} />
        </div>
      </div>}
      {isSingleColor && paletteId && <Button
        className={classes.goBack}
        onClick={() => handleGoBackClick(paletteId)}
      >
        Go Back
      </Button>}
      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - 255, 255, 255</MenuItem>
          <MenuItem value="rgba">RGBA - 255, 255, 255, 1.0</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isOpen}
        autoHideDuration={3000}
        message={<span id="message-id">Format Changed to {format.toUpperCase()}</span>}
        ContentProps={{ "aria-describedby": "message-id" }}
        action={[
          <IconButton
            onClick={handleCloseSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </header>
  )
};
