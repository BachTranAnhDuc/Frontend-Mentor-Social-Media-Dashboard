/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // darkMode: 'class',
  theme: {
    screens: {
      mobile: '320px',
      largeMobile: '480px',
      tablet: '768px',
      mediumScreen: '992px',
      largeScreen: '1200px',
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
        card_overview: 'max-content 1fr',
      },
      letterSpacing: {
        followers: '0.5rem',
      },
    },
  },
  plugins: [],
};
