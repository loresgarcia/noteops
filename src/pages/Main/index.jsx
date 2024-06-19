import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "../../components/Header";
import InputBar from "../../components/InputBar";
import CardList from "../../components/CardList";
import "./Main.css";

const Main = () => {
    // Inicializar o estado `cards` com dados do LocalStorage se disponíveis
    const [cards, setCards] = useState(() => {
        const savedCards = localStorage.getItem('cards');
        return savedCards ? JSON.parse(savedCards) : [];
    });

    // Inicializar o estado `isDarkMode` com dados do LocalStorage se disponíveis
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('isDarkMode');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        // Salvar cards no LocalStorage sempre que eles forem atualizados
        localStorage.setItem('cards', JSON.stringify(cards));
    }, [cards]);

    useEffect(() => {
        // Salvar o tema no LocalStorage sempre que ele for atualizado
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
            color: "#9FB4C7"
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
                style={{ backgroundColor: isDarkMode ? '#2F2F37' : '#EEEEFF'}}
            >    
                <InputBar
                    placeholder='Adicionar uma nota'
                    icon={"add"}
                    textColor={isDarkMode ? '#F2F2F2' : '#1C1C23' }
                    backgroundColor={isDarkMode ? '#1C1C23' : '#9FB4C7'}
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
