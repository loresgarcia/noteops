/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import logoLight from '../../assets/logo-light.png';
import logoDark from '../../assets/logo-dark.png';
import Logo from '../Logo';
import InputBar from "../InputBar";
import Switch from '../Switch';
import './Header.css';

const Header =({ onSearch, isDarkMode, toggleDarkMode }) => {

    const getCSSVariable = (variable) => getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

    const lightTextColor = getCSSVariable('--light-text-color');
    const darkTextColor = getCSSVariable('--dark-text-color');
    const lightBackgroundColor = getCSSVariable('--light-background-color');
    const darkBackgroundColor = getCSSVariable('--dark-background-color');
    const lightFundoColor = getCSSVariable('--light-fundo-color');
    const darkFundoColor = getCSSVariable('--dark-fundo-color');

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
            style={{ backgroundColor: isDarkMode ? darkBackgroundColor : lightBackgroundColor }}
        >
        <Logo
            src={isDarkMode ? logoDark : logoLight}
            width={width}
        />
        <InputBar
            placeholder='Pesquisar'
            icon={"search"}
            textColor={isDarkMode ? darkTextColor : lightTextColor}
            backgroundColor={isDarkMode ? darkFundoColor : lightFundoColor}
            onSearch={onSearch}
        />
        <Switch
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode}
            textColor={isDarkMode ? darkTextColor : lightTextColor}
            backgroundColor={isDarkMode ? darkFundoColor : lightFundoColor}
        />
        </header>
    );
}

export default Header;
