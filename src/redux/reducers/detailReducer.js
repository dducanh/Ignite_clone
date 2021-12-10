import { FETCH_DETAIL, LOADING_DETAIL } from "../constants/constants";

const initialState = {
  game: { platforms: [] },
  screenshots: { results: [] },
  isLoading: true,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAIL: {
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
        isLoading: false,
      };
    }

    case LOADING_DETAIL: {
      return {
        ...state,
        isLoading: true,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default detailReducer;
