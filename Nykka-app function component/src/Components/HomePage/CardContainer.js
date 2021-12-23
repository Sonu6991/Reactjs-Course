import React, { useContext } from "react";
import { productContext } from "../context/ProductContextProvider";
import { AppliedFilter } from "./AppliedFilter";
import Card from "./Card";
import Filter from "./Filter";

const CardContainer = () => {
  const { filteredProducts: products } = useContext(productContext);

  return (
    <section className="d-flex align-items-start mt-5 container">
      <div className="filter-container position-sticky">
        <AppliedFilter />
        <Filter />
      </div>
      <div className="card-container d-flex flex-wrap ">
        {products.map((product) => {
          return <Card key={product.product_id} data={product} />;
        })}
      </div>
    </section>
  );
};
export default CardContainer;
