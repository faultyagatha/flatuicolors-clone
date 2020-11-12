import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';

import './index.css';

interface IColouBoxProps {
  background: string;
  name: string;
  colorId: string;
  paletteId: string;
};

export const ColourBox = ({ background, name, paletteId, colorId }: IColouBoxProps) => {
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
        <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
          <span className="more">MORE</span>
        </Link>
      </div>
    </CopyToClipboard>
  )
};
