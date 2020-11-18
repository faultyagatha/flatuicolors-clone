import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { IPaletteList } from '../../types';
import { MiniPalette } from '../MiniPalette';
import { ConfirmDialog } from '../ConfirmDialog';
import { useStyles } from './useStyles';

export const PaletteList = (props: IPaletteList) => {
  const classes = useStyles();
  const history = useHistory();
  const { seedPalettes } = props;

  const goToPalette = (id: string) => {
    history.push(`/palette/${id}`);
  };

  return (
    <div className={classes.root} >
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.title}>React Colors</h1>
          <Link to='/palette/new'>CREATE PALETTE</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {seedPalettes.map(palette => (
            <CSSTransition
              key={palette.paletteName}
              classNames="fade"
              timeout={500}>
              <MiniPalette
                key={palette.paletteName}
                {...palette}
                handlePaletteClick={() => goToPalette(palette.id)} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <ConfirmDialog />
    </div>
  )
};

export default PaletteList;
