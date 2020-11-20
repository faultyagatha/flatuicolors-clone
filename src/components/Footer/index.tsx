import React from 'react';

import { IFooter } from '../../types';
import { useStyles } from './useStyles';

export const Footer = ({ paletteName }: IFooter) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      {paletteName}
    </footer>
  )
};
