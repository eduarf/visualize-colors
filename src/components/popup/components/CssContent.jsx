import styled from "styled-components";
import SubMenu from "./SubMenu";

const StyledCSsContent = styled.div`
  min-height: 100%;
  padding: 2.2rem 1.6rem;
`;

export default function CssContent() {
  return <StyledCSsContent>
    <SubMenu />
  </StyledCSsContent>;
}
