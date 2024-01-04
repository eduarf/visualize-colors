import styled from "styled-components";
import SubMenu from "./SubMenu";
import ColorConvertor from "./ColorConvertor";

const StyledGradientsContent = styled.div`
    padding: 2.2rem 1.6rem;
`;


export default function GradientsContent() {
  return <StyledGradientsContent>
    <SubMenu />
    <ColorConvertor />
  </StyledGradientsContent>;
}
