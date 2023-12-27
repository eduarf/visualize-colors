import styled from "styled-components";
import { offExport } from "../../features/ThemeSlice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { popupMenuItems } from "../../../data";
import { popupController } from "../../features/popupSlice";
import * as Components from "./components";
const {
  CssContent,
  TailwindContent,
  CustomCodeContent,
  DownloadContent,
  GradientsContent,
  QrContent,
  ScssContent,
  ShadesContent,
} = Components;

const StyledExportCard = styled.div`
  height: 450px;
  width: 80rem;
  max-width: 90%;
  background-color: #fff;
  border-radius: 1rem;
  padding: 3rem 2rem;
`;

const StyledTabList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
`;

const StyledTabItem = styled.li`
  cursor: pointer;
  position: relative;
`;

const StyledTabHeader = styled.div`
  font-size: 1.8rem;
  /* border-bottom: ${(props) =>
    props.$isSelected ? "3px solid black" : null}; */
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background-color: #000;
    left: 0;
    bottom: -1rem;
    height: 3px;
    width: ${(props) => (props.$isSelected ? "100%" : "0%")};
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    transform-origin: left;
  }
`;

export default function ExportPopup() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const popupContent = useSelector((state) => state.popup.popupContent);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      dispatch(offExport());
    }
  };
  return (
    <StyledExportCard ref={ref}>
      <StyledTabList>
        {popupMenuItems.map((item) => {
          return (
            <StyledTabItem key={item.id}>
              <StyledTabHeader
                onClick={() => dispatch(popupController(item.compKey))}
                $isSelected={
                  item.compKey === popupContent ||
                  (popupContent === null && item.name === "CSS")
                }
              >
                {item.name}
              </StyledTabHeader>
            </StyledTabItem>
          );
        })}
      </StyledTabList>
      {popupContent === null ? <CssContent /> : null}
      {popupContent === "CssContent" ? <CssContent /> : null}
      {popupContent === "TailwindContent" ? <TailwindContent /> : null}
      {popupContent === "CustomCodeContent" ? <CustomCodeContent /> : null}
      {popupContent === "DownloadContent" ? <DownloadContent /> : null}
      {popupContent === "GradientsContent" ? <GradientsContent /> : null}
      {popupContent === "QrContent" ? <QrContent /> : null}
      {popupContent === "ScssContent" ? <ScssContent /> : null}
      {popupContent === "ShadesContent" ? <ShadesContent /> : null}
    </StyledExportCard>
  );
}
