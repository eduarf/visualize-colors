import styled from "styled-components";

const HeroImgStyled = styled.div`
  @media only screen and (max-width: 1000px) {
    grid-row-start: 1;
    grid-row-end: 2;
    display: grid;
    place-items: center;
  }
`;

const StyledContainer = styled.div`
  height: 450px;
  width: 500px;
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  grid-template-rows: repeat(10, minmax(0, 1fr));
  gap: 0.5rem;
  @media only screen and (max-width: 1000px){
    height: 600px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    height: 480px;
  }
  @media only screen and (max-width: 500px){
    height: 400px;
  }
  @media only screen and (max-width: 400px){
    height: 320px;
  }
  div {
    border-radius: 1rem;
  }
  div:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 3;
    background-color: var(--color-lightgray);
    height: 85%;
  }
  div:nth-child(2) {
    grid-row: 1 / 1;
    grid-column: 3 / 7;
    background-color: var(--color-background);
    height: 85%;
  }
  div:nth-child(3) {
    grid-row: 1 / 1;
    grid-column: 7 / 9;
    background-color: var(--color-secondary);
    height: 85%;
  }
  div:nth-child(4) {
    grid-row: 2 / 4;
    grid-column: 1 / 1;
    background-color: var(--color-background);
    width: 85%;
  }
  div:nth-child(5) {
    grid-row: 4 / 9;
    grid-column: 1 / 1;
    background-color: var(--color-lightgray);
    width: 85%;
  }
  div:nth-child(6) {
    grid-row: 9 / 11;
    grid-column: 1 / 1;
    background-color: var(--color-secondary);
    width: 85%;
  }
  div:nth-child(7) {
    grid-row: 2 / 6;
    grid-column: 2 / 7;
    background-color: var(--color-primary);
  }
  div:nth-child(8) {
    grid-row: 2 / 5;
    grid-column: 7 / 9;
    background-color: var(--color-secondary);
  }
  div:nth-child(9) {
    grid-row: 6 / 10;
    grid-column: 2 / 5;
    background-color: var(--color-text);
  }
  div:nth-child(10) {
    grid-row: 5 / 6;
    grid-column: 7 / 9;
    background-color: var(--color-background);
  }
  div:nth-child(11) {
    grid-row: 6 / 8;
    grid-column: 5 / 7;
    background-color: var(--color-lightgray);
  }
  div:nth-child(12) {
    grid-row: 8 / 10;
    grid-column: 5 / 7;
    background-color: var(--color-lightgray);
  }
  div:nth-child(13) {
    grid-row: 6 / 8;
    grid-column: 7 / 9;
    background-color: var(--color-primaryComp);
  }
  div:nth-child(14) {
    grid-row: 8 / 11;
    grid-column: 7 / 9;
    background-color: var(--color-accent);
  }
  div:nth-child(15) {
    grid-row: 10 / 11;
    grid-column: 2 / 5;
    background-color: var(--color-background);
  }
  div:nth-child(16) {
    grid-row: 10 / 11;
    grid-column: 5 / 7;
    background-color: var(--color-text);
    height: 60%;
  }
  div:nth-child(17) {
    grid-row: 1 / 8;
    grid-column: 9 / 10;
    background-color: var(--color-lightgray);
    width: 40%;
  }
  div:nth-child(18) {
    grid-row: 8 / -1;
    grid-column: 9 / 10;
    background-color: var(--color-lightgray);
    width: 40%;
  }
`;

export default function HeroImg() {
  return (
    <HeroImgStyled>
      <StyledContainer>
        <div></div> {/* 1 */}
        <div></div> {/* 2 */}
        <div></div> {/* 3 */}
        <div></div> {/* 4 */}
        <div></div> {/* 5 */}
        <div></div> {/* 6 */}
        <div></div> {/* 7 */}
        <div></div> {/* 8 */}
        <div></div> {/* 9 */}
        <div></div> {/* 10 */}
        <div></div> {/* 11 */}
        <div></div> {/* 12 */}
        <div></div> {/* 13 */}
        <div></div> {/* 14 */}
        <div></div> {/* 15 */}
        <div></div> {/* 16 */}
        <div></div> {/* 17 */}
        <div></div> {/* 18 */}
      </StyledContainer>
    </HeroImgStyled>
  );
}
