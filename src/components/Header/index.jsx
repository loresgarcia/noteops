/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './Header.css';
import logoLight from '../../assets/logo-light.png';
import logoDark from '../../assets/logo-dark.png';
import Logo from '../Logo';
import InputBar from "../InputBar";
import Switch from '../Switch';

const Header =({ onSearch, isDarkMode, toggleDarkMode }) => {

  const [width, setWidth] = useState(window.innerWidth < 600 ? '6rem' : '10rem');

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth < 600 ? '6rem' : '10rem');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className='header'
      style={{ backgroundColor: isDarkMode ? '#1C1C21' : '#9FB4C7' }}
    >
      <Logo
        src={isDarkMode ? logoDark : logoLight}
        width={width}
      />
      <InputBar
        placeholder='Pesquisar'
        icon={"search"}
        backgroundColor={isDarkMode ? '#2F2F37' : '#EEEEFF'}
        textColor={isDarkMode ? '#F2F2F2' : '#1C1C23' }
        onSearch={onSearch}
      />
      <Switch
      isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}
      />
    </header>
  );
}

export default Header;
