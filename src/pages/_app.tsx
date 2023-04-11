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
    line-height: 1.8;
  }
  a { 
    text-decoration: none;
  }
 
  ul li {
    line-height: 1.8;
  }
  @media (max-width: 749px) {
    iframe {
      width: 100%;
      max-width: 560px;
    }
  }

  @media (max-width: 349px) {
    h2 {
      font-size: 1rem;
    }
    body {
      font-size: 0.9rem;
    }
    iframe {
      max-height: 240px;
    }

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
