import { SET_USERNAME } from "../actionTypes";

const initialState = {
  username: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME: {
      return { ...state, username: action.payload };
    }

    default:
      return state;
  }
}
