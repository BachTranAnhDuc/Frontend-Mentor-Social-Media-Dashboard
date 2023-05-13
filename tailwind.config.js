/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '375px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1800px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: {
        green: 'hsl(163, 72%, 41%)',
        red: 'hsl(356, 69%, 56%)',
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        instagram: {
          from: 'hsl(37, 97%, 70%)',
          to: 'hsl(329, 70%, 58%)',
        },
        youtube: 'hsl(348, 97%, 39%)',
      },
      toggle: {
        dark: {
          from: 'hsl(210, 78%, 56%)',
          to: 'hsl(146, 68%, 55%)',
        },
        light: 'hsl(230, 22%, 74%)',
      },
      themes: {
        dark: {
          very: {
            blue: {
              bg: 'hsl(230, 17%, 14%)',
              top: 'hsl(232, 19%, 15%)',
            },
          },
          card: 'hsl(228, 28%, 20%)',
          cardHover: '#3b3f54',
          text: {
            blue: 'hsl(228, 34%, 66%)',
            white: 'hsl(0, 0%, 100%)',
          },
        },
        light: {
          very: {
            pale: 'hsl(225, 100%, 98%)',
            white: 'hsl(0, 0%, 100%)',
          },
          card: 'hsl(227, 47%, 96%)',
          cardHover: '#e9e9f1',
          text: {
            dark: 'hsl(228, 12%, 44%)',
            verydark: 'hsl(230, 17%, 14%)',
          },
        },
      },
    },

    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      gridTemplateColumns: {
        '1fr-max-content': '1fr max-content',
        'max-content_1fr_max-content': 'max-content 1fr max-content',
        'repeat(2_max-content)': 'repeat(2, max-content)',
        card_overview: '1fr max-content',
      },
      gridTemplateRows: {
        'max-content_1fr_max-content': 'max-content 1fr max-content',
        'repeat(2_max-content)': 'repeat(2, max-content)',
        'repeat(3_max-content)': 'repeat(3, max-content)',
        card_overview: 'max-content 1fr',
      },
      letterSpacing: {
        followers: '0.5rem',
      },
    },
  },
  plugins: [],
};
