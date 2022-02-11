import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        accent: {
                50: '#FFEE20',
                100: '#FFE021',
                200: '#FFD222',
                300: '#FFC423',
                400: '#FDA724',
                500: '#fda51e',
                600: '#CA851C',
                700: '#966314',
                800: '#966314',
                900: '#301F06',
            },
        primary: {
            50: '#e1eeff',
            100: '#bfdaff',
            200: '#9fc4ff',
            300: '#7AAEFD',
            400: '#7AAEFD',
            500: '#247AFD',
            600: '#2c5db6',
            700: '#1c489e',
            800: '#0e3682',
            900: '#042972',
        },
        error: {
            50: '#ffebe7',
            100: '#ffd6d0',
            200: '#ffc1b9',
            300: '#ffaea5',
            400: '#ff978c',
            500: '#FA8072',
            600: '#e06a5c',
            700: '#d45b4a',
            800: '#d55340',
            900: '#ce4533',
        },
        success: {
            50: '#adffcf',
            100: '#97ffc3',
            200: '#82ffb9',
            300: '#63ea9f',
            400: '#50d28a',
            500: '#3CB371',
            600: '#2bbf6c',
            700: '#19a555',
            800: '#119249',
            900: '#077d3a',
        }
    },
})

export default theme;