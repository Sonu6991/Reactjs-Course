import React from "react";
const Card = ({ data }) => {
  return (
    <div className="card col-3  p-0 ms-md-3 mb-3 ">
      <div className="card-body d-flex justify-content-center flex-column align-items-center p-0">
        <img className="img" src={data.image} alt=""></img>
        <div className=" text-center font-size mt-3">{data.title}</div>
        <div className="font-size mt-3 text-center">
          <span className="border-end border-1 pe-1 card-price ms-1">
            MRP: ₹ {data.price}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Card;
