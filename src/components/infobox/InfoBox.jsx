import styled from "styled-components";
import InfoBoxLeft from "./comps/InfoBoxLeft";
import InfoBoxRight from "./comps/InfoBoxRight";


const StyledInfoBox = styled.div`
    padding: 10vh 8vw;
    display: flex;
    @media only screen and (max-width: 1000px){
        flex-direction: column;
        padding: 2vh 4vw;
    }
`;

export default function InfoBox() {

  return (
    <StyledInfoBox>
      <InfoBoxLeft></InfoBoxLeft>
      <InfoBoxRight></InfoBoxRight>
    </StyledInfoBox>
  )
}
