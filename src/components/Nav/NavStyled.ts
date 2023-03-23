import styled from "styled-components";
interface NavProps {
  align?: boolean;
}

export const Nav = styled.nav<NavProps>`
  ul {
    display: flex;
    list-style: none;
    li {
      a {
        text-decoration: none;
        display: inline-block;
        padding: 0.5rem;
        color: white;
      }
    }
  }
`;
