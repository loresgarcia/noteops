/* eslint-disable react/prop-types */
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './Switch.css';

const Switch = ({ isDarkMode, toggleDarkMode, textColor, backgroundColor }) => {
    return(
        <div className='switch-container'>
            <button
            className='switch'
            onClick={toggleDarkMode}
            style={{
                backgroundColor: backgroundColor,
                color: textColor
            }}
            >
            {isDarkMode ? (
                <LightModeIcon className='switch-icon' />
            ) : (
                <DarkModeIcon className='switch-icon' />
            )}
            </button>
        </div>
    );
}

export default Switch;
