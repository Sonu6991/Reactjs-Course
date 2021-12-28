import { actiontypes, userActionTypes } from "./actiontypes";

const { INCREMENT, DECREMENT, RESET } = actiontypes;
const { FETCH } = userActionTypes;
export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

const fetchUser = (users) => {
  return {
    type: FETCH,
    payload: users,
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    dispatch(fetchUser(data));
  };
};
//https://jsonplaceholder.typicode.com/photos
