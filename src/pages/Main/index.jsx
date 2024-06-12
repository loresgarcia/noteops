import { useState } from "react"
import Card from "../../components/Card"

const Main = () => {
    const [cards, setCards] = useState(
        [
            {
                id: 1,
                message: "card 1"
            }, {
                id: 2,
                message: "card 2"
            }
        ]
    );

    const handleDelete = (id) => {
        const newArray = cards.filter(c => c.id !== id);
        setCards(newArray)
    };

    return (
        <>
            {cards.length > 0 
                ? cards.map(c => 
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
        </>
    )
}

export default Main;
