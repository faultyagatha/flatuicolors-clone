import React from 'react';

import './index.css';

interface IColouBoxProps {
  background: string;
  name: string;
}

export const ColourBox = ({ background, name }: IColouBoxProps) => {
  return (
    <div className="colour-box" style={{ background }}>
      <span>MORE</span>
      <span>{name}</span>
    </div>
  )
};
