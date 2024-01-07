import styled from "styled-components"
import { IoMdClock } from "react-icons/io";
import { HiSquares2X2 } from "react-icons/hi2";
import { FaCheckToSlot } from "react-icons/fa6";
import { nanoid } from "nanoid";

const StyledWhyColorSelector = styled.div`
      padding: 10vh 8vw;
`;
const StyledHeading = styled.h2`
    font-size: 6rem;
    font-weight: 700;
    letter-spacing: -.5px;
`;

const StyledCardContainer = styled.div``;
const StyledCard = styled.div``;
const StyledIcon = styled.div``;
const StyledHeader = styled.h4``;
const StyledPara = styled.p``;

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
      <StyledHeading>Why Realtime Colors?</StyledHeading>
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
