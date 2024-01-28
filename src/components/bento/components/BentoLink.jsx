import styled from 'styled-components'
import PropTypes from 'prop-types';


const StyledBentoLink = styled.a`
    color: var(--color-background);
    font-size: 1.8rem;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: var(--color-background);
      transition: all .2s ease-in-out;
    }
    &:hover::before{
      height: 5px;
    }
`;

export default function BentoLink({link}) {
  return (
    <StyledBentoLink>
      {link}
    </StyledBentoLink>
  )
}


BentoLink.propTypes = {
    link: PropTypes.string.isRequired,
};