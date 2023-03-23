import styled from "styled-components";

export const JumboTron = styled.section`
  background: linear-gradient(97.44deg, #ff71ce, #01cdfe 99.98%);
  border-radius: 0;
  color: #fff;
  min-height: 45vh;
  padding-top: 150px;
  text-align: center;

  h1 {
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 28px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 4rem;
    font-weight: 300;
  }

  span {
    font-size: 1.5rem;
    font-weight: 200;
    letter-spacing: 28px;
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
`;
