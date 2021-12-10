// BASE URL
const BASE_URL = "https://api.rawg.io/api/";
// API_KEY
const API_KEY = "key=ef3d888a512248ebbfda5dd553a0d772";

const getCurrentMonth = () => {
  const currentMonth = new Date().getMonth() + 1;
  if (currentMonth < 10) {
    return `0${currentMonth}`;
  } else {
    return currentMonth;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// current day/month/year

const currentYear = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular game
const POPULAR_GAME = `games?dates=${lastYear},${currentDate},ordering=-rating&page_size=10`;

// upcoming game
const UPCOMING_GAME = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

//new game
const NEW_GAME = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const POPULAR_GAME_URL = () => `${BASE_URL}${POPULAR_GAME}&${API_KEY}`;
export const UPCOMING_GAME_URL = () => `${BASE_URL}${UPCOMING_GAME}&${API_KEY}`;
export const NEW_GAME_URL = () => `${BASE_URL}${NEW_GAME}&${API_KEY}`;

//game detail

export const GAME_DETAIL_URL = (game_id) =>
  `${BASE_URL}games/${game_id}?${API_KEY}`;

// game screenshot
export const GAME_SCREENSHOT_URL = (game_id) =>
  `${BASE_URL}games/${game_id}/screenshots?${API_KEY}`;

// search game
export const GAME_SEARCH_URL = (game_name) =>
  `${BASE_URL}games?search=${game_name}&page_size=10&${API_KEY}`;
