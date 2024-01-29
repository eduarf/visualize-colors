import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import ToolBar from "../../components/toolbar/ToolBar";
import ExportComp from "../../components/export/ExportComp";
import { useSelector } from "react-redux";
import WhyColorSelector from "../../components/why/WhyColorSelector";
import BentoComp from "../../components/bento/BentoComp";
import InfoBox from "../../components/infobox/InfoBox";
import Pricing from "../../components/pricing/Pricing";

const StyledHome = styled.div`
position: relative;
background-color: var(--color-background);
`;


const Home = () => {
  const isExportOpen = useSelector(state => state.theme.isExportOpen);
  return <StyledHome>
    <Navbar />
    <Hero />
    <ToolBar />
    {isExportOpen ?  <ExportComp /> : null} 
    <WhyColorSelector />
    <BentoComp />
    <InfoBox />
    <Pricing />
  </StyledHome>;
};

export default Home;
