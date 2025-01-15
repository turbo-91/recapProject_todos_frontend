import styled from "styled-components";

export const MainContainer = styled.main`
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    p {
      font-size: 0.9rem;
    }
  }
`;
