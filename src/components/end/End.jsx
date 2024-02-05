import styled from "styled-components";
import PrimaryButton from "../buttons/PrimaryButton";

const StyledEnd = styled.div`
  padding: 10vh 8vw;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    padding: 4vh 4vw;
  }
`;

const StyledHeader = styled.h2`
  font-size: 6rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  span {
    background-image: linear-gradient(
      135deg,
      var(--color-primary),
      var(--color-secondary)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 5rem;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 3.4rem;
  }
`;

const StyledSubtitle = styled.h5`
  font-size: 2.2rem;
  font-weight: 500;
  text-align: center;
  color: var(--color-text);
  @media only screen and (max-width: 1200px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 1.8rem;
  }
`;

export default function End() {
  return (
    <StyledEnd>
      <StyledHeader>
        Your <span>Journey</span> {`Shouldn't`} End Here.
      </StyledHeader>
      <StyledSubtitle>
        Follow me on social media to stay tuned on more projects.
      </StyledSubtitle>
      <PrimaryButton name="Stay Tuned" />
    </StyledEnd>
  );
}
