import React from "react";
import Slider from "@mui/material/Slider"

export default function SliderScore(props) {
    return (
      <div>
          <Slider
            aria-label="Quality"
            defaultValue={3}
            valueLabelDisplay="auto"
            step={0.5}
            marks
            min={1}
            max={5}
            />
      </div>  
    );
}