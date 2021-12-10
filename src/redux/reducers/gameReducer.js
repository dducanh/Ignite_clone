import { FETCH_GAME, FETCH_SEARCH } from "../constants/constants";

const initialState = {
  popularGame: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME:
      return {
        ...state,
        popularGame: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case FETCH_SEARCH:
      return {
        ...state,
        searched: action.payload.searched,
      };
    default: {
      return { ...state };
    }
  }
};

export default gameReducer;
