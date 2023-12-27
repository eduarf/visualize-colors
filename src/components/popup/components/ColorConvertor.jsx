import { useSelector } from "react-redux";
import styled from "styled-components";
import convert from "color-convert";

const StyledColorConvertor = styled.div`
  margin-top: 3rem;
`;

const StyledCodeBlock = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  border-radius: 1rem;
`;

const StyledCode = styled.pre`
  white-space: pre-wrap;
`;

export default function ColorConvertor() {
  const popupSub = useSelector((state) => state.popup.popupSub);
  const popupContent = useSelector((state) => state.popup.popupContent);
  const primaryColor = useSelector((state) => state.theme.primaryColor);
  const secondaryColor = useSelector((state) => state.theme.secondaryColor);
  const accentColor = useSelector((state) => state.theme.accentColor);
  const backgroundColor = useSelector((state) => state.theme.backgroundColor);
  const textColor = useSelector((state) => state.theme.textColor);


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
        <StyledCode>
          {/* CSS Content */}
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

        </StyledCode>
      </StyledCodeBlock>
    </StyledColorConvertor>
  );
}
