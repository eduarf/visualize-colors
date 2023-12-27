import styled from "styled-components";
import SubMenu from "./SubMenu";
import ColorConvertor from "./ColorConvertor";

const StyledTailwindContent = styled.div`
    min-height: 100%;
  padding: 2.2rem 1.6rem;
`;

export default function TailwindContent() {
  return <StyledTailwindContent>
    <SubMenu />
    <ColorConvertor />
  </StyledTailwindContent>;
}
