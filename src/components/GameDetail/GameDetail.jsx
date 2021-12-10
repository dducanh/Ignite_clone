import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as S from "./gameDetail.style";
import { smallImage } from "../../util/imageResize";

//IMAGES
import playstation from "../../img/apple.svg";
import steam from "../../img/steam.svg";
import xbox from "../../img/xbox.svg";
import nintendo from "../../img/nintendo.svg";
import apple from "../../img/apple.svg";
import gamepad from "../../img/gamepad.svg";
//Star Images
import starEmpty from "../../img/star-empty.png";
import starFull from "../../img/star-full.png";
export default function GameDetail() {
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.detailReducer
  );
  const history = useNavigate();
  const exitDetailHandler = (e) => {
    const elementClick = e.target;
    if (elementClick.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history("/");
    }
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const getStar = () => {
    const rating = Math.floor(game.rating);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt={game.rating} key={i} src={starFull} />);
      } else {
        stars.push(<img alt={game.rating} key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <S.CardShadow className="shadow" onClick={exitDetailHandler}>
          <S.Detail>
            <S.Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating : {game.rating}</p>
                {getStar()}
              </div>
              <S.Info>
                <h3>Platforms</h3>
                <S.Platform>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </S.Platform>
              </S.Info>
            </S.Stats>
            <S.Media>
              <img src={smallImage(game.background_image, 1280)} alt="img" />
            </S.Media>
            <S.Description>
              <p>{game.description_raw}</p>
            </S.Description>
            <div className="gallery">
              {screenshots.results.map((screen) => (
                <img
                  key={screen.id}
                  src={smallImage(screen.image, 1280)}
                  alt="screen"
                />
              ))}
            </div>
          </S.Detail>
        </S.CardShadow>
      )}
    </>
  );
}
