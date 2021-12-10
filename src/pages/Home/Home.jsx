import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import Game from "../../components/Game/Game";
import GameDetail from "../../components/GameDetail/GameDetail";
import { loadGames } from "../../redux/actions/gameActions";
import * as S from "./home.style";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //get data from redux
  const { popularGame, newGames, upcoming, searched } = useSelector(
    (state) => state.gameReducer
  );
  const [isShowGameDetail, showGameDetail] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (!isNaN(location.pathname.split("/")[2])) {
      showGameDetail(true);
    } else {
      showGameDetail(false);
    }
  }, [location]);
  return (
    <S.GameList>
      {searched.length ? (
        <>
          <h2>Search Results</h2>
          <S.Games>
            {searched.map((game) => (
              <Game key={game.id} data={game} />
            ))}
          </S.Games>
        </>
      ) : (
        ""
      )}

      {isShowGameDetail && <GameDetail />}
      <h2>Upcoming Games</h2>
      <S.Games>
        {upcoming.map((game) => (
          <Game key={game.id} data={game} />
        ))}
      </S.Games>

      <h2>Popular Games</h2>
      <S.Games>
        {popularGame.map((game) => (
          <Game key={game.id} data={game} />
        ))}
      </S.Games>

      <h2>New Games</h2>
      <S.Games>
        {newGames.map((game) => (
          <Game key={game.id} data={game} />
        ))}
      </S.Games>
    </S.GameList>
  );
}
