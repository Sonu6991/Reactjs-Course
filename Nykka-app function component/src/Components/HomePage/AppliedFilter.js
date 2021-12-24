import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../context/ProductContextProvider";
import AppliedFilterList from "./AppliedFilterList";

export const AppliedFilter = () => {
  const { filterInputs, deleteAppliedFilter } = useContext(productContext);
  const [price, setPrice] = useState([]);
  const [discount, setDiscount] = useState("");
  const [color, setColor] = useState([]);

  useEffect(() => {
    for (let key in filterInputs) {
      if (key === "price") {
        setPrice(filterInputs[key]);
      } else if (key === "discount") {
        setDiscount(filterInputs[key]);
      } else {
        setColor(filterInputs[key]);
      }
    }
  });

  return (
    <div className="card border-bottom-0 applied-filter">
      <div className="card-body">
        <div className="d-flex justify-content-between mb-2 ">
          <span className="font-weight">Filtered Applied</span>
          <span
            role="button"
            id="clearAll"
            className="font-size card-font-color "
            onClick={() => {
              deleteAppliedFilter("Clear");
            }}
          >
            Clear All
          </span>
        </div>
        <div id="filter_container">
          {discount !== "none" && discount !== "" ? (
            <AppliedFilterList
              key={discount}
              name="discount"
              value={discount}
              deleteAppliedFilter={deleteAppliedFilter}
            />
          ) : null}
          {price.length !== 0 &&
            price.map((price, index) => {
              return (
                <AppliedFilterList
                  key={index}
                  name="price"
                  value={price}
                  deleteAppliedFilter={deleteAppliedFilter}
                />
              );
            })}

          {color.length !== 0 &&
            color.map((color, index) => {
              return (
                <AppliedFilterList
                  key={index}
                  name="color"
                  value={color}
                  deleteAppliedFilter={deleteAppliedFilter}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
