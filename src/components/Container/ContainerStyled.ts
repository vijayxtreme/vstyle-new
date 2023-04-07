import styled from "styled-components";

export const Main = styled.main``;

interface ContainerProps {
  align?: string;
  maxWidth?: string;
  marginTop?: string;
  marginBottom?: string;
}

export const Container = styled.div<ContainerProps>`
  text-align: ${(props) => (props.align ? props.align : "left")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  margin: 0 auto;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
  padding: 0 1rem;
`;

export const NavContainer = styled(Container)`
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    h2 {
      margin-top: 1.5rem;
      margin-bottom: 0;
    }
  }
`;
