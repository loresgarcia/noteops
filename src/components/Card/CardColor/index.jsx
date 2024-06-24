/* eslint-disable react/prop-types */
import "./CardColor.css";

const CardColor = ({ handleColorChange }) => {


    const getCSSVariable = (variable) => getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

    const defaultColor = getCSSVariable('--default');
    const greenColor = getCSSVariable('--green');
    const salmonColor = getCSSVariable('--salmon');
    const redColor = getCSSVariable('--red');
    const yellowColor = getCSSVariable('--yellow');
    const purpleColor = getCSSVariable('--purple');

    return (
        <div className='card__color'>
          <div className='default' onClick={() => handleColorChange(defaultColor)}></div>
          <div className='green' onClick={() => handleColorChange(greenColor)}></div>
          <div className='salmon' onClick={() => handleColorChange(salmonColor)}></div>
          <div className='red' onClick={() => handleColorChange(redColor)}></div>
          <div className='yellow' onClick={() => handleColorChange(yellowColor)}></div>
          <div className='purple' onClick={() => handleColorChange(purpleColor)}></div>
        </div>
      );
    }

export default CardColor;
