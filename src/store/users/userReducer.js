import { SET_USERS } from "./actionTypes";

const initState = {
  users: [],
};

export default function userReducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_USERS: {
      return state;
    }

    default: {
      return state;
    }
  }
}
