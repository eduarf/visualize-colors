import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";

const StyledHome = styled.div`
`;


const Home = () => {
  return <StyledHome>
    <Navbar />
    <Hero />
  </StyledHome>;
};

export default Home;
