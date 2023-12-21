import styled from "styled-components";
import ExportPopup from "../popup/ExportPopup";

const StyledExport = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  padding-top: 10rem;
  z-index: 10009;
`;

export default function ExportComp() {
  return <StyledExport>
    <ExportPopup />
  </StyledExport>;
}
