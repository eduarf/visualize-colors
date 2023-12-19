import styled from "styled-components";
import HeroText from "./comps/HeroText";
import HeroImg from "./comps/HeroImg";

const StyledHero = styled.section`
  display: grid;
  grid-template-columns: 56% 44%;
  padding: 10vh 8vw;
  background-color: var(--color-background);
  @media only screen and (max-width: 1000px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 5rem;
  }
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
