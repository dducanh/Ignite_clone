import styled from "styled-components";

export const GameList = styled.div`
  padding: 0rem 5rem;
  margin-bottom: 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

export const Games = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 5rem 2rem;
`;
