import React from 'react'
import { SketchPicker } from 'react-color';
 import { useSnapshot } from 'valtio';


import state from '../store'; // Assuming you have a store for managing state

const Colorpicker = () => {
const snap = useSnapshot(state);


  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        onChange={(color) => {
          state.color = color.hex; // Update the color in the state
        }}
        disableAlpha // Disable alpha channel if not needed
        presetColors={ [
          "#ccc",
          "#EFBD4E",
          "#80C670",
          "#726DE8",
          "#353934",
          "#2CCCE4",
          "#ff8a65",
          "#7098DA",
          "#C19277",
          "#FF96AD",
          "#512314"
        ]} // Example preset colors
      />

    </div>
  )
}

export default Colorpicker;