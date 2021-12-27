import { actiontypes } from "./actiontypes";

const intiaState = {
  counter: 0,
};

const { INCREMENT, DECREMENT, RESET } = actiontypes;
// intiaState = 0;
const counterReducer = (state = intiaState, action) => {
  console.log("action.type", action.type);
  switch (action.type) {
    case INCREMENT:
      // console.log("called", state);
      return { counter: state.counter + 1 };
    case DECREMENT:
      console.log("called", state);
      return { counter: state.counter - 1 };
    case RESET:
      console.log("called", state);
      return intiaState;
    default:
      return state;
  }
};
export default counterReducer;
