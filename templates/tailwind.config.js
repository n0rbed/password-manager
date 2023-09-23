/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: { enabled: true, content: ["./*.html", "../static/*.js"]},
    darkMode: 'class',
    theme: {
    extend: {
            colors: {
                'antiwhite': {
                    100: '#E7ECEF',
                    200: '#CACDD1',
                    300: '#ADAEB4',
                    400: '#909096',
                    500: '#747378',
                },

                'burgundy': '#74121D',
                'citrine': '#EAD94C',
                'chineseviolet': {
                    100: '#CED1D5',
                    200: '#BABCC4',
                    300: '#A6A7B3',
                    400: '#857F90',
                    500: '#766C7F',
                    600: '#6B5E6F',
                    700: '#5F5160',
                    800: '#50434E',
                    900: '#40353C'
                },
            },
        },
    },
    plugins: [],
}

