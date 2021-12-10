import axios from "axios";
import {
  GAME_SEARCH_URL,
  NEW_GAME_URL,
  POPULAR_GAME_URL,
  UPCOMING_GAME_URL,
} from "../../api";
import { FETCH_GAME, FETCH_SEARCH } from "../constants/constants";
// action creator

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(POPULAR_GAME_URL());
  const upcomingData = await axios.get(UPCOMING_GAME_URL());
  const newGamesData = await axios.get(NEW_GAME_URL());

  dispatch({
    type: FETCH_GAME,
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const searchGames = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(GAME_SEARCH_URL(game_name));
  dispatch({
    type: FETCH_SEARCH,
    payload: {
      searched: searchGames.data.results,
    },
  });
};
