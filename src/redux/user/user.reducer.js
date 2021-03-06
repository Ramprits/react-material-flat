import { authTypes } from "./user.types";

const initialState = {
  currentUser: undefined,
  isAuthenticated: false,
  loading: false,
  errorMessage: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_START:
    case authTypes.REGISTER_START:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: "",
      });
    case authTypes.LOGIN_SUCCESS:
    case authTypes.REGISTER_SUCCESS:
    case authTypes.LOAD_USER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        isAuthenticated: true,
        errorMessage: "",
        currentUser: payload,
      });

    case authTypes.LOGIN_FAILURE:
    case authTypes.REGISTER_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: payload,
      });

    case authTypes.CLEAR_ALL:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: "",
      });
    case authTypes.LOG_OUT_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: false,
        isAuthenticated: false,
      });

    default:
      return state;
  }
};
