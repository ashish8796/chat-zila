import { SET_SIGN_IN_USER, SET_USERS, SIGN_OUT_USER } from "./actionTypes";

const initState = {
  users: [],
  user: {},
};

export default function userReducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_USERS: {
      return state;
    }

    case SET_SIGN_IN_USER: {
      return {
        ...state,
        user: payload,
      };
    }

    case SIGN_OUT_USER: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
}
