import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import { IPaletteList } from '../../types';
import { RootState } from '../../redux/reducers';
import { MiniPalette } from '../MiniPalette';
import { ConfirmDialog } from '../ConfirmDialog';
import { restoreDefaults, hideAlert } from '../../redux/actions';
import { useStyles } from './useStyles';

export const PaletteList = ({ seedPalettes }: IPaletteList) => {
  const { isAlert } = useSelector((state: RootState) => state.ui)
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const goToPalette = (id: string) => {
    history.push(`/palette/${id}`);
  };

  const handleRestoreDefaults = () => {
    dispatch(restoreDefaults());
  };

  console.log(isAlert);

  return (
    <div className={classes.root} >
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.title}>REACT COLORS</h1>
          <div className={classes.navBtns}>
            <Link to='/palette/new'><Button>CREATE NEW PALETTE</Button></Link>
            <Button onClick={handleRestoreDefaults}>RESTORE DEFAULTS</Button>
          </div>
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
      {isAlert && <Alert
        severity="info"
        className={classes.alert}
        onClose={() => dispatch(hideAlert())}>Woopa! You cannot delete this palette</Alert>}
    </div>
  )
};

export default PaletteList;
