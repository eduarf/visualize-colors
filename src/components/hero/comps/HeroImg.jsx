import styled from "styled-components"

const HeroImgStyled = styled.div`
  background-color: pink;
  flex-basis: 45%;
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  grid-template-rows: repeat(8, minmax(0, 1fr));
`;

export default function HeroImg() {
  return (
    <HeroImgStyled>
      
    </HeroImgStyled>
  )
}
