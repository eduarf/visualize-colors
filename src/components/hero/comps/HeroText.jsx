import styled from "styled-components";
import PrimaryButton from "../../buttons/PrimaryButton";
import SecondaryButton from "../../buttons/SecondaryButton";

const StyledHeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  @media only screen and (max-width: 768px){
    gap: 2rem;
  }
`;
const StyledHeader = styled.h1`
  font-size: 7rem;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 1.1;
  color: var(--color-text);
  @media only screen and (max-width: 1000px){
    font-size: 6rem;
  }
  @media only screen and (max-width: 768px){
    font-size: 5rem;
  }
  @media only screen and (max-width: 500px){
    font-size: 4rem;
  }
  span.color-effect {
    letter-spacing: 0;
    background-image: linear-gradient(
      135deg,
      var(--color-primary),
      var(--color-accent)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span.font-effect {
    letter-spacing: 0;
    font-style: italic;
    color: var(--color-text);
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--color-text);
    margin-left: 1rem;
  }
`;

const StyledPara = styled.p`
  font-size: 1.8rem;
  width: 55%;
  font-weight: 400;
  line-height: 2;
  color: var(--color-text);
  @media only screen and (max-width: 500px){
    font-size: 1.6rem;
  }
`;

const StyledButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
    @media only screen and (max-width: 1000px){
      flex-direction: column-reverse;
      width: 100%;
    }
`;

const StyledLatesText = styled.a`
    padding: 0.1rem 0.5rem;
    margin-bottom: 2rem;
    border: 1px solid var(--color-primary);
    width: fit-content;
    border-radius: 3px;
    background: var(--color-secondary);
    color: var(--color-background);
    transition: opacity ease 0.3s;
    font-size: 1.3rem;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
      background-color: var(--color-primary);
    }
    @media only screen and (max-width: 500px){
      font-size: 1.1rem;
      margin-bottom: .5rem;
    }
`;

export default function HeroText() {
  return (
    <StyledHeroText>
      <StyledLatesText>🎄☃️❄️ Happy December and v3.6 release →</StyledLatesText>
      <StyledHeader>
        Visualize Your <br /> <span className="color-effect">Colors</span> &
        <span className="font-effect">Fonts</span>
        <br /> On a Real Site
      </StyledHeader>
      <StyledPara>
        Choosing colors or typography for your website? Use the Toolbar below to
        realize your choices.
      </StyledPara>
      <StyledButtonContainer>
        <SecondaryButton name="How does it work?" />
        <PrimaryButton name="Get Started" />
      </StyledButtonContainer>
    </StyledHeroText>
  );
}
