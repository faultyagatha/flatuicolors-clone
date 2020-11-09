import React from 'react';

import Slider from 'rc-slider';
import { INavbar } from '../../types';
import 'rc-slider/assets/index.css';
import './index.css';

export const Navbar = ({ level, handleLevelChange }: INavbar) => {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="#">Colour Picker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={handleLevelChange} />
        </div>
      </div>
    </header>
  )
};
