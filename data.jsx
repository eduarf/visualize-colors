import { nanoid } from "nanoid";
// import  CssContent  from "./src/components/popup/components/CssContent";
// import  DownloadContent  from "./src/components/popup/components/DownloadContent";
// import  TailwindContent  from "./src/components/popup/components/TailwindContent";
// import  ScssContent  from "./src/components/popup/components/ScssContent";
// import  CustomCodeContent  from "./src/components/popup/components/CustomCodeContent";
// import  ShadesContent  from "./src/components/popup/components/ShadesContent";
// import  GradientsContent  from "./src/components/popup/components/GradientsContent";
// import  QrContent  from "./src/components/popup/components/QrContent";


export const popupMenuItems = [
  {
    id: nanoid(),
    name: "CSS",
    compKey: 'CssContent',
  },
  {
    id: nanoid(),
    name: "Tailwind CSS",
    compKey: 'TailwindContent',
  },
  {
    id: nanoid(),
    name: "SCSS",
    compKey: "ScssContent",
  },
  {
    id: nanoid(),
    name: "Custom Code",
    compKey: 'CustomCodeContent',
  },
  {
    id: nanoid(),
    name: "Shades",
    compKey: 'ShadesContent',
  },
  {
    id: nanoid(),
    name: "Gradients",
    compKey: 'GradientsContent',
  },
  {
    id: nanoid(),
    name: "QR",
    compKey: 'QrContent',
  },
  {
    id: nanoid(),
    name: "Download",
    compKey: 'DownloadContent',
  },
];

export const subMenuItems = [
  {
    id: nanoid(),
    name: 'HEX'
  },
  {
    id: nanoid(),
    name: 'RGB',
  },
  {
    id: nanoid(),
    name: 'HSL',
  },
  {
    id: nanoid(),
    name: 'OKLAB',
  },
  {
    id: nanoid(),
    name: 'OKLCH',
  },
];
