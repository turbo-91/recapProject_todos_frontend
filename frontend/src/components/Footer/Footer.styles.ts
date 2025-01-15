import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: black;
  color: white;
  text-align: center;

  p {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
