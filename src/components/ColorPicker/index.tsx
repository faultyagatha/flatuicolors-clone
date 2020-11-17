import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker, ColorResult } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

interface IColorPicker {
  isPaletteFull: boolean;
  handleAddColor: (currentColor: string, colorName: string) => void;
  colorsArr: {
    name: string;
    color: string;
  }[];
}

export const ColorPicker = ({ isPaletteFull, handleAddColor, colorsArr }: IColorPicker) => {
  const [currentColor, setCurrentColor] = useState('purple');
  const [colorName, setColorName] = useState('');

  const handleChangeColor = (newColor: ColorResult) => {
    setCurrentColor(newColor.hex);
  };

  const handleChangeColorName = (e: any) => {
    setColorName(e.target.value);
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      colorsArr.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      colorsArr.every(({ color }) => color !== currentColor)
    );
  }, [colorsArr, currentColor, colorName])

  return (
    <div>
      <ChromePicker color={currentColor} onChangeComplete={(newColor) => handleChangeColor(newColor)} />
      <ValidatorForm
        onSubmit={() => handleAddColor(currentColor, colorName)}
        onError={errors => console.log(errors)}>
        <TextValidator
          value={colorName}
          name="colorName"
          onChange={e => handleChangeColorName(e)}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name",
            "Color name must be unique",
            "Color already used!"
          ]} />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={isPaletteFull}
          style={{ backgroundColor: isPaletteFull ? "grey" : currentColor }}
        >
          {isPaletteFull ? "Palette Full" : "Add Colour"}
        </Button>
      </ValidatorForm>
    </div>
  )
};
