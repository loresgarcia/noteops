import { useState } from 'react';
import './InputBar.css';

export default function InputBar({ placeholder, icon, backgroundColor, onSearch, onAddCard }) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  const handleClick = () => {
    if (onAddCard && text.trim() !== '') {
      onAddCard(text);
      setText('');
    }
  };

  return (
    <div className="input-container">
      <input
        type='text'
        placeholder={placeholder}
        className="input-field"
        style={{ backgroundColor: backgroundColor }}
        value={text}
        onChange={handleChange}
      />
      <button className="input-button" onClick={onAddCard ? handleClick : null}> <img src={icon} alt="icon" />
      </button>
    </div>
  );
}
