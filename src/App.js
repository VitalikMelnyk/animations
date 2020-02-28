import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import Transitions from "./transitions";
import { Green, Yellow, Blue } from "./Page";

const Perspective = styled.div`
  width: 100vw;
  height: 100vh;
  perspective: 1200px;
`;
const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  background: #151234;
  font-family: Roboto;
}
`;

const App = () => (
  <>
    <GlobalStyle />
    <Route
      render={({ location }) => (
        <Perspective>
          <Transitions pageKey={location.key} {...location.state}>
            <Switch location={location}>
              <Route path="/blue" component={Blue} />
              <Route path="/green" component={Green} />
              <Route path="/yellow" component={Yellow} />
              <Redirect from="/" to="/blue" />
            </Switch>
          </Transitions>
        </Perspective>
      )}
    />
  </>
);

export default App;
