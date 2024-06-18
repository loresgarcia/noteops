import { useState } from "react";
import Header from "../../components/Header";
import InputBar from "../../components/InputBar";
import CardList from "../../components/CardList";
import "./Main.css";

const Main = () => {
    const [cards, setCards] = useState([
        { id: 1, message: "card 1", color: "#9FB4C7" },
        { id: 2, message: "card 2", color: "#9FB4C7" }
    ]);

    const [searchText, setSearchText] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDelete = (id) => {
        const newArray = cards.filter(c => c.id !== id);
        setCards(newArray);
    };

    const handleAddCard = (message) => {
        const newCard = {
            id: cards.length > 0 ? cards[cards.length - 1].id + 1 : 1,
            message
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
                toggleDarkMode = {toggleDarkMode} 
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
                />
            </div>
        </>
    );
}

export default Main;
