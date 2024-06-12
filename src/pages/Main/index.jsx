import { useState } from "react"
import Card from "../../components/Card"

import "./Main.css"

const Main = () => {
    const [cards, setCards] = useState(
        [
            {
                id: 1,
                message: "card 1"
            }, {
                id: 2,
                message: "card 2"
            }, {
                id: 3,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            }, {
                id: 4,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }, {
                id: 5,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            }, {
                id: 6,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    );

    const handleDelete = (id) => {
        const newArray = cards.filter(c => c.id !== id);
        setCards(newArray)
    };

    return (
        <>
            <section className="cards">
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
            </section>
        </>
    )
}

export default Main;
