// RGB renklerini HSL renk modeline dönüştürme
export function rgbToHsl(rgb) {
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

export function hslToRgb(hsl) {
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

export function rgbToHex(rgb) {
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  return (
    "#" +
    componentToHex(rgb[0]) +
    componentToHex(rgb[1]) +
    componentToHex(rgb[2])
  );
}

export function invertColor(rgb) {
  // rgb dizisinin her bir elemanını 255'ten çıkartarak renkleri tersine çevir
  const invertedColor = rgb.map((component) => 255 - component);
  return invertedColor;
}

// backgroundColor
export function lightColor(rgb) {
  let adjustedRGB = rgb.map(function (component) {
    return Math.round(component + (255 - component) * 0.95);
  });

  return adjustedRGB;
}

// Text Color
export function darkColor(rgb) {
  let adjustedRGB = rgb.map(function (component) {
    return Math.round(component * 0.1);
  });

  return adjustedRGB;
}

export function hexToRgb(hex) {
  // Hex rengini 16'lık sayı sistemine çevir
  const decimalValue = parseInt(hex.slice(1), 16);

  // Decimal değerini RGB formatına çevir
  const red = (decimalValue >> 16) & 255;
  const green = (decimalValue >> 8) & 255;
  const blue = decimalValue & 255;

  return [red, green, blue];
}

export function lightenColor(rgb, factor = 1.3) {
  return rgb.map((component) => Math.round(Math.min(component * factor, 255)));
}

export function darkenColor(rgb, factor = 0.8) {
  return rgb.map((component) => Math.round(component * factor));
}

function complementerColor(rgb) {
  let hsl = rgbToHsl(rgb);

  // Primary renkten daha açık bir ton, ancak aynı ton
  let tonTamamlayiciAciRenk = hslToRgb([
    hsl[0],
    hsl[1],
    Math.min(100, hsl[2] + 20),
  ]);

  return [rgb, tonTamamlayiciAciRenk];
}

export function createColorPalette(rgb) {
  let primaryColor = rgb;
  let primaryComplementColor = complementerColor(primaryColor)[1];

  // Secondary
  let secondaryColor = hslToRgb([
    (rgbToHsl(primaryColor)[0] + 180) % 360,
    50,
    70,
  ]);

  // accent
  let accentColor = hslToRgb([(rgbToHsl(primaryColor)[0] + 60) % 360, 80, 60]);

  return {
    primary: primaryColor,
    primaryComplement: primaryComplementColor,
    secondary: secondaryColor,
    accent: accentColor,
  };
}

export function isColorDark(color) {
  // Renk değerlerini elde et
  let r, g, b;
  if (color.startsWith("#")) {
    // Hex renk kodunu ayrıştır
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5, 7), 16);
  } else if (color.startsWith("rgb")) {
    // rgb veya rgba renk değerini ayrıştır
    const match = color.match(/(\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      r = parseInt(match[1], 10);
      g = parseInt(match[2], 10);
      b = parseInt(match[3], 10);
    }
  }

  // Renk koyuluğunu değerlendir (örneğin, RGB ortalama değeri)
  const brightness = (r + g + b) / 3;

  // Eğer ortalama değer 128'den küçükse renk koyu kabul edilir
  return brightness < 128;
}
