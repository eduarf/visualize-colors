import styled from "styled-components";
import PrimaryButton from "../../buttons/PrimaryButton";
import SecondaryButton from "../../buttons/SecondaryButton";

const StyledHeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
`;
const StyledHeader = styled.h1`
  font-size: 7rem;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 1.1;
  color: var(--color-text);
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
`;

const StyledButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
`;

export default function HeroText() {
  return (
    <StyledHeroText>
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
