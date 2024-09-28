import React from 'react'
import { useTheme } from './Context'

function LightDarkTheme() {
const {isDarkMode, toggleTheme} = useTheme();

  return (
    <div>
      <label>
        <input type='checkbox' checked={isDarkMode} onChange={toggleTheme}/>
        Dark Mode
      </label>
    </div>
  )
}

export default LightDarkTheme