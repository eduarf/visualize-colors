import styled from 'styled-components'
import { pricingData } from '../../../data';
import { FaCheck } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

const StyledPricing = styled.section`
    margin-bottom: 100rem;
    padding: 10vh 8vw;
`;

const StyledHeader = styled.h2`
    font-size: 5.2rem;
    font-weight: 800;
    text-align: center;
`;
const StyledSubtitle = styled.h5`
    font-size: 2.2rem;
    font-weight: 500;
    text-align: center;
`;

const StyledPricingCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6rem;
  margin-top: 5rem;
`;

const StyledPricingCard = styled.div`
  background-color: ${props => props.$isMostPopular ? `var(--color-primaryComp)` : `var(--color-lightgray)`};
  padding: 1em 3em 3em;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5rem;
  align-items: center;
`;

const StyledMostPopular = styled.div`
  visibility: ${props => props.$isMostPopular ? 'visible' : 'hidden'};
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--color-primary);
`;

const StyledPricingCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  h4 {
    text-align: center;
    font-size: 3.6rem;
    font-weight: 700;
    letter-spacing: -1px;
  }
  p {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const StyledPricingLists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  div{
    display: flex;
    gap: 3rem;
    align-items: center;
    span {
      font-size: 1.8rem;
    }
  }
`;

const StyledSunnyIcon = styled(IoSunny)`
  font-size: 3rem;
`;

const StyledCheckIcon = styled(FaCheck)`
  font-size: 3rem !important;
  color: var(--color-secondary);
`;

export default function Pricing() {
  return (
    <StyledPricing>
      <StyledHeader>Plans & Pricing</StyledHeader>
      <StyledSubtitle>The tool is 100% free! This is just a generic section.</StyledSubtitle>
      <StyledPricingCardContainer>
      {pricingData.map((item) => {
        return <StyledPricingCard $isMostPopular={item.header === 'Pro'} key={item.id}>
            <StyledPricingCardText>
                <StyledMostPopular $isMostPopular={item.header === 'Pro'}> <StyledSunnyIcon /> Most Popular</StyledMostPopular>
                <h4>{item.header}</h4>
                <p>{item.pricing}</p>
                <StyledPricingLists>
                  {item.lists.map((item) => {
                    return <div key={item.id}><div><StyledCheckIcon /></div> <span>{item.text}</span> </div>
                  })}
                </StyledPricingLists>
            </StyledPricingCardText>
           {item.header === 'Pro' ? <PrimaryButton name={item.btnName} /> : <SecondaryButton name={item.btnName} /> } 
          </StyledPricingCard>
      })}
      </StyledPricingCardContainer>
    </StyledPricing>
  )
}
