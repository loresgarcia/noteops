import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './Switch.css';

export default function Switch({ isDarkMode, toggleDarkMode }){

    return(
        <button
      className='switch'
      onClick={toggleDarkMode}
      style={{
        backgroundColor: isDarkMode ? '#2F2F37' : '#EEEEFF',
        color: isDarkMode ? '#FFF' : '#333'
      }}
    >
      {isDarkMode ? (
        <LightModeIcon className='switch-icon' />
      ) : (
        <DarkModeIcon className='switch-icon' />
      )}
    </button>

    );
}