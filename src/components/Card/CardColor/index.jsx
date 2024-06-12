/* eslint-disable react/prop-types */
import "./CardColor.css";

const CardColor = ({ handleSelectColor }) => {
    return (
        <div className='card__color'>
            <div className='default' onClick={() => handleSelectColor("#9FB4C7")}></div>
            <div className='green' onClick={() => handleSelectColor("#A0ECD0")}></div>
            <div className='salmon' onClick={() => handleSelectColor("#F4B9B2")}></div>
            <div className='red' onClick={() => handleSelectColor("#F49690")}></div>
            <div className='yellow' onClick={() => handleSelectColor("#FFF799")}></div>
            <div className='purple' onClick={() => handleSelectColor("#C490D1")}></div>
        </div>
    )
}

export default CardColor;
