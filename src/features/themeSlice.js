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
  darkenColor
} from "../components/utils/helpers";

const initialState = {
  primaryColor: "#FF8400",
  secondaryColor: "#FFF5D6",
  accentColor: "#CF4307",
  backgroundColor: "#FFFAEB",
  textColor: "#130E01",
  primaryComplement: "#FFE2BC",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);

      //   function komplementerRenk(rgb) {
      //     let hsl = rgbToHsl(rgb);
      //     let tonTamamlayici = (hsl[0] + 180) % 360;
      //     let tamamlayiciRenk = hslToRgb([tonTamamlayici, hsl[1], hsl[2]]);
      //     return [rgb, tamamlayiciRenk];
      //   }
      function komplementerRenk(rgb) {
        let hsl = rgbToHsl(rgb);

        // Primary renkten daha açık bir ton, ancak aynı ton
        let tonTamamlayiciAciRenk = hslToRgb([
          hsl[0],
          hsl[1],
          Math.min(100, hsl[2] + 20),
        ]);

        return [rgb, tonTamamlayiciAciRenk];
      }

      function renkPaletiOlustur(rgb) {
        let primaryRenk = rgb;
        let primaryComplementRenk = komplementerRenk(primaryRenk)[1]; // Komplementer renk

        // İkincil (Secondary) renk
        let secondaryRenk = hslToRgb([
          (rgbToHsl(primaryRenk)[0] + 180) % 360,
          50,
          70,
        ]);

        // Aksent (Accent) renk
        let accentRenk = hslToRgb([
          (rgbToHsl(primaryRenk)[0] + 60) % 360,
          80,
          60,
        ]);

        return {
          primary: primaryRenk,
          primaryComplement: primaryComplementRenk,
          secondary: secondaryRenk,
          accent: accentRenk,
        };
      }

      const baslangicRenk = [red, green, blue];
      const colorPalette = renkPaletiOlustur(baslangicRenk);
      const primary = colorPalette.primary;
      const secondary = colorPalette.secondary;
      const primaryComplement = colorPalette.primaryComplement;
      const accent = colorPalette.accent;
      const baslangicBackground = primary;
      const backgroundColor = lightColor(baslangicBackground);
      const baslangicTextColor = primary;
      const textColor = darkColor(baslangicTextColor);
      state.primaryColor = rgbToHex(primary);
      state.secondaryColor = rgbToHex(secondary);
      state.accentColor = rgbToHex(accent);
      state.backgroundColor = rgbToHex(backgroundColor);
      state.textColor = rgbToHex(textColor);
      state.primaryComplement = rgbToHex(primaryComplement);
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
      state.primaryColor = rgbToHex(lightenColor(hexToRgb(state.primaryColor, 1.4)));
      state.secondaryColor = rgbToHex(darkenColor(hexToRgb(state.secondaryColor, 1.7)));
      state.accentColor = rgbToHex(darkenColor(hexToRgb(state.accentColor)));
      state.backgroundColor = rgbToHex(darkColor(hexToRgb(state.backgroundColor)));
      state.textColor = rgbToHex(lightColor(hexToRgb(state.textColor)));
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
} = themeSlice.actions;

export default themeSlice.reducer;
