import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import ToolBar from "../../components/toolbar/ToolBar";
import ExportComp from "../../components/export/ExportComp";
import { useSelector } from "react-redux";

const StyledHome = styled.div`
position: relative;
`;


const Home = () => {
  const isExportOpen = useSelector(state => state.theme.isExportOpen);
  return <StyledHome>
    <Navbar />
    <Hero />
    <ToolBar />
    {isExportOpen ?  <ExportComp /> : null} 
  </StyledHome>;
};

export default Home;
