import styled from "styled-components";
import HeroText from "./comps/HeroText";
import HeroImg from "./comps/HeroImg";

const StyledHero = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 56% 44%;
  padding: 10vh 8vw;
  @media only screen and (max-width: 1000px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 5rem;
    margin-top: 0;
  }
  @media only screen and (max-width: 500px){
    padding: 4vh 6vw;
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
