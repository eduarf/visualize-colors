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
  primaryColor: "#42B6C8",
  secondaryColor: "#9C95E0",
  accentColor: "#9762D1",
  backgroundColor: "#F9FDFD",
  textColor: "#081B1C",
  primaryComplement: "#d4eef2",
  isDark: false,
  isExportOpen: false,
  themeHistory: [],
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    defaultThemeLocalStorage: (state, action) => {
      // Temayı local storage'da sakla
      const { themeHistory, ...rest } = state; // themeHistory'yi ayır
      const currentTheme = { ...rest }; // themeHistory olmadan temayı al
      state.themeHistory.push(currentTheme);
      localStorage.setItem('themeHistory', JSON.stringify(state.themeHistory));
    },
    changeTheme: (state, action) => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);

      const beginningColor = [red, green, blue];
      const colorPalette = createColorPalette(beginningColor);
      const primary = colorPalette.primary;
      state.primaryColor = rgbToHex(primary);
      state.secondaryColor = rgbToHex(colorPalette.secondary);
      state.accentColor = rgbToHex(colorPalette.accent);
      state.backgroundColor = rgbToHex(lightColor(primary));
      state.textColor = rgbToHex(darkColor(primary));
      state.primaryComplement = rgbToHex(colorPalette.primaryComplement);
      // Tema değişikliğini local storage'da sakla
      const { themeHistory, ...rest } = state; // themeHistory'yi ayır
      const currentTheme = { ...rest }; // themeHistory olmadan temayı al
      state.themeHistory.push(currentTheme);
      localStorage.setItem('themeHistory', JSON.stringify(state.themeHistory));

      // Eğer temanın karanlık modda olması gerekiyorsa
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
    onExport: (state, action) => {
      state.isExportOpen = true;
    },
    offExport: (state, action) => {
      state.isExportOpen = false;
    },
    loadPreviousTheme: (state, action) => {
      const themeHistory = localStorage.getItem('themeHistory');
      const deletedThemes = localStorage.getItem('deletedThemes'); // Ekledik: Silinen temaları saklamak için
      if (themeHistory) {
        const history = JSON.parse(themeHistory);
        const deletedThemesArray = deletedThemes ? JSON.parse(deletedThemes) : []; // Ekledik: DeletedThemes objesini al
        if (history.length > 1) {
          const previousTheme = history[history.length - 2];
          const newState = {
            ...state,
            primaryColor: previousTheme.primaryColor,
            secondaryColor: previousTheme.secondaryColor,
            accentColor: previousTheme.accentColor,
            backgroundColor: previousTheme.backgroundColor,
            textColor: previousTheme.textColor,
            primaryComplement: previousTheme.primaryComplement,
            themeHistory: [...history.slice(0, -1)],
          };
    
          deletedThemesArray.push(history.pop()); // Ekledik: Silinen temaları deletedThemesArray'a ekle
          localStorage.setItem('themeHistory', JSON.stringify(history));
          localStorage.setItem('deletedThemes', JSON.stringify(deletedThemesArray)); // Ekledik: Silinen temaları güncelle
          return newState;
        }
      }
      return state;
    },
    loadNextTheme: (state, action) => {
      const deletedThemes = localStorage.getItem('deletedThemes');
      if (deletedThemes) {
        const deletedThemesArray = JSON.parse(deletedThemes);
        if (deletedThemesArray.length > 0) {
          const nextTheme = deletedThemesArray.pop();
          const newState = {
            ...state,
            primaryColor: nextTheme.primaryColor,
            secondaryColor: nextTheme.secondaryColor,
            accentColor: nextTheme.accentColor,
            backgroundColor: nextTheme.backgroundColor,
            textColor: nextTheme.textColor,
            primaryComplement: nextTheme.primaryComplement,
            themeHistory: [...state.themeHistory, nextTheme],
          };
    
          localStorage.setItem('deletedThemes', JSON.stringify(deletedThemesArray));
          localStorage.setItem('themeHistory', JSON.stringify(newState.themeHistory));
          return newState;
        }
      }
      return state;
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
  defaultThemeLocalStorage,
  onExport,
  offExport,
  loadPreviousTheme,
  loadNextTheme
} = themeSlice.actions;

export default themeSlice.reducer;
