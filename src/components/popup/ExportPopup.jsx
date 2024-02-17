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
  width: 80rem;
  max-width: 90%;
  background-color: #fff;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  z-index: 9999999;
`;

const StyledTabList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
  gap: 1rem;
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(129, 129, 129, 0.5); /* Kaydırma çubuğu rengi */
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(132, 132, 132);
  }
  &::-webkit-scrollbar-track {
    background-color: #e3e3e3; /* Kaydırma çubuğu yolu rengi */
  }
  @media only screen and (max-width: 1000px) {
    overflow-x: scroll;
    gap: 2rem;
    scroll-behavior: smooth;
  }
`;

const StyledTabItem = styled.li`
  cursor: pointer;
  position: relative;
  white-space: nowrap;
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
const StyledExportInformation = styled.small`
  display: flex;
  gap: 0.5rem;
  margin-left: 2rem;
  a {
    color: gray;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      height: 0.5px;
      width: 100%;
      bottom: 0;
      left: 0;
      background-color: #acacac;
      transition: all 0.2s ease-in-out;
    }
    &:hover::before {
      height: 2px;
    }
  }
`;

export default function ExportPopup() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const popupContent = useSelector((state) => state.popup.popupContent);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isToolBarClick = e.target.closest("#toolbar");
      const isPopupContentClick = e.target.closest("#popupContent");

      if (
        !isToolBarClick &&
        !isPopupContentClick &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        dispatch(offExport());
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dispatch, ref]);

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
      <StyledExportInformation>
        <a href="#">Learn about exporting</a>-
        <a href="#"> Request an export option</a>
      </StyledExportInformation>
    </StyledExportCard>
  );
}
