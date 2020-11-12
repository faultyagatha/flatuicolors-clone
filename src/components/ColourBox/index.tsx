import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import { withStyles } from "@material-ui/styles";

import { IColouBoxProps } from '../../types/types';
import './index.css';

// const styles = {
//   ColorBox: {
//     width: "20%",
//     height: props => (props.showingFullPalette ? "25%" : "50%"),
//     margin: "0 auto",
//     display: "inline-block",
//     position: "relative",
//     cursor: "pointer",
//     marginBottom: "-3.5px",
//     "&:hover button": {
//       opacity: 1
//     }
//   },
//   copyText: {
//     color: props =>
//       chroma(props.background).luminance() >= 0.7 ? "black" : "white"
//   },
//   colorName: {
//     color: props =>
//       chroma(props.background).luminance() <= 0.08 ? "white" : "black"
//   },
//   seeMore: {
//     color: props =>
//       chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
//     background: "rgba(255, 255, 255, 0.3)",
//     position: "absolute",
//     border: "none",
//     right: "0px",
//     bottom: "0px",
//     width: "60px",
//     height: "30px",
//     textAlign: "center",
//     lineHeight: "30px",
//     textTransform: "uppercase"
//   },
//   copyButton: {
//     color: props =>
//       chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
//     width: "100px",
//     height: "30px",
//     position: "absolute",
//     display: "inline-block",
//     top: "50%",
//     left: "50%",
//     marginLeft: "-50px",
//     marginTop: "-15px",
//     textAlign: "center",
//     outline: "none",
//     background: "rgba(255, 255, 255, 0.3)",
//     fontSize: "1rem",
//     lineHeight: "30px",
//     textTransform: "uppercase",
//     border: "none",
//     textDecoration: "none",
//     opacity: 0
//   }
// };


export const ColourBox = ({ background, name, paletteId, colorId, showLink }: IColouBoxProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={handleCopy}>
      <div className="colour-box" style={{ background }}>
        <div className={`copy-overlay ${isCopied && "show"}`} style={{ background }} />
        <div className={`copy-msg ${isCopied && "show"}`}>
          <h1>copied</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-btn">Copy</button>
        </div>
        {showLink && <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
          <span className="more">MORE</span>
        </Link>}
      </div>
    </CopyToClipboard>
  )
};
