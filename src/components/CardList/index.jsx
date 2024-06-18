/* eslint-disable react/prop-types */
import Card from "../Card";
import './CardList.css';

const CardList = ({ cards, filteredCards, handleDelete, setCards, isDarkMode }) => {
  return (
    <section className="cards">
      {filteredCards.length > 0
        ? filteredCards.map(c => (
            <Card
              key={c.id}
              id={c.id}
              message={c.message}
              color={c.color}
              handleDelete={handleDelete}
              cards={cards}
              setCards={setCards}
            />
          ))
        : <p style={{ color: isDarkMode ? "#F2F2F2" : "#222222"}}>Não há nenhum card!</p>
      }
    </section>
  );
};

export default CardList;

