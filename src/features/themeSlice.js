/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import {
  rgbToHsl,
  hslToRgb,
  rgbToHex,
  invertColor,
  hexToRgb,
  lightColor,
  darkColor,
  lightenColor,
  darkenColor,
  createColorPalette
} from "../components/utils/helpers";

const initialState = {
  primaryColor: "#FF8400",
  secondaryColor: "#FFF5D6",
  accentColor: "#CF4307",
  backgroundColor: "#FFFAEB",
  textColor: "#130E01",
  primaryComplement: "#FFE2BC",
  isDark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    defaultThemeLocalStorage: (state, action) => {
      localStorage.setItem('lightPalette', JSON.stringify(state));
    },
    changeTheme: (state, action) => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);

      const beginningColor = [red, green, blue];
      const colorPalette = createColorPalette(beginningColor);
      const primary = colorPalette.primary;
      const secondary = colorPalette.secondary;
      const primaryComplement = colorPalette.primaryComplement;
      const accent = colorPalette.accent;
      const beginningBackground = primary;
      const backgroundColor = lightColor(beginningBackground);
      const beginningTextColor = primary;
      const textColor = darkColor(beginningTextColor);
      state.primaryColor = rgbToHex(primary);
      state.secondaryColor = rgbToHex(secondary);
      state.accentColor = rgbToHex(accent);
      state.backgroundColor = rgbToHex(backgroundColor);
      state.textColor = rgbToHex(textColor);
      state.primaryComplement = rgbToHex(primaryComplement);
      localStorage.setItem('lightPalette', JSON.stringify(state));
      if(state.isDark) {
        state.isDark = true;
        state.primaryColor = rgbToHex(lightenColor(hexToRgb(state.primaryColor, 1.4)));
        state.secondaryColor = rgbToHex(darkenColor(hexToRgb(state.secondaryColor, 1.7)));
        state.accentColor = rgbToHex(darkenColor(hexToRgb(state.accentColor)));
        state.backgroundColor = rgbToHex(darkColor(hexToRgb(state.backgroundColor)));
        state.textColor = rgbToHex(lightColor(hexToRgb(state.textColor)));
        localStorage.setItem('darkTheme', JSON.stringify(state));
      }
      else return;
    },
    changeText: (state, action) => {
      state.textColor = action.payload;
    },
    changeBackground: (state, action) => {
      state.backgroundColor = action.payload;
    },
    changePrimary: (state, action) => {
      state.primaryColor = action.payload;
    },
    changeSecondary: (state, action) => {
      state.secondaryColor = action.payload;
    },
    changeAccent: (state, action) => {
      state.accentColor = action.payload;
    },
    darkTheme: (state, action) => {
      state.isDark = true;
      state.primaryColor = rgbToHex(lightenColor(hexToRgb(state.primaryColor, 1.4)));
      state.secondaryColor = rgbToHex(darkenColor(hexToRgb(state.secondaryColor, 1.7)));
      state.accentColor = rgbToHex(darkenColor(hexToRgb(state.accentColor)));
      state.backgroundColor = rgbToHex(darkColor(hexToRgb(state.backgroundColor)));
      state.textColor = rgbToHex(lightColor(hexToRgb(state.textColor)));
      localStorage.setItem('darkTheme', JSON.stringify(state));
    },
    returnToLight: (state, action) => {
      state.isDark = false;
      const storedPalette = localStorage.getItem('lightPalette');
    
      if (storedPalette) {
        const previousPalette = JSON.parse(storedPalette);
        state.primaryColor = previousPalette.primaryColor;
        state.secondaryColor = previousPalette.secondaryColor;
        state.accentColor = previousPalette.accentColor;
        state.backgroundColor = previousPalette.backgroundColor;
        state.textColor = previousPalette.textColor;
        state.primaryComplement = previousPalette.primaryComplement;
      }
    },
  },
});

export const {
  changeTheme,
  changeText,
  changePrimary,
  changeBackground,
  changeSecondary,
  changeAccent,
  darkTheme,
  returnToLight,
  defaultThemeLocalStorage
} = themeSlice.actions;

export default themeSlice.reducer;
