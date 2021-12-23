import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const viewProduct = () => {
    console.log("clicked");
    let path = `/Product/${data.product_id}`;
    navigate(path, { state: { id: 1, name: "sabaoon" } });
  };
  return (
    <div
      className="card col-xl-3 col-md-5 p-0 ms-md-3 mb-3 flex-grow-1"
      onClick={viewProduct}
    >
      <div className="card-body d-flex justify-content-center flex-column align-items-center ">
        <img src={data.img} alt=""></img>
        <div className=" text-center font-size mt-3">{data.title}</div>
        <div className="font-size mt-3 text-center">
          <span className="opacity-50 ">MRP: </span>
          <span className="text-decoration-line-through opacity-50 ">
            {data.cutoff}
          </span>
          <span className="border-end border-1 pe-1 card-price ms-1">
            ₹ {data.price}
          </span>
          <span className="card-discount card-font-color ms-1">
            {data.discount}% Off
          </span>
        </div>
      </div>
      <div
        className="card-footer bg-white p-0  d-flex justify-content-center align-items-center"
        role="button"
      >
        <span className="far fa-heart fs-3 col-3 text-center card-font-color"></span>
        <button
          className=" text-white fw-bold py-3 px-2 col-9 text-center border-0 card-addtocart"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          ADD TO BAG
        </button>
      </div>
    </div>
  );
};
export default Card;
