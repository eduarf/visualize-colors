import styled from "styled-components"
import { IoMdClock } from "react-icons/io";
import { HiSquares2X2 } from "react-icons/hi2";
import { FaCheckToSlot } from "react-icons/fa6";
import { nanoid } from "nanoid";

const StyledWhyColorSelector = styled.div`
      padding: 10vh 8vw;
      margin-bottom: 50rem;
`;
const StyledHeading = styled.h2`
    font-size: 6rem;
    font-weight: 700;
    letter-spacing: -.5px;
    text-align: center;
    margin-bottom: 4rem;
`;

const StyledCardContainer = styled.div`
  display: flex;
  gap: 3rem;
`;
const StyledHeader = styled.h4`
  font-size: 2.8rem;
  position: relative;
  z-index: 10;
  &::before {
    content: '';
    position: absolute;
    height: 10px;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: var(--color-primary);
    transition: all .3s ease-in-out;
    z-index: 1;
    opacity: .5;
  }
`;
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem;
  gap: 20px;
  background-color: var(--color-secondary);
  border-radius: 1.5rem;
  position: relative; 

  &:hover {
    ${StyledHeader} {
      &::before {
        height: 20px;
      }
    }
  }
`;
const StyledIcon = styled.div`
  font-size: 10rem;
  color: var(--color-primary);
`;
const StyledPara = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
  letter-spacing: .9px;
`;

export default function WhyColorSelector() {

  const data = [
    {
      header: 'Saves Time',
      para: 'No need to spend hours implementing different variations of colors. Decide right away!',
      icon: <IoMdClock />
    },
    {
      header: `It's Realistic`,
      para: 'Color Palettes make it hard to pick. This tool distributes the colors on a real website.',
      icon: <HiSquares2X2 />
    },
    {
      header: `It's simple`,
      para: 'Push a few buttons, and there you have it! Your very own branding colors, ready to export.',
      icon: <FaCheckToSlot />,
    },
  ];
  return (
    <StyledWhyColorSelector>
      <StyledHeading>Why Color Selector?</StyledHeading>
      <StyledCardContainer>
        {data.map((item) => {
          return <StyledCard key={nanoid()}>
            <StyledIcon>{item.icon}</StyledIcon>
            <StyledHeader>{item.header}</StyledHeader>
            <StyledPara>{item.para}</StyledPara>
          </StyledCard>
        })}
      </StyledCardContainer>
    </StyledWhyColorSelector>
  )
}
