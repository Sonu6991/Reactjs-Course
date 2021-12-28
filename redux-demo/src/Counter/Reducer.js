import { actiontypes, userActionTypes } from "./actiontypes";

const intiaState = {
  counter: 0,
};

const { INCREMENT, DECREMENT, RESET } = actiontypes;
const { FETCH } = userActionTypes;

export const counterReducer = (state = intiaState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    case RESET:
      return intiaState;
    default:
      return state;
  }
};

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;

    default:
      return state;
  }
};
