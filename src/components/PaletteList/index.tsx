import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { IPaletteList } from '../../types/types';
import MiniPalette from '../MiniPalette';
import { useStyles } from './useStyles';

export const PaletteList = (props: IPaletteList) => {
  const classes = useStyles();
  const history = useHistory();
  const { seedPalettes } = props;

  const goToPalette = (id: string) => {
    console.log('palette id', id);
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.root} >
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          {seedPalettes.map(palette => (
            <MiniPalette {...palette} handlePaletteClick={() => goToPalette(palette.id)} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default PaletteList;
