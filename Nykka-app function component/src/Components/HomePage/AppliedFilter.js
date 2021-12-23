import React, { useContext } from "react";
import { productContext } from "../context/ProductContextProvider";

export const AppliedFilter = () => {
  const { appliedFilters, deleteAppliedFilter } = useContext(productContext);
  // console.log("appliedFilters", appliedFilters);
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
          {appliedFilters.map((filter, index) => {
            // console.log("filter", filter);
            return (
              <div
                key={index}
                className="rounded-pill py-1 px-3 d-flex  align-items-center applied-filter-items mt-2"
              >
                <span className="font-size card-font-color white-space">
                  {filter}
                </span>
                <span
                  className="fas fa-times-circle ms-3  card-font-color"
                  onClick={() => {
                    deleteAppliedFilter(index);
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
