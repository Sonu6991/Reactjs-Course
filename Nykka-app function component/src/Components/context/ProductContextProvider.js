import React, { createContext, useState, useEffect } from "react";
export const productContext = createContext();

export const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterInputs, setFilterInputs] = useState({
    price: [],
    discount: "",
    color: [],
  });

  /////*****************Fatch all products from json file*****************//
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
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

  /////*****************adding applied filters in 'applied filter container'*****************//
  const onFilterChange = (target) => {
    const { name, value, checked } = target;
    if (name === "color") {
      checked
        ? filterInputs[name].push(value)
        : filterInputs[name].splice(filterInputs[name].indexOf(value), 1);
    } else if (name === "price") {
      if (checked) {
        filterInputs[name].push(value.split("_"));
      } else {
        filterInputs[name].forEach((ele, index) => {
          if (ele[0] === value.split("_")[0]) {
            filterInputs[name].splice(index, 1);
          }
        });
      }
    } else {
      checked ? (filterInputs[name] = value) : (filterInputs[name] = "none");
    }

    setFilterInputs(filterInputs);
    filterProducts(filterInputs);
  };

  /////*****************delete applied filter when user click on it or click on "clearAll"'*****************//
  const deleteAppliedFilter = (name, value) => {
    if (name === "Clear") {
      [...document.querySelectorAll(".form-check-input")].map((input) => {
        if (input.checked) {
          let target = {
            name: input.name,
            value: input.value,
            checked: false,
          };
          input.checked = !input.checked;
          onFilterChange(target);
        }
      });
    } else {
      let a = "";
      if (name === "price") {
        a = value.join("_");
      } else {
        a = value;
      }
      let input = document.querySelector(`[value='${a}']`);
      if (input.checked) {
        let target = {
          name: input.name,
          value: input.value,
          checked: false,
        };
        input.checked = false;
        onFilterChange(target);
      }
    }
  };

  const value = {
    filteredProducts,
    filterInputs,
    deleteAppliedFilter,
    onFilterChange,
  };

  return (
    <productContext.Provider value={value}>
      {props.children}
    </productContext.Provider>
  );
};
export default ProductContextProvider;
