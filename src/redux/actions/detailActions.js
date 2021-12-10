import axios from "axios";
import { GAME_DETAIL_URL, GAME_SCREENSHOT_URL } from "../../api";
import { FETCH_DETAIL, LOADING_DETAIL } from "../constants/constants";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: LOADING_DETAIL,
  });

  const detailData = await axios.get(GAME_DETAIL_URL(id));
  const screenshotsData = await axios.get(GAME_SCREENSHOT_URL(id));

  dispatch({
    type: FETCH_DETAIL,
    payload: {
      game: detailData.data,
      screenshots: screenshotsData.data,
    },
  });
};
