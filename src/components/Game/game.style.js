import styled from "styled-components";

export const Game = styled.div`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease-in;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  h3 {
    height: 5rem;
  }
  &:hover {
    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.5);
    transform: scale(105%);
    z-index: 5;
  }
`;
