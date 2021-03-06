import { CAT_INFO } from "./constants/actionTypes";

const initialState = {
  fetching: false,
  fetched: false,
  onError: false,
  error: {},
  resp: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAT_INFO.pending: {
      return {
        ...state,
        fetching: true,
        fetched: false,
        onError: false,
        error: {}
      };
    }
    case CAT_INFO.fulfilled: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: {},
        // resp: []
        resp: [...state.resp, ...action.payload.data]
      };
    }
    case CAT_INFO.rejected: {
      return {
        ...state,
        fetching: false,
        fetched: false,
        onError: true,
        error: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default reducer;
