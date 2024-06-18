/* eslint-disable react/prop-types */
import "./CardColor.css";

const CardColor = ({ handleColorChange }) => {
    return (
        <div className='card__color'>
            <div className='default' onClick={() => handleColorChange("#9FB4C7")}></div>
            <div className='green' onClick={() => handleColorChange("#A0ECD0")}></div>
            <div className='salmon' onClick={() => handleColorChange("#F4B9B2")}></div>
            <div className='red' onClick={() => handleColorChange("#F49690")}></div>
            <div className='yellow' onClick={() => handleColorChange("#FFF799")}></div>
            <div className='purple' onClick={() => handleColorChange("#C490D1")}></div>
        </div>
    )
}

export default CardColor;
