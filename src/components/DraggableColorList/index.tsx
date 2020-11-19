import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import { DraggableColorBox } from '../DraggableColorBox';
import { IDraggableColorList } from '../../types/app';

//TODO: fix remove color 
export const DraggableColorList = SortableContainer(({ colorsArr, handleDeleteClick }: IDraggableColorList) => {
  return (
    <div style={{ height: "100%" }}>
      {colorsArr.map((color, index) => (
        <DraggableColorBox
          index={index}
          color={color.color}
          name={color.name}
          key={color.name}
          handleDeleteClick={() => handleDeleteClick(color.name)} />
      ))}
    </div>
  )
});
