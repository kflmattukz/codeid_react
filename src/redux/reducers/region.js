import {
  GET_REGIONS_START,
  GET_REGIONS_SUCCESS,
  GET_REGIONS_FAILURE,
} from '../types/region';

const initialState = {
  regions: [],
  isLoading: false,
  error: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGIONS_START: {
      return { ...state, isLoading: true };
    }
    case GET_REGIONS_SUCCESS: {
      return { ...state, isLoading: false, regions: action.payload };
    }
    case GET_REGIONS_FAILURE: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducers;
