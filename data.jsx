import { nanoid } from "nanoid";
import  CssContent  from "./src/components/popup/components/CssContent";
import  DownloadContent  from "./src/components/popup/components/DownloadContent";
import  TailwindContent  from "./src/components/popup/components/TailwindContent";
import  ScssContent  from "./src/components/popup/components/ScssContent";
import  CustomCodeContent  from "./src/components/popup/components/CustomCodeContent";
import  ShadesContent  from "./src/components/popup/components/ShadesContent";
import  GradientsContent  from "./src/components/popup/components/GradientsContent";
import  QrContent  from "./src/components/popup/components/QrContent";



const subMenu = ["HEX", "RGB", "HSL", "OKLAB", "OKLCH"];

export const popupMenuItems = [
  {
    id: nanoid(),
    name: "CSS",
    subMenu: subMenu,
    comp: <CssContent />,
  },
  {
    id: nanoid(),
    name: "Tailwind CSS",
    subMenu: subMenu,
    comp: <TailwindContent />,
  },
  {
    id: nanoid(),
    name: "SCSS",
    subMenu: subMenu,
    keyName: "ScssContent",
    comp: <ScssContent />,
  },
  {
    id: nanoid(),
    name: "Custom Code",
    subMenu: subMenu,
    comp: <CustomCodeContent />,
  },
  {
    id: nanoid(),
    name: "Shades",
    subMenu: subMenu,
    comp: <ShadesContent />,
  },
  {
    id: nanoid(),
    name: "Gradients",
    subMenu: subMenu,
    comp: <GradientsContent />,
  },
  {
    id: nanoid(),
    name: "QR",
    subMenu: subMenu,
    comp: <QrContent />,
  },
  {
    id: nanoid(),
    name: "Download",
    subMenu: subMenu,
    comp: <DownloadContent />,
  },
];
