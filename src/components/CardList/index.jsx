import Card from "../Card";
import './CardList.css';

const CardList = ({ cards, filteredCards, handleDelete, setCards }) => {
  return (
    <section className="cards">
      {filteredCards.length > 0
        ? filteredCards.map(c => (
            <Card
              key={c.id}
              id={c.id}
              message={c.message}
              handleDelete={handleDelete}
              cards={cards}
              setCards={setCards}
            />
          ))
        : <p>Nenhum card encontrado.</p>
      }
    </section>
  );
};

export default CardList;

