import React from "react";
import Slider from "@mui/material/Slider"
import { styled } from '@mui/material/styles';

export default function SliderScore(props) {
  let scores = [3]

  function getAverage(scores) {
    
  }

  const avg = [
    {
      value: props.average,
      label: props.average
    }
  ]


  const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';


  const IOSSlider = styled(Slider)(({ theme }) => ({
      color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
      height: 2,
      padding: '15px 0',
      '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        '&:focus, &:hover, &.Mui-active': {
          boxShadow:
            '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            boxShadow: iOSBoxShadow,
          },
        },
      },
      '& .MuiSlider-valueLabel': {
        fontSize: 12,
        fontWeight: 'normal',
        top: -6,
        backgroundColor: 'unset',
        color: theme.palette.text.primary,
        '&:before': {
          display: 'none',
        },
        '& *': {
          background: 'transparent',
          color: theme.palette.mode === 'dark' ? '#fff' : '#000',
        },
      },
      '& .MuiSlider-track': {
        border: 'none',
      },
      '& .MuiSlider-rail': {
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
      },
      '& .MuiSlider-mark': {
        backgroundColor: '#3880ff',
        height: 12,
        width: 2,
      },
      '& .MuiSlider-markLabel': {
        color: theme.palette.text.primary
      }
    }));

    return (
          <IOSSlider
            aria-label="Quality"
            defaultValue={3}
            valueLabelDisplay="auto"
            step={0.5}
            marks={avg}
            min={1}
            max={5}
            />
    );
}