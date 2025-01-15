import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: black;
  color: white;
  text-align: center;

  h1 {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.2rem;
    }
  }
`;
