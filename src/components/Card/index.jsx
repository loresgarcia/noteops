/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { Palette, Edit, Delete, CheckCircleOutline } from '@mui/icons-material';
import './Card.css';
import CardColor from './CardColor';

const Card = ({ id, message, handleDelete, cards, setCards }) => {
    const [text, setText] = useState(message);
    const [isEditing, setIsEditing] = useState(false);
    const [cardColor, setCardColor] = useState("#9FB4C7");
    const [colorSelectVisible, setColorSelectVisible] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleDone = () => {
        setIsEditing(false)
        if (text === "") {
            handleDelete(id);
        } else {
            const newArray = cards.map(c => {
                return c.id === id ? {...c, message: text} : c;
            })
            setCards(newArray);
        }
    }

    const handleSelectColor = (color) => {
        setCardColor(color)
    }

    return (
        <div className="card" style={{backgroundColor: cardColor}}>
            {isEditing ? (
                <textarea
                    value={text}
                    onChange={handleChange}
                    autoFocus
                />
            ) : (
                <p>{message}</p>
            )}
            <div className="icons">
                <Palette className="icon" onClick={() => setColorSelectVisible(!colorSelectVisible)} />
                {isEditing ?
                    <CheckCircleOutline className="icon" onClick={handleDone} /> :
                    <Edit className="icon" onClick={handleEdit} />
                }
                <Delete className="icon" onClick={() => handleDelete(id)} />
            </div>
            {colorSelectVisible ?
                <CardColor handleSelectColor={handleSelectColor} />
            : <></>}
        </div>
    );
};

export default Card;
