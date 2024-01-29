import { nanoid } from "nanoid";

export const pricingData = [
    {
        id: nanoid(),
        header: 'Basic',
        pricing: 'Free',
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