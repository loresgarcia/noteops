import Card from "../Card";
import './CardList.css';

const CardList = ({ cards, handleDelete }) => {
  return (
    <section className="cards">
      {cards.length > 0
        ? cards.map(c => (
            <Card
              key={c.id}
              id={c.id}
              message={c.message}
              handleDelete={handleDelete}
            />
          ))
        : <p>Nenhum card encontrado.</p>
      }
    </section>
  );
};

export default CardList;
