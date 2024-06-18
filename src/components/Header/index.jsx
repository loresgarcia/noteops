import './Header.css';
import logoLight from '../../assets/logo-light.png';
import logoDark from '../../assets/logo-dark.png';
import Logo from '../Logo';
import InputBar from "../InputBar";
import search from '../../assets/search.png';
import Switch from '../Switch';

export default function Header({ onSearch, isDarkMode, toggleDarkMode }) {
  return (
    <header
      className='header'
      style={{ backgroundColor: isDarkMode ? '#1C1C21' : '#9FB4C7' }}
    >
      <Logo
        src={isDarkMode ? logoDark : logoLight}
        width="180px"
      />
      <InputBar
        placeholder='Pesquisar'
        icon={search}
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
