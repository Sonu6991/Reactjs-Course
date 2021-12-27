import { actiontypes } from "./actiontypes";

const { INCREMENT, DECREMENT, RESET } = actiontypes;
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
