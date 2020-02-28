import { createGlobalStyle, keyframes } from "styled-components";

const transitionClassName = "slide";
const duration = 2000;

const slideOut = keyframes`
0% { }
25% { opacity: .5; transform: translateZ(-500px); }
75% { opacity: .5; transform: translateZ(-500px) translateX(-200vw); }
100% { opacity: .5; transform: translateZ(-500px) translateX(-200vw); }
`;
const slideIn = keyframes`
0%, 25% { opacity: .5; transform: translateZ(-500px) translateX(120vw); }
75% { opacity: .5; transform: translateZ(-500px); }
100% { opacity: 1; transform: translateZ(0) translateX(0); }
`;
export const GlobalStyle = createGlobalStyle`
.${transitionClassName}-exit-active {
  animation: ${slideOut} ${duration}ms both ease-out;
}
.${transitionClassName}-enter-active {
  animation: ${slideIn} ${duration}ms both ease-out;
}
`;

export default { transition: transitionClassName, duration };
