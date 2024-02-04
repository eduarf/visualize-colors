import { nanoid } from "nanoid";

export const popupMenuItems = [
  {
    id: nanoid(),
    name: "CSS",
    compKey: "CssContent",
  },
  {
    id: nanoid(),
    name: "Tailwind CSS",
    compKey: "TailwindContent",
  },
  {
    id: nanoid(),
    name: "SCSS",
    compKey: "ScssContent",
  },
  {
    id: nanoid(),
    name: "Custom Code",
    compKey: "CustomCodeContent",
  },
  {
    id: nanoid(),
    name: "Shades",
    compKey: "ShadesContent",
  },
  {
    id: nanoid(),
    name: "Gradients",
    compKey: "GradientsContent",
  },
  {
    id: nanoid(),
    name: "QR",
    compKey: "QrContent",
  },
  {
    id: nanoid(),
    name: "Download",
    compKey: "DownloadContent",
  },
];

export const subMenuItems = [
  {
    id: nanoid(),
    name: "HEX",
  },
  {
    id: nanoid(),
    name: "RGB",
  },
  {
    id: nanoid(),
    name: "HSL",
  },
  {
    id: nanoid(),
    name: "OKLAB",
  },
  {
    id: nanoid(),
    name: "OKLCH",
  },
];

export const pricingData = [
  {
    id: nanoid(),
    header: "Basic",
    pricing: "Free",
    btnName: "Get Started",
    lists: [
      {
        id: nanoid(),
        text: "Choose any color",
      },
      {
        id: nanoid(),
        text: "Export all you want",
      },
    ],
  },
  {
    id: nanoid(),
    header: "Pro",
    pricing: "$0.00 / month",
    btnName: "Go to Dashboard",
    lists: [
      {
        id: nanoid(),
        text: "Choose any color",
      },
      {
        id: nanoid(),
        text: "Export all you want Get a big thank yout",
      },
      {
        id: nanoid(),
        text: "for checking this site out",
      },
      {
        id: nanoid(),
        text: "Get access to dashboard",
      },
    ],
  },
  {
    id: nanoid(),
    header: "Enterprise",
    pricing: "$0.00 / month",
    btnName: "Learn More",
    lists: [
      {
        id: nanoid(),
        text: "Choose any color",
      },
      {
        id: nanoid(),
        text: "Export all you want Get a big thank yout",
      },
      {
        id: nanoid(),
        text: "for checking this site out",
      },
      {
        id: nanoid(),
        text: "Get access to dashboard",
      },
      {
        id: nanoid(),
        text: "Super duper exclusive members-only content.",
      },
    ],
  },
];

export const testimonialsItems = [
  {
    id: nanoid(),
    userName: "Cool User",
    profession: "Product Designer",
    comment:
      '"Wow! I love this site. Realtime Colors is all websites at the same time."',
  },
  {
    id: nanoid(),
    userName: "Creative Person",
    profession: "Product Owner",
    comment:
      '"Amazing. I found my favorite colors in literally... 2 minutes? Woah! Totally real review."',
  },
  {
    id: nanoid(),
    userName: "Real Reviewer",
    profession: "Developer",
    comment:
      '"Astonished. This product is so cool. You should try it and upgrade to Enterprise plan. No kidding."',
  },
];

export const accordionItems = [
  {
    id: nanoid(),
    title: "How many colors should I choose?",
    content: `Normally, 3 colors are absolutely fine (meaning background, text, and one accent color).
    However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.`,
  },
  {
    id: nanoid(),
    title: "How does the contrast checker work?",
    content: `The contrast checker shows the contrast ratio between the selected color and its background/foreground.

    The contrast checker has 3 lights:
    
    x / Red: The contrast ratio does not pass either AAA or AA. Therefore, both large and normal texts are hardly readable.
    - / Yellow: The contrast ratio might pass AA but won't pass AAA. Large texts might be readable but normal texts are probably not readable.
    ✓ / Green: The contrast ratio passes both AA and AAA. Both large and normal texts are readable.
    Learn more about the contrast checker.`,
  },
  {
    id: nanoid(),
    title: "What does the hero image represent?",
    content: `The hero image is inspired by Piet Mondrian's Composition with Large Red Plane, Yellow, Black, Grey and Blue. This composition keeps the ratio of the main colors (red, blue, and yellow) very close to the 60-30-10 rule of UI design. This is mainly why I've chosen this composition to visualize the distribution of the colors on the page.`,
  },
  {
    id: nanoid(),
    title: "How can I set up the fonts?",
    content: `You can enter the name of a font from Google Fonts or the fonts installed on your device. Read more about Font Setup.`,
  },
  {
    id: nanoid(),
    title: "How can I learn more about this tool?",
    content: `You can find more information about Realtime Colors on the Docs. You can also contact me for any questions you might have.`,
  },
];
