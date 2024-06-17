import { useState} from "react";
import Card from "../../components/Card";
import "./Main.css";
import InputBar from "../../components/InputBar";
import add from '../../assets/add.png';
import Header from "../../components/Header";


const Main = () => {
    const [cards, setCards] = useState([{
        id: 1,
        message: "card 1"
    }, {
        id: 2,
        message: "card 2"
    }]);

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

    const filteredCards = cards.filter(card =>
        card.message.toLowerCase().includes(searchText.toLowerCase())
    );
    
    

    return (
        <>
        <Header/>
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
