import './Header.css';
import logo from '../../assets/logo.png';
import Logo from '../Logo';
import InputBar from "../InputBar";
import search from '../../assets/search.png';

export default function Header({ onSearch }) {
  return (
    <header
      className='header'
      style={{backgroundColor:"#9FB4C7"}}
    >
      <Logo
        src={logo}
        width="180px"
      />
      <InputBar
        placeholder='Pesquisar'
        icon={search}
        backgroundColor='#2F2F37'
        onSearch={onSearch}
      />
    </header>
  );
}
