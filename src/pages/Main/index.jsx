import { useState} from "react";
import Card from "../../components/Card";
import "./Main.css";
import InputBar from "../../components/InputBar";
import search from '../../assets/search.png';
import add from '../../assets/add.png';


const Main = () => {
    const [cards, setCards] = useState([]);

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

    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        setSearchText(text);
    };

    const filteredCards = cards.filter(card =>
        card.message.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <div>
                <InputBar
                    placeholder='Pesquisar'
                    icon={search}
                    backgroundColor='#2F2F37'
                    onSearch={handleSearch}
                />
            </div>
            <div>
                <InputBar
                    placeholder='Adicionar uma nota'
                    icon={add}
                    backgroundColor='#1C1C23'
                    onAddCard={handleAddCard}
                />
                <section className="cards">
                    {filteredCards.length > 0
                        ? filteredCards.map(c =>
                            <Card
                                key={c.id}
                                id={c.id}
                                message={c.message}
                                handleDelete={handleDelete}
                                cards={cards}
                                setCards={setCards}
                            />
                        )
                        : <></>
                    }
                </section>
            </div>
        </>
    );
}

export default Main;
