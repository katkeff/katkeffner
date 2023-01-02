import React, { useState, useEffect } from 'react';
import '../styles/darkMode.css'
function DarkModeBtn() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
    setTheme('dark');
    } else {
    setTheme('light');
    }
  };
useEffect(() => {
  document.body.className = theme;
  }, [theme]);
  return (
  <div className={`App ${theme}`}>
<div class="area">
  <div class="wire"></div>
  <div class="fixture">
    <div class="strip"></div>
    <div class="strip"></div>
    <div class="strip"></div>
  </div>
  <div class="bulb" onClick={toggleTheme}>
    <div class="zig"></div>
    <div class="zig"></div>
    <div class="zig"></div>
  </div>
</div>
</div>

  );
}
export default DarkModeBtn;
