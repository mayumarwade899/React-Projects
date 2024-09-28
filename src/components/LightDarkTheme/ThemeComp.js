import React from 'react'
import { useTheme } from './Context'
import '../styles/lightDark.css'

function ThemeComp() {
const {isDarkMode} = useTheme();
const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  return (
    <div className={`container ${themeClass}`}>
      <p>This component uses selected theme</p>
    </div>
  )
}

export default ThemeComp