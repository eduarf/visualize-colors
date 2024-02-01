import { nanoid } from "nanoid";


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

export const pricingData = [
  {
      id: nanoid(),
      header: 'Basic',
      pricing: 'Free',
      btnName: 'Get Started',
      lists: [
          {
              id: nanoid(),
              text: 'Choose any color',
          },
          {
              id: nanoid(),
              text: 'Export all you want'
          },
      ],
  },
  {
      id: nanoid(),
      header: 'Pro',
      pricing: '$0.00 / month',
      btnName: 'Go to Dashboard',
      lists: [
          {
              id: nanoid(),
              text: 'Choose any color'
          },
          {
              id: nanoid(),
              text: 'Export all you want Get a big thank yout'
          },
          {
              id: nanoid(),
              text: 'for checking this site out'
          },
          {
              id: nanoid(),
              text: 'Get access to dashboard'
          },
      ],
  },
  {
      id: nanoid(),
      header: 'Enterprise',
      pricing: '$0.00 / month',
      btnName: 'Learn More',
      lists: [
          {
              id: nanoid(),
              text: 'Choose any color'
          },
          {
              id: nanoid(),
              text: 'Export all you want Get a big thank yout'
          },
          {
              id: nanoid(),
              text: 'for checking this site out'
          },
          {
              id: nanoid(),
              text: 'Get access to dashboard'
          },
          {
              id: nanoid(),
              text: 'Super duper exclusive members-only content.'
          },
      ],
  },
];