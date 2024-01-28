import styled from "styled-components";
import BentoLink from "./components/BentoLink";
import { useEffect, useState } from "react";

const StyledBentoComp = styled.div`
  padding: 6vh 8vw;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 60% 40%;
  max-width: 1920px;
  height: 70rem;
  @media only screen and (max-width: 1000px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: none;
  }
`;

const StyledUsersCard = styled.div`
  padding: 8rem 1.6rem;
  background-color: var(--color-primary);
  grid-column: 1 / 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-radius: 2rem;
  @media only screen and (max-width: 1000px){
    grid-column: 1 / 4;
  }
  @media only screen and (max-width: 768px) {
      padding: 4rem 1rem;
    }
  h2 {
    font-size: 6rem;
    font-weight: 800;
    letter-spacing: -1px;
    color: var(--color-background);
    text-align: center;
    @media only screen and (max-width: 1200px) {
      font-size: 5.2rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 3.8rem;
    }
  }
  span {
    font-size: 1.8rem;
    color: var(--color-background);
  }
`;
const StyledFreeCard = styled.div`
  padding: 8rem 1.6rem;
  background-color: var(--color-secondary);
  grid-column: 5 / 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  gap: 2rem;
  @media only screen and (max-width: 1000px){
    grid-column: 1 / 4;
  }
  @media only screen and (max-width: 768px) {
      padding: 4rem 1rem;
    }
  h2 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.2;
    text-align: center;
    white-space: pre-wrap;
    @media only screen and (max-width: 1200px) {
      font-size: 3.4rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 2.6rem;
    }
  }
  span {
    font-size: 1.8rem;
  }
`;

const StyledProductHuntCard = styled.div`
  grid-column: 4 / 6;
  padding: 8rem 1.6rem;
  background-color: var(--color-accent);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media only screen and (max-width: 1000px){
    grid-column: 1 / 4;
  }
  @media only screen and (max-width: 768px) {
      padding: 4rem 1rem;
    }
  h2 {
    font-size: 3.8rem;
    letter-spacing: -.5px;
    font-weight: 600;
    color: var(--color-background);
    text-align: center;
    @media only screen and (max-width: 1200px){
      font-size: 3.2rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 2.6rem;
    }
  }
`;

const StyledPluginCard = styled.div`
  grid-column: 1 / 4;
  padding: 8rem 1.6rem;
  background-color: var(--color-text);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media only screen and (max-width: 1000px){
    grid-column: 1 / 4;
  }
  @media only screen and (max-width: 768px) {
      padding: 4rem 1rem;
    }
  h2 {
    font-size: 3.8rem;
    letter-spacing: -.5px;
    font-weight: 600;
    color: var(--color-background);
    @media only screen and (max-width: 1200px){
      font-size: 3.2rem;
      text-align: center;
    }
    @media only screen and (max-width: 768px) {
      font-size: 2.6rem;
    }
  }
`;

export default function BentoComp() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenWidth = () => {
    const screenWidth = window.innerWidth;
    setIsSmallScreen(screenWidth < 1000);
  };

  useEffect(() => {
    // Sayfa yüklendiğinde ve pencere boyutu değiştiğinde kontrol et
    checkScreenWidth();

    // Pencere boyutu değiştiğinde tekrar kontrol etmek için event listener ekle
    window.addEventListener('resize', checkScreenWidth);

    // Component unmount edildiğinde event listener'ı temizle
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);
  return (
    <StyledBentoComp>
      <StyledUsersCard>
        <h2>200K+ Users</h2>
        <span>and counting...</span>
      </StyledUsersCard>
      <StyledFreeCard>
        <h2>
          100%{isSmallScreen ? null : <br /> }Free!
        </h2>
        <span>Forever.</span>
      </StyledFreeCard>
      <StyledPluginCard>
        <h2>11K+ Plugin Users</h2>
        <BentoLink link='Check it out on Figma' />
      </StyledPluginCard>
      <StyledProductHuntCard>
        <h2>
          200+ ProductHunt Upvotes
        </h2>
        <BentoLink link='Leave a review' />
      </StyledProductHuntCard>
    </StyledBentoComp>
  );
}
