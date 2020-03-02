import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import Transitions from "./transitions";
import { City, Image, Team } from "./Page";

const Perspective = styled.div`
  width: 100vw;
  height: 100vh;
  perspective: 3200px;
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
              <Route path="/team" component={Team} />
              <Route path="/city" component={City} />
              <Route path="/image" component={Image} />
              <Redirect from="/" to="/city" />
            </Switch>
          </Transitions>
        </Perspective>
      )}
    />
  </>
);

export default App;
