import React from "react";
import styled from "styled-components";
import myImage from "./assets/message.jpeg";
import myTeam from "./assets/team.jpg";
import myCity from "./assets/window.jpg";

import { slide } from "./transitions";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: url(${props => props.url}) center no-repeat;
  background-size: cover;
`;

const Button = styled.button`
  background: transparent;
  border: 1px #333;
  height: 60px;
  font-size: 30px;
  border-radius: 5px;
  cursor: pointer;
  padding: 0 30px;
  margin: 10px 30px;
  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const Page = ({ history, to, ...props }) => (
  <Wrapper {...props}>
    <h1>Dynamic transitions</h1>
    <ButtonContainer>
      <Button onClick={() => history.push({ pathname: to, state: slide })}>
        Slide
      </Button>
    </ButtonContainer>
  </Wrapper>
);

export const Green = props => <Page url={myImage} to="/yellow" {...props} />;
export const Yellow = props => <Page url={myTeam} to="/blue" {...props} />;
export const Blue = props => <Page url={myCity} to="green" {...props} />;
