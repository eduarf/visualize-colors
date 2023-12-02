import styled from "styled-components";
import HeroText from "./comps/HeroText";
import HeroImg from "./comps/HeroImg";

const StyledHero = styled.section`
  display: flex;
  padding: 10vh 8vw;
  background-color: var(--color-background);
`;

const Hero = () => {
  return (
    <StyledHero>
      <HeroText />
      <HeroImg />
    </StyledHero>
  );
};

export default Hero;
