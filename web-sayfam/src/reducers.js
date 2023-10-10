import { SHOW_DATA } from "./actions";

const initialStates = {
  first: {
    id: 0,
    name: "noName",
    who: "Me",
  },
};

const myReducer = (state = initialStates, action) => {
  switch (action.type) {
    case SHOW_DATA:
      const newState = {
        ...state,
        first: { ...state.first, name: state.first.name + "e" },
      };
      return newState;

    default:
      return state;
  }
};

export default myReducer;
