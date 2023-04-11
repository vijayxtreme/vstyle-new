import styled from "styled-components";

export const JumboH1 = styled.h1`
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 4rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 349px) {
    font-size: 1rem;
  }
`;

export const JumboBtn = styled.button`
  position: relative;
  background: black;
  color: white;
  padding: 1rem 1.25rem;
  border: 0;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-weight: 100;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 3rem;
  &:hover {
    box-shadow: 1px 1px 3px rgb(209, 208, 209, 1);
    top: 1px;
    left: 1px;
  }
`;

export const JumboTron = styled.section`
  background: linear-gradient(97.44deg, #ff71ce, #01cdfe 99.98%);
  border-radius: 0;
  color: #fff;
  padding-top: 75px;
  text-align: center;

  span {
    font-size: 1.5rem;
    font-weight: 200;
    letter-spacing: 1rem;
    display: block;
    margin-bottom: 2rem;
  }

  a {
    color: white;
    &:after {
      content: " | ";
    }
    &:last-child:after {
      content: "";
    }
  }

  @media (max-width: 349px) {
    span {
      font-size: 1rem;
      letter-spacing: 0.5rem;
    }
  }
`;
