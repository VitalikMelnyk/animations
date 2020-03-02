import React, { useState, useEffect } from "react";
import styled from "styled-components";
import myImage from "./assets/message.jpeg";
import myTeam from "./assets/team.jpg";
import myCity from "./assets/window.jpg";

import { slide } from "./transitions";
import { FirstComponent } from "./components/FirstComponent";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: url(${props => props.url}) center no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */
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
  border: 1px solid black;
  position: absolute;
  top: 50px;
  right: -100px;
  transition: right 0.5s linear;
  &:hover {
    right: -60px;
  }
`;

const FirstSection = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgba(121, 125, 127, 0.7);
  margin-top: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

const Page = ({ history, to, component, name, ...props }) => {
  console.log(window);
  return (
    <>
      <Wrapper {...props}>
        <h1>{name}</h1>
        <ButtonContainer>
          <Button onClick={() => history.push({ pathname: to, state: slide })}>
            {name}
          </Button>
        </ButtonContainer>
        <FirstSection>
          <h1>{name}</h1>
        </FirstSection>
      </Wrapper>
    </>
  );
};

export const Image = props => {
  console.log(window.scrollY);
  return (
    <Page
      component={<FirstComponent />}
      url={myImage}
      to="/team"
      name="Team Page"
      {...props}
    />
  );
};
export const Team = props => {
  console.log(window.scrollY);
  return (
    <Page
      component={<FirstComponent />}
      url={myTeam}
      to="/city"
      name="City Page"
      {...props}
    />
  );
};
export const City = props => {
  console.log(window.scrollY);
  return (
    <Page
      component={<FirstComponent />}
      url={myCity}
      to="/image"
      name="Image Page"
      {...props}
    />
  );
};
