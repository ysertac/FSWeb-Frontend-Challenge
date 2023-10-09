import { SHOW_DATA } from "./actions";

const initialStates = {
  id: 0,
  name: "noName",
  who: "Me",
};

const myReducer = (state = initialStates, action) => {
  switch (action.type) {
    case SHOW_DATA:
      const newState = {
        ...state,
        name: "yesName",
      };
      console.log(state);
      console.log(newState);
      return newState;

    default:
      return state;
  }
};

export default myReducer;
