import React, { useContext } from "react";

const AppliedFilterList = ({ name, value, deleteAppliedFilter }) => {
  let title = "";
  if (name === "price") {
    title = `Rs. ${value[0]} - Rs. ${value[1]} `;
  } else if (name === "discount") {
    title = `${value}% And Above`;
  } else {
    title = value.charAt(0).toUpperCase() + value.slice(1);
  }
  return (
    <div className="rounded-pill py-1 px-3 d-flex  align-items-center applied-filter-items mt-2">
      <span className="font-size card-font-color white-space">{title}</span>
      <span
        className="fas fa-times-circle ms-3  card-font-color"
        onClick={() => {
          deleteAppliedFilter(name, value);
        }}
      ></span>
    </div>
  );
};

export default AppliedFilterList;
