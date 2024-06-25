/* eslint-disable react/prop-types */
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './Switch.css';

const Switch = ({ isDarkMode, toggleDarkMode }) => {
    return(
        <div className='switch-container'>
            <button
            className='switch'
            onClick={toggleDarkMode}
            style={{
                backgroundColor: isDarkMode ? '#2F2F37' : '#EEEEFF',
                color: isDarkMode ? '#F2F2F2' : '#1C1C23'
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
