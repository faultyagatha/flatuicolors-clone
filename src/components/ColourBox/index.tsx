import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';

import { IColouBox } from '../../types';
import { useStyles } from './useStyles';

export const ColourBox = (props: IColouBox) => {
  const { background, name, paletteId, colorId, showLink, showFullPalette } = props;
  const classes = useStyles(props);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={handleCopy}>
      <div style={{ background }} className={classes.colorBox}>
        <div
          style={{ background }}
          className={`${classes.copyOverlay} ${isCopied &&
            classes.showOverlay}`}
        />
        <div
          className={`${classes.copyMessage} ${isCopied &&
            classes.showMessage}`}
        >
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showFullPalette && showLink && <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
          <span className={classes.seeMore}>MORE</span>
        </Link>}
      </div>
    </CopyToClipboard>
  )
};
