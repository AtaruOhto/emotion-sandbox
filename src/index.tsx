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

const Div = styled.div`
  padding: 40px;
`;

const rootElement = document.getElementById("root");
render(
  <>
    <Global styles={global} />
    <Div>
      <App />
    </Div>
  </>,

  rootElement
);
