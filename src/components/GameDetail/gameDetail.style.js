import styled from "styled-components";

export const CardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

export const Detail = styled.div`
  width: 80%;
  border-radius: 1rem;
  background: white;
  position: absolute;
  padding: 2rem 5rem;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .rating h3 {
    padding-left: 0rem;
    padding-right: 0rem;
  }
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

export const Info = styled.div`
  text-align: center;
`;

export const Platform = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
export const Media = styled.div`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  margin: 5rem 0rem;
`;
