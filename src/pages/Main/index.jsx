import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "../../components/Header";
import InputBar from "../../components/InputBar";
import CardList from "../../components/CardList";
import "./Main.css";

const Main = () => {

    const getCSSVariable = (variable) => getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

    const lightTextColor = getCSSVariable('--light-text-color');
    const darkTextColor = getCSSVariable('--dark-text-color');
    const lightBackgroundColor = getCSSVariable('--light-background-color');
    const darkBackgroundColor = getCSSVariable('--dark-background-color');
    const lightFundoColor = getCSSVariable('--light-fundo-color');
    const darkFundoColor = getCSSVariable('--dark-fundo-color');
    const defaultColor = getCSSVariable('--default');
    
    const [cards, setCards] = useState(() => {
        const savedCards = localStorage.getItem('cards');
        return savedCards ? JSON.parse(savedCards) : [];
    });

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('isDarkMode');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards));
    }, [cards]);

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const handleDelete = (id) => {
        const newArray = cards.filter(c => c.id !== id);
        setCards(newArray);
    };

    const handleAddCard = (message) => {
        const newCard = {
            id: uuidv4(),
            message,
            color: defaultColor
        };
        setCards([...cards, newCard]);
    };

    const filteredCards = cards.filter(card =>
        card.message.toLowerCase().includes(searchText.toLowerCase())
    );

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <>
            <Header 
                onSearch={setSearchText}
                toggleDarkMode={toggleDarkMode} 
                isDarkMode={isDarkMode} 
            />
            <div
                className="main"
                style={{ backgroundColor: isDarkMode ? darkFundoColor : lightFundoColor}}
            >    
                <InputBar
                    placeholder='Adicionar uma nota'
                    icon={"add"}
                    textColor={isDarkMode ? darkTextColor : lightTextColor }
                    backgroundColor={isDarkMode ? darkBackgroundColor : lightBackgroundColor}
                    onAddCard={handleAddCard}
                />
                <CardList
                    cards={cards}
                    filteredCards={filteredCards}
                    handleDelete={handleDelete}
                    setCards={setCards}
                    isDarkMode={isDarkMode}
                />
            </div>
        </>
    );
}

export default Main;
