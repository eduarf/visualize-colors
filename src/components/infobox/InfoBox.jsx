import styled from "styled-components";
import InfoBoxLeft from "./comps/InfoBoxLeft";
import InfoBoxRight from "./comps/InfoBoxRight";


const StyledInfoBox = styled.div`
    margin-bottom: 100rem;
    padding: 10vh 8vw;
    display: flex;
`;

export default function InfoBox() {

  return (
    <StyledInfoBox>
      <InfoBoxLeft></InfoBoxLeft>
      <InfoBoxRight></InfoBoxRight>
    </StyledInfoBox>
  )
}
