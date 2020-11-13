import React from 'react';

import { IFooter } from '../../types/types';
import { useStyles } from './useStyles';

export const Footer = ({ paletteName, emoji }: IFooter) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  )
};
