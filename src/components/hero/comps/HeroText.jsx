import styled from "styled-components";
import PrimaryButton from "../../buttons/PrimaryButton";
import SecondaryButton from "../../buttons/SecondaryButton";
import { changeTheme } from "../../../features/ThemeSlice";
import { useDispatch } from "react-redux";

const StyledHeroText = styled.div`
  flex-basis: 60%;
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
    color: black;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    margin-left: 1rem;
  }
`;

const StyledPara = styled.p`
  font-size: 1.8rem;
  width: 55%;
  font-weight: 400;
  line-height: 2;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
`;

export default function HeroText() {
  const dispatch = useDispatch();
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
      <button onClick={() => dispatch(changeTheme())}>Deneme</button>
    </StyledHeroText>
  );
}
