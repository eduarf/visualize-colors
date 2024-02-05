import { nanoid } from "nanoid";
import styled from "styled-components";

const StyledInfoBoxRight = styled.div`
  padding: 3rem 5rem;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  @media only screen and (max-width: 1200px) {
    gap: 3rem;
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 2rem;
  }
`;

const StyledParagraphContainer = styled.div`
  width: 30%;
  flex-grow: 2;
  color: var(--color-text);
  @media only screen and (max-width: 1200px) {
    width: 35%;
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const StyledParagraph = styled.p`
  width: 60%;
  line-height: 2.2;
  font-size: 1.8rem;
  position: relative;
  @media only screen and (max-width: 1200px) {
    font-size: 1.6rem;
    width: 80%;
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
  &::before {
    content: "${(props) => props.$index}";
    position: absolute;
    left: -4rem;
    top: -1rem;
    font-size: 4rem;
    font-weight: 900;
    color: var(--color-accent);
    @media only screen and (max-width: 1000px) {
      top: 0;
      font-size: 3.2rem;
    }
  }
`;

export default function InfoBoxRight() {
  const data = [
    {
      id: nanoid(),
      text: "Start with two neutral colors for the text and the background.",
    },
    {
      id: nanoid(),
      text: "Choose your primary and secondary colors. Primary is for main CTAs and sections, and Secondary is for less important buttons and info cards.",
    },
    {
      id: nanoid(),
      text: "Accent color is an additional color. It appears in images, highlights, hyperlinks, boxes, cards, etc.",
    },
    {
      id: nanoid(),
      text: "Happy with the results? Press on “Export” and choose among different options to export in various formats, like .zip, .png, CSS, SCSS, QR Code, and more.",
    },
  ];
  return (
    <StyledInfoBoxRight>
      {data.map((item, index) => {
        return (
          <StyledParagraphContainer key={item.id}>
            <StyledParagraph $index={index + 1}> {item.text} </StyledParagraph>
          </StyledParagraphContainer>
        );
      })}
    </StyledInfoBoxRight>
  );
}
