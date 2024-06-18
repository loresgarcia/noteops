import { useState } from "react";
import Header from "../../components/Header";
import InputBar from "../../components/InputBar";
import CardList from "../../components/CardList";
import add from '../../assets/add.png';
import "./Main.css";

const Main = () => {
    const [cards, setCards] = useState([
        { id: 1, message: "card 1" },
        { id: 2, message: "card 2" }
    ]);

    const [searchText, setSearchText] = useState('');

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

    return (
        <>
            <Header onSearch={setSearchText} />
            <div className="main">
                <InputBar
                    placeholder='Adicionar uma nota'
                    icon={add}
                    backgroundColor='#1C1C23'
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
