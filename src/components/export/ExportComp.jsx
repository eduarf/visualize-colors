import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { offExport } from "../../features/ThemeSlice";

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

const StyledExportCard = styled.div`
  height: 450px;
  width: 900px;
  background-color: #fff;
  border-radius: 1rem;
`;

export default function ExportComp() {
  const ref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      dispatch(offExport());
    }
  };

  return (
    <StyledExport>
      <StyledExportCard ref={ref}></StyledExportCard>
    </StyledExport>
  );
}
