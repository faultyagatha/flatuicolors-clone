import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { INavbar } from '../../types/types';
import './index.css'; //must be after rc-slider to override it's native style

export const Navbar = ({ level, isSingleColor, handleLevelChange, handleSelectChange }: INavbar) => {
  const [format, setFormat] = useState('hex');
  const [isOpen, setIsOpen] = useState(false);

  const handleFormatChange = (e: any) => {
    e.preventDefault();
    setIsOpen(true);
    console.log(isOpen);
    setFormat(e.target.value);
    handleSelectChange(e.target.value);
  };

  const handleCloseSnackbar = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">Colour Picker</Link>
      </div>
      {!isSingleColor && <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={handleLevelChange} />
        </div>
      </div>}
      <div className="select-container">
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
        // onClose={handleCloseSnackbar}
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
