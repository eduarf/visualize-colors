import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import ToolBar from "../../components/toolbar/ToolBar";

const StyledHome = styled.div`
position: relative;
`;


const Home = () => {
  return <StyledHome>
    <Navbar />
    <Hero />
    <ToolBar />
  </StyledHome>;
};

export default Home;
