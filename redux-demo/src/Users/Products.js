import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../Counter/action";
import Card from "./Card";

const FetchUsers = (props) => {
  console.log(props.products);
  return (
    <>
      <div>
        <div>
          <button className="mt-4 p-2 btn-primary" onClick={props.fetching}>
            Fetch products
          </button>
        </div>

        <div className="container-fluid d-flex flex-wrap p-0 mt-4">
          {props.products.map((product) => {
            return <Card key={product.id} data={product} />;
          })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetching: () => {
      dispatch(getUsers());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FetchUsers);
