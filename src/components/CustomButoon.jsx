import { color } from 'framer-motion'
import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'

import { getContrastingColor } from '../config/helpers'

const CustomButoon = ({type, title, customStyles, handleClick}) => {
const snap = useSnapshot(state);
const generateStyle=(type) => {
    if(type == 'filled'){
        return{
            backgroundColor: snap.color,
            color: getContrastingColor(snap.color),
        }
    }else if(type == 'outline'){
        return{
            borderWidth: '1px',
            borderColor: snap.color,
            color: snap.color,
            backgroundColor: 'transparent'
        }
}

}
  return (
    <button 
    className={'px-2 py-1.2 flex-1 rounded-md  w-fit  py-2.5 font-bold text-sm'}
    style ={generateStyle(type)}
    onClick={handleClick}
    >
        {title}

    </button>
  )
}

export default CustomButoon;