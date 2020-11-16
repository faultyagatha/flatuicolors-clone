import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';

import { IColouBoxProps } from '../../types';
import { useStyles } from './useStyles';

export const ColourBox = (props: IColouBoxProps) => {
  const { background, name, paletteId, colorId, showLink, showFullPalette } = props;
  const [isCopied, setIsCopied] = useState(false);
  const classes = useStyles(props);

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


// export const ColourBox = ({ background, name, paletteId, colorId, showLink }: IColouBoxProps) => {
//   const [isCopied, setIsCopied] = useState(false);
//   const isDarkColor = chroma(background).luminance() <= 0.3;
//   //const isLightColor = chroma(background).luminance() >= 0.3;

//   const handleCopy = () => {
//     setIsCopied(true);
//     setTimeout(() => setIsCopied(false), 1500);
//   };

//   return (
//     <CopyToClipboard text={background} onCopy={handleCopy}>
//       <div className="colour-box" style={{ background }}>
//         <div className={`copy-overlay ${isCopied && "show"}`} style={{ background }} />
//         <div className={`copy-msg ${isCopied && "show"}`}>
//           <h1 className={isDarkColor ? "light-text" : "dark-text"}>copied</h1>
//           <p className={isDarkColor ? "light-text" : "dark-text"}>{background}</p>
//         </div>
//         <div className="copy-container">
//           <div className="box-content">
//             <span className={isDarkColor ? "light-text" : "dark-text"}>{name}</span>
//             {chroma(background).luminance()}
//           </div>
//           <button className="copy-btn">Copy</button>
//         </div>
//         {showLink && <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
//           <span className={`more ${isDarkColor ? "light-text" : "dark-text"}`}>MORE</span>
//         </Link>}
//       </div>
//     </CopyToClipboard>
//   )
// };
