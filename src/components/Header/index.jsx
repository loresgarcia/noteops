
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import Logo from '../Logo';
import InputBar from "../InputBar";
import search from '../../assets/search.png';
import { useState } from 'react';

export default function Header() {

  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
};



  return (
    <header className='header'>
    <Logo 
    src={logo}
    width="20%"
    />
    <InputBar
      placeholder='Pesquisar'
      icon={search}
      backgroundColor='#2F2F37'
      onSearch={handleSearch}
    />
       
    </header>
  );
}