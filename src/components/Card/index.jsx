/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Palette, Edit, Delete, CheckCircleOutline } from '@mui/icons-material';
import './Card.css';
import CardColor from './CardColor';

const Card = ({ id, message, color, handleDelete, cards, setCards }) => {
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

    const handleColorChange = (newColor) => {
        setCardColor(newColor)
    }

    const handleDone = () => {
        setIsEditing(false);
        if (text === "") {
            handleDelete(id);
        } else {
            const newArray = cards.map(c => {
                return c.id === id ? { ...c, message: text } : c;
            });
            setCards(newArray);
        }
    };

    useEffect(() => {
        const newArray = cards.map(c => {
            return c.id === id ? { ...c, color: cardColor } : c;
        });
        setCards(newArray);
    }, [cardColor]); // eslint-disable-line

    return (
        <div className="card" style={{ backgroundColor: color }}>
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
                <CardColor handleColorChange={handleColorChange} />
                : <></>}
        </div>
    );
};

export default Card;
