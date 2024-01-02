import { useSelector } from "react-redux";
import styled from "styled-components";
import convert from "color-convert";
import { useRef } from "react";
import { toast } from 'react-toastify';

const StyledColorConvertor = styled.div`
  margin-top: 3rem;
`;

const StyledCodeBlock = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  border-radius: 1rem;
  position: relative;
`;

const StyledCode = styled.pre`
  white-space: pre-wrap;
  font-size: 1.6rem;
  font-weight: 500;
  padding-bottom: ${props => props.$popupContent ? '2rem' : '0'};
`;

const StyledCodeFileName = styled.small`
  display: inline-block;
  padding: .8rem 2.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: .8px;
  color: #979696;
  width: 100%;
  border-bottom: 1px solid #d4d4d4;
`;

  const StyledCopyButton = styled.button`
    position: absolute;
    border: 1px solid gray;  
    background-color: white;
    color: #4f4f4f;
    padding: 0.2rem 1rem;
    top: -1rem;
    right: 2rem;
    border-radius: 5px;
    font-size: 1.4rem;
    cursor: pointer;
    &:hover {
      background-color: #f2f2f2;
    }
  `;



export default function ColorConvertor() {
  const copyRef = useRef(null);
  const popupSub = useSelector((state) => state.popup.popupSub);
  const popupContent = useSelector((state) => state.popup.popupContent);
  const primaryColor = useSelector((state) => state.theme.primaryColor);
  const secondaryColor = useSelector((state) => state.theme.secondaryColor);
  const accentColor = useSelector((state) => state.theme.accentColor);
  const backgroundColor = useSelector((state) => state.theme.backgroundColor);
  const textColor = useSelector((state) => state.theme.textColor);

  const copyToClipboard = async () => {
    try {
      if (copyRef.current) {
        await navigator.clipboard.writeText(copyRef.current.textContent);
        toast.success('Copied');
      }
    } catch (error) {
      toast.error('Error. Try again');
    }
  };


  // CSs
  const themeColorsHex = `
    --text: ${textColor}
    --background: ${backgroundColor}
    --primary: ${primaryColor}
    --secondary: ${secondaryColor}
    --accent: ${accentColor}
    `;
  const themeColorRgb = `
    --text: rgb(${convert.hex.rgb(textColor)})
    --background: rgb(${convert.hex.rgb(backgroundColor)})
    --primary: rgb(${convert.hex.rgb(primaryColor)})
    --secondary: rgb(${convert.hex.rgb(secondaryColor)})
    --accent: rgb(${convert.hex.rgb(accentColor)})
    `;
  const themeColorHsl = `
    --text: hsl(${convert.hex.hsl(textColor)})
    --background: hsl(${convert.hex.hsl(backgroundColor)})
    --primary: hsl(${convert.hex.hsl(primaryColor)})
    --secondary: hsl(${convert.hex.hsl(secondaryColor)})
    --accent: hsl(${convert.hex.hsl(accentColor)})
    `;
// Tailwind
    const themeColorsHexTailwind = `
    colors: {
      'text': '${textColor}',
      'background': '${backgroundColor}',
      'primary': '${primaryColor}',
      'secondary': '${secondaryColor}',
      'accent': '${accentColor}',
     },
    `;
    const themeColorsRgbTailwind = `
    colors: {
      'text': 'rgb(${convert.hex.rgb(textColor)})',
      'background': 'rgb(${convert.hex.rgb(backgroundColor)})',
      'primary': 'rgb(${convert.hex.rgb(primaryColor)})',
      'secondary': ' rgb(${convert.hex.rgb(secondaryColor)})',
      'accent': 'rgb(${convert.hex.rgb(accentColor)})',
     },
    `;
    const themeColorsHslTailwind = `
    colors: {
      'text': 'hsl(${convert.hex.hsl(textColor)})',
      'background': 'hsl(${convert.hex.hsl(backgroundColor)})',
      'primary': 'hsl(${convert.hex.hsl(primaryColor)})',
      'secondary': 'hsl(${convert.hex.hsl(secondaryColor)})',
      'accent': 'hsl(${convert.hex.hsl(accentColor)})',
     },
    `;
// SCSS

const themeColorsHexScss = `
   $text: ${textColor}
   $background: ${backgroundColor}
   $primary: ${primaryColor}
   $secondary: ${secondaryColor}
   $accent: ${accentColor}
`;
const themeColorsRgbScss = `
   $text: rgb(${convert.hex.rgb(textColor)})
   $background: rgb(${convert.hex.rgb(backgroundColor)})
   $primary: rgb(${convert.hex.rgb(primaryColor)})
   $secondary: rgb(${convert.hex.rgb(secondaryColor)})
   $accent: rgb(${convert.hex.rgb(accentColor)})
`;
const themeColorsHslScss = `
   $text: hsl(${convert.hex.hsl(textColor)})
   $background: hsl(${convert.hex.hsl(backgroundColor)})
   $primary: hsl(${convert.hex.hsl(primaryColor)})
   $secondary: hsl(${convert.hex.hsl(secondaryColor)})
   $accent: hsl(${convert.hex.hsl(accentColor)})
`;
  return (
    <StyledColorConvertor>
      <StyledCodeBlock>
      <StyledCopyButton onClick={copyToClipboard}>Copy</StyledCopyButton>
      {popupContent === 'TailwindContent' ? <StyledCodeFileName>tailwind.config.js</StyledCodeFileName> : null}
        <StyledCode $popupContent={popupContent === 'ScssContent'}>
          {/* CSS Content */}
          <div ref={copyRef}>
            {popupContent === 'CssContent' || popupContent === null ? (
            popupSub === null || popupSub === "HEX" ? themeColorsHex :
            popupSub === "RGB" ? themeColorRgb :
            popupSub === "HSL" ? themeColorHsl :
            null ) : null }
            {/* Tailwind Content */}
            {popupContent === 'TailwindContent' ? (
            popupSub === null || popupSub === "HEX" ? themeColorsHexTailwind :
            popupSub === "RGB" ? themeColorsRgbTailwind :
            popupSub === "HSL" ? themeColorsHslTailwind :
            null ) : null }
            {/* Css Content */}
            {popupContent === 'ScssContent' ? (
            popupSub === null || popupSub === "HEX" ? themeColorsHexScss :
            popupSub === "RGB" ? themeColorsRgbScss :
            popupSub === "HSL" ? themeColorsHslScss :
            null ) : null }
          </div>
        </StyledCode>
      </StyledCodeBlock>
    </StyledColorConvertor>
  );
}
