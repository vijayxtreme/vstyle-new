import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      box-sizing: border-box;
    font-size: 16px;
    line-height: 1.45;
  }
  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0 0 1.45rem;
  }
  dd, dl, p {
    margin: 0 0 1.45rem;
    padding: 0;
    font-weight: 300;
  }
  a { 
    text-decoration: none;
  }
`;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
