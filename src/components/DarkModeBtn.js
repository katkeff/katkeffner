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
    <button className='button-78'onClick={toggleTheme}>toggle theme</button>
  </div>
  );
}
export default DarkModeBtn;
