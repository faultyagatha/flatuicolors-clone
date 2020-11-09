import React from 'react';

import './index.css';

interface IFooter {
  paletteName: string;
  emoji: string;
}

export const Footer = ({ paletteName, emoji }: IFooter) => {
  return (
    <footer className="footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  )
};
