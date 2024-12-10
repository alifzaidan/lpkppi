import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    '50': '#fff8ec',
                    '100': '#ffefd3',
                    '200': '#ffdaa6',
                    '300': '#ffbf6e',
                    '400': '#ff9833',
                    '500': '#ff7a0c',
                    '600': '#fd6204',
                    '700': '#ca4504',
                    '800': '#a0360c',
                    '900': '#812f0d',
                    '950': '#461404',
                },
            },
        },
    },
    plugins: [],
};
export default config;
