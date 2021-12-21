import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        light: {
            "100": "#FFFFFF",
            "500": "#F5F8FA",
            "900": "#DADADA",
        },
        dark: {
            "100": "#999999",
            "500": "#47585B",
            "900": "#000000",
        },
        hilight: {
            "900": "FFBA08",
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.900'
            }
        }
    }
});