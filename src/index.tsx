import React from "react";
import { render } from "react-dom";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

import App from "./App";

const global = css`
  // global css
  html,
  body {
    margin: 0;
    padding: 0;
  }
  box-sizing: border-box;
`;

const Nav = styled.nav`
  background-color: #009688;
  padding: 12px 0;

  ul {
    margin: 0;
    list-style: none;

    a {
      color: #fff;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;

const Div = styled.div`
  padding: 40px;
`;

const rootElement = document.getElementById("root");
render(
  <>
    <Global styles={global} />
    <Nav>
      <ul>
        <li>
          <a href="/">Basic</a>
        </li>
      </ul>
    </Nav>
    <Div>
      <App />
    </Div>
  </>,

  rootElement
);
