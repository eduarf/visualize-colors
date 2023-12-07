/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

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

      // Text Color
      function koyuRenk(rgb) {
        let adjustedRGB = rgb.map(function (component) {
          return Math.round(component * 0.1);
        });

        return adjustedRGB;
      }

      // backgroundColor
      function acikRenk(rgb) {
        let adjustedRGB = rgb.map(function (component) {
          return Math.round(component + (255 - component) * 0.95);
        });

        return adjustedRGB;
      }

      //   function komplementerRenk(rgb) {
      //     let hsl = rgbToHsl(rgb);
      //     let tonTamamlayici = (hsl[0] + 180) % 360;
      //     let tamamlayiciRenk = hslToRgb([tonTamamlayici, hsl[1], hsl[2]]);
      //     return [rgb, tamamlayiciRenk];
      //   }
      function komplementerRenk(rgb) {
        let hsl = rgbToHsl(rgb);
      
        // Primary renkten daha açık bir ton, ancak aynı ton
        let tonTamamlayiciAciRenk = hslToRgb([hsl[0], hsl[1], Math.min(100, hsl[2] + 20)]);
      
        return [rgb, tonTamamlayiciAciRenk];
      }

      // RGB renklerini HSL renk modeline dönüştürme
      function rgbToHsl(rgb) {
        let r = rgb[0] / 255;
        let g = rgb[1] / 255;
        let b = rgb[2] / 255;

        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let l = (max + min) / 2;

        let h, s;

        if (max === min) {
          h = s = 0; // renksiz
        } else {
          let d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h = (b - r) / d + 2;
              break;
            case b:
              h = (r - g) / d + 4;
              break;
          }

          h /= 6;
        }

        return [h * 360, s * 100, l * 100];
      }

      // HSL renklerini RGB renk modeline dönüştürme
      function hslToRgb(hsl) {
        let h = hsl[0] / 360;
        let s = hsl[1] / 100;
        let l = hsl[2] / 100;

        let r, g, b;

        if (s === 0) {
          r = g = b = l; // gri tonu
        } else {
          // eslint-disable-next-line no-inner-declarations
          function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
          }

          let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          let p = 2 * l - q;

          r = hue2rgb(p, q, h + 1 / 3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1 / 3);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
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
      
      function rgbToHex(rgb) {
        function componentToHex(c) {
          const hex = c.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        }
        return '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
      }

      const baslangicRenk = [red, green, blue];
      const colorPalette = renkPaletiOlustur(baslangicRenk);
      const primary = colorPalette.primary;
      const secondary = colorPalette.secondary;
      const primaryComplement = colorPalette.primaryComplement;
      const accent = colorPalette.accent;
      const baslangicBackground = primary;
      const backgroundColor = acikRenk(baslangicBackground);
      const baslangicTextColor = primary;
      const textColor = koyuRenk(baslangicTextColor);
      console.log(primary);
      state.primaryColor = rgbToHex(primary);
      state.secondaryColor = rgbToHex(secondary);
      state.accentColor = rgbToHex(accent);
      state.backgroundColor = rgbToHex(backgroundColor);
      state.textColor = rgbToHex(textColor);
      state.primaryComplement = rgbToHex(primaryComplement);

    },
    changePrimary: (state, action) => {
      console.log(action.payload);
        state.primaryColor = action.payload;
    }
  },
});

export const { changeTheme, changePrimary } = themeSlice.actions;

export default themeSlice.reducer;