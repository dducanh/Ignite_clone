import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../img/logo.svg";
import { searchGames } from "../../redux/actions/gameActions";
import * as S from "./navbar.style";

export default function Navbar() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(searchGames(textInput));
    setTextInput("");
  };

  return (
    <S.Navbar>
      <S.Logo>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </S.Logo>
      <form className="search" onSubmit={submitSearch}>
        <input value={textInput} type="text" onChange={inputHandler} />
        <button>Search</button>
      </form>
    </S.Navbar>
  );
}
