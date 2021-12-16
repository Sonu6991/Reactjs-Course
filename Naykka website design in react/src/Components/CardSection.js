import Filter from "./Filter";
import "./CardSection.css";
import Card from "./Card";
const CardSection = () => {
  return (
    <section className="card-section">
      <div className="filter-container">
        <Filter />
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default CardSection;
