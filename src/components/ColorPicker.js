import React, { useState } from 'react'

function ColorPicker() {
const [selectedColor, setSelectedColor] = useState('#000000')

const handleChange = (e) => {
    setSelectedColor(e.target.value);
}

  return (
    <div className='counter'>
        <input type='color' onChange={handleChange}/>
        <div style={{width:'300px', height:'300px', backgroundColor:selectedColor}}>

        </div>
    </div>
  )
}

export default ColorPicker