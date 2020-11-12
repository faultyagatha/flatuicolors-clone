import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { IPaletteList, IPalette } from '../../types/types';
import { WithStylesPublic } from '../../types/maUI';

import MiniPalette from '../MiniPalette';
import { withStyles, WithStyles, createStyles } from "@material-ui/styles";

interface Props extends WithStylesPublic<typeof styles> {
  seedPalettes: IPalette[];
}

const styles = createStyles({
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  }
});

export const PaletteList = (props: Props) => {
  const history = useHistory();
  const { seedPalettes, classes } = props;

  const gotToPalette = (id: string) => {
    console.log('palette id', id);
    history.push(`/palette/${id}`);
  };

  if (classes) {
    console.log(classes);
    return (
      <div className={classes.root} >
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {seedPalettes.map(palette => (
              <MiniPalette {...palette} handlePaletteClick={() => gotToPalette(palette.id)} />
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    console.log('CLASSES', classes);
    return (
      <div>
        <h1>React Color</h1>
        {seedPalettes.map(palette => (
          <MiniPalette {...palette} handlePaletteClick={() => gotToPalette(palette.id)} />
        ))}
      </div>
    )
  }
};

export default withStyles(styles)(PaletteList);
