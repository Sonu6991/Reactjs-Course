import React, { createContext, useState, useEffect } from "react";
export const productContext = createContext();

export const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);

  /////*****************Fatch all products from json file*****************//
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then(
        (data) => {
          setProducts(data);
          setFilteredProducts(data);
        },
        (error) => {
          console.log("error", error);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /////*****************Filter Products*****************//
  const filterProducts = (filterInputs) => {
    let array = products;
    if (filterInputs.price.length !== 0) {
      array = [];
      filterInputs.price.forEach((value) => {
        products.filter((product) => {
          if (+product.price >= +value[0] && +product.price <= +value[1]) {
            array.push(product);
          }
        });
      });
    }
    if (filterInputs.discount !== "none" && filterInputs.discount !== "") {
      array = array.filter(
        (product) => +product.discount >= +filterInputs.discount
      );
    }
    if (filterInputs.color.length !== 0) {
      array = array.filter((product) =>
        filterInputs.color.includes(product.color)
      );
    }
    setFilteredProducts(array);
  };

  /////*****************Add applied filters in 'applied filter container'*****************//
  const displayAppliedfilter = (filterInputs) => {
    let a = [];
    if (filterInputs.price.length !== 0) {
      filterInputs.price.map((price) => {
        a.push(`Rs. ${price[0]} - Rs. ${price[1]}`);
      });
    }
    if (filterInputs.discount !== "none" && filterInputs.discount !== "") {
      a.push(`${filterInputs.discount}% And Above`);
    }
    if (filterInputs.color.length !== 0) {
      filterInputs.color.map((color) => {
        a.push(color.charAt(0).toUpperCase() + color.slice(1));
      });
    }
    setAppliedFilters(a);
  };

  /////*****************delete applied filetr when user click on it'*****************//
  const deleteAppliedFilter = (value) => {
    if (value === "Clear") {
      [...document.querySelectorAll(".form-check-input")].map((input) => {
        if (input.checked) {
          input.checked = !input.checked;
        }
      });
      setAppliedFilters([]);
      setFilteredProducts(products);
    } else {
      setAppliedFilters(
        appliedFilters.filter((ele) => ele !== appliedFilters[value])
      );
    }
  };

  const value = {
    filterProducts,
    filteredProducts,
    displayAppliedfilter,
    appliedFilters,
    deleteAppliedFilter,
  };

  return (
    <productContext.Provider value={value}>
      {props.children}
    </productContext.Provider>
  );
};
export default ProductContextProvider;
