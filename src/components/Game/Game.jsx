import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadDetail } from "../../redux/actions/detailActions";
import * as S from "./game.style";
import { smallImage } from "../../util/imageResize";

export default function Game(props) {
  const { id, name, released, background_image } = props.data;
  const dispatch = useDispatch();

  const handleLoadDetail = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <S.Game onClick={handleLoadDetail}>
      <Link to={`/game/${id}`}>
        <h3> {name}</h3>
        <p>{released}</p>
        <img src={smallImage(background_image, 1280)} alt={name} />
      </Link>
    </S.Game>
  );
}
