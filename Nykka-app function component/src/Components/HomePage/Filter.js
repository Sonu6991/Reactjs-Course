import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../context/ProductContextProvider";

const Filter = () => {
  const [isPrice, setIsPrice] = useState(false);
  const [isDiscount, setIsDiscount] = useState(false);
  const [isColor, setIsColor] = useState(false);
  // const [filterInputs, setFilterInputs] = useState({
  //   price: [],
  //   discount: "",
  //   color: [],
  // });
  const { onFilterChange } = useContext(productContext);

  const getInputs = (e) => {
    // if (name === "color") {
    //   checked
    //     ? filterInputs[name].push(value)
    //     : filterInputs[name].splice(filterInputs[name].indexOf(value), 1);
    // } else if (name === "price") {
    //   if (checked) {
    //     filterInputs[name].push(value.split("_"));
    //   } else {
    //     filterInputs[name].forEach((ele, index) => {
    //       if (ele[0] === value.split("_")[0]) {
    //         filterInputs[name].splice(index, 1);
    //       }
    //     });
    //   }
    // } else {
    //   filterInputs[name] = value;
    // }

    // setFilterInputs(filterInputs);
    // displayAppliedfilter(filterInputs);
    // filterProducts(filterInputs);
    onFilterChange(e.target);
  };

  return (
    <ul className="d-flex flex-column list-unstyled border-top-0  bg-white filter ">
      <li
        className="border-top-1 py-2 align-items-center font-size "
        onClick={() => {
          setIsPrice(!isPrice);
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <span>Price</span>
          {isPrice ? (
            <span className="fas fa-chevron-up  opacity-75 pe-2 "></span>
          ) : (
            <span className="fas fa-chevron-down opacity-75 pe-2"></span>
          )}
        </div>
      </li>
      {isPrice && (
        <div id="price">
          <ul className="d-flex flex-column list-unstyled opacity-75 py-2  filter-font ">
            <li className="py-2 d-flex justify-content-between ">
              <span>Rs. 0 - Rs. 499 </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="checkbox"
                  name="price"
                  value="0_499"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>Rs. 500 - Rs. 999 </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="checkbox"
                  name="price"
                  value="500_999"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>Rs. 1000 - Rs. 1999 </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="checkbox"
                  name="price"
                  value="1000_1999"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>Rs. 2000 - Rs. 3999 </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="checkbox"
                  name="price"
                  value="2000_3999"
                  onChange={getInputs}
                />
              </span>
            </li>
          </ul>
        </div>
      )}
      <li
        className="border-top border-1 py-2 align-items-center font-size "
        onClick={() => {
          setIsDiscount(!isDiscount);
        }}
      >
        <div className="d-flex justify-content-between  align-items-center">
          <span>Discount</span>
          {isDiscount ? (
            <span className="fas fa-chevron-up  opacity-75 pe-2 "></span>
          ) : (
            <span className="fas fa-chevron-down opacity-75 pe-2"></span>
          )}
        </div>
      </li>
      {isDiscount && (
        <div id="price">
          <ul className="d-flex flex-column list-unstyled opacity-75 py-2  filter-font">
            <li className="py-2 d-flex justify-content-between">
              <span>70% And Above </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="radio"
                  name="discount"
                  value="70"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>60% And Above </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="radio"
                  name="discount"
                  value="60"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>50% And Above </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="radio"
                  name="discount"
                  value="50"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>40% And Above </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="radio"
                  name="discount"
                  value="40"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>30% And Above </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="radio"
                  name="discount"
                  value="30"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>20% And Above </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="radio"
                  name="discount"
                  value="20"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>10% And Above </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="radio"
                  name="discount"
                  value="10"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>none </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="radio"
                  name="discount"
                  value="none"
                  onChange={getInputs}
                />
              </span>
            </li>
          </ul>
        </div>
      )}
      <li
        className="border-top border-1 py-2  align-items-center font-size "
        onClick={() => {
          setIsColor(!isColor);
        }}
      >
        <div className="d-flex justify-content-between  align-items-center">
          <span>Color</span>
          {isColor ? (
            <span className="fas fa-chevron-up  opacity-75 pe-2"></span>
          ) : (
            <span className="fas fa-chevron-down opacity-75 pe-2"></span>
          )}
        </div>
      </li>
      {isColor && (
        <div id="price">
          <ul className="d-flex flex-column list-unstyled opacity-75 py-2  filter-font">
            <li className="py-2 d-flex justify-content-between">
              <span>Multi</span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="checkbox"
                  name="color"
                  value="multi"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>Blue </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="checkbox"
                  name="color"
                  value="blue"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>Yellow </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="checkbox"
                  name="color"
                  value="yellow"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>Green </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="checkbox"
                  name="color"
                  value="green"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>Red </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="checkbox"
                  name="color"
                  value="red"
                  onChange={getInputs}
                />
              </span>
            </li>
            <li className="py-2 d-flex justify-content-between">
              <span>White </span>
              <span className="background-color: aquamarine;">
                <input
                  className="form-check-input filter-input"
                  type="checkbox"
                  name="color"
                  value="white"
                  onChange={getInputs}
                />
              </span>
            </li>
          </ul>
        </div>
      )}
    </ul>
  );
};
export default Filter;
