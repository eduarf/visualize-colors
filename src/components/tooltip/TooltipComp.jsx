import styled from "styled-components"
import PropTypes from "prop-types";

const StyledTooltipComp = styled.div`
    position: absolute;
    padding: 1rem;
    min-width: 8rem;
    top: -75%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #323232;
    border-radius: 10px;
    h4 {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
    }
    span {
        color: #a8a8a8;
        font-size: 1.3rem;
        display: block;
        text-align: center;
        white-space: nowrap;
    }
`;

export default function TooltipComp({title, subtitle}) {
  return (
    <StyledTooltipComp>
      <h4>{title}</h4>
      <span>{subtitle}</span>
    </StyledTooltipComp>
  )
}


TooltipComp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  };
