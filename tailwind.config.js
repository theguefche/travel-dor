/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
      },
      colors: {
        "body": "var(--body)",
        "element": "var(--element)",
        "secondary": "var(--secondary)",
        "primary": "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        "hover-icon": "var(--hover-icon)",
        "accent": "var(--accent-500)",
        "text": "var(--text)",
        "heading": "var(--heading)",
        "sub-heading": "var(--sub-heading)",
        "default": "var(--hover-icon)"
      },
      textColor: {
        "body": "var(--text)",
        "heading": "var(--primary)",
      },
      spacing: {
        "page": "4vw"
      },
      boxShadow: {
        "default": "xl",
        'popup': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        "book-action": "var(--primary) 0 0 0 2px"
      },
      backgroundImage: theme => ({
        'logo-gradient': 'linear-gradient(to right, var(--primary-500), var(--secondary))',
        'blob': 'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22blobGradient%22 gradientTransform=%22rotate(var(--blob-gradient-angle, 45) .5 .5)%22%3E%3Cstop offset=%220%25%22 stop-color=%22var(--primary, %2339cbe5)%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22var(--accent, %238AECDE)%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath id=%22blobPath%22%3E%3Cpath fill=%22currentColor%22 d=%22M813.5 674Q778 848 602 836t-355-70Q68 708 121 525.5T306.5 288Q439 233 619 179.5T824 313q25 187-10.5 361Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23blobPath)%22%3E%3Cpath fill=%22url(%23blobGradient)%22 d=%22M813.5 674Q778 848 602 836t-355-70Q68 708 121 525.5T306.5 288Q439 233 619 179.5T824 313q25 187-10.5 361Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
        // 'blob2': 'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22blob2Gradient%22 gradientTransform=%22rotate(var(--blob2-gradient-angle, 225) .5 .5)%22%3E%3Cstop offset=%220%25%22 stop-color=%22var(--primary, %2339cbe5)%22%2F%3E%3Cstop offset=%22100%25%22 stop-color=%22var(--accent, %238AECDE)%22%2F%3E%3C%2FlinearGradient%3E%3CclipPath id=%22blob2Path%22%3E%3Cpath fill=%22currentColor%22 d=%22M809 616Q685 732 548.5 809.5t-270-30.5Q145 671 102 479.5T247.5 254Q436 220 578 222.5t248.5 140Q933 500 809 616Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23blob2Path)%22%3E%3Cpath fill=%22url(%23blob2Gradient)%22 d=%22M809 616Q685 732 548.5 809.5t-270-30.5Q145 671 102 479.5T247.5 254Q436 220 578 222.5t248.5 140Q933 500 809 616Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
        'left-wave': "url('data:image/svg+xml,%3Csvg id=%27visual%27 viewBox=%270 0 900 600%27 width=%27900%27 height=%27600%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 version=%271.1%27%3E%3Crect x=%270%27 y=%270%27 width=%27900%27 height=%27600%27 fill=%27%23002233%27%3E%3C/rect%3E%3Cpath d=%27M554 0L506.2 50C458.3 100 362.7 200 372 300C381.3 400 495.7 500 552.8 550L610 600L0 600L0 550C0 500 0 400 0 300C0 200 0 100 0 50L0 0Z%27 fill=%27%230066FF%27 stroke-linecap=%27round%27 stroke-linejoin=%27miter%27%3E%3C/path%3E%3C/svg%3E')",
        // 'blob3': 'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22var(--element)%22 d=%22M823 628.5Q757 757 628.5 852T384 839.5Q268 732 233 616t21.5-210.5q56.5-94.5 151-194t262-73Q835 165 862 332.5t-39 296Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22--element%22 d=%22M823 628.5Q757 757 628.5 852T384 839.5Q268 732 233 616t21.5-210.5q56.5-94.5 151-194t262-73Q835 165 862 332.5t-39 296Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")',
      }),
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      keyframes: {
        mouvement: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '20%': { transform: 'translateX(40px) translateY(-20px)' },
          '40%': { transform: 'translateX(80px) translateY(20px)' },
          '60%': { transform: 'translateX(40px) translateY(40px)' },
          '80%': { transform: 'translateX(-40px) translateY(-20px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
      },
      animation: {
        mouvement: 'mouvement 20s ease-in-out infinite',
      },
      // backgroundPosition: {
      //   'center-center': 'center center',
      // },
      zIndex: {
        'overlay': '9998',
        'drawer': '9999',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text'),
            h1: {
              color: theme("colors.heading")
            },
            h2: {
              color: theme("colors.heading")
            }, h3: {
              color: theme("colors.sub-heading")
            }, h4: {
              color: theme("colors.sub-heading")
            }, h5: {
              color: theme("colors.sub-heading")
            },
            h6: {
              color: theme("colors.sub-heading")
            }
          },
        },
      }),
    },
  },
  plugins: [
    nextui(
      {
        themes: {
          light: {
            colors: {
              background: "colors.body",
              // primary: "primary",
              // default: "var(--hover-icon)"

            },
          },
          dark: {
            colors: {},
          },

        },
        layout: {
          // disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "8px",
            large: "12px",
          },
          // borderWidth: {
          //   small: "1px",
          //   medium: "2px",
          //   large: "3px",
          // },
        }
      }
    ),
    require('@tailwindcss/typography'),
    ({ addUtilities }) => {
      addUtilities({
        '.layout-element': {
          '@apply rounded-lg shadow mx-page my-4 px-4 py-2 bg-element w-auto': {},
        },
        '.transparent-layout-element': {
          '@apply rounded-lg mx-page my-4 px-4 py-2  w-auto bg-none shadow-none': {},
        },
        '.full-layout-element': {
          '@apply my-4 w-full bg-element shadow-none': {},
        },
        '.navbar-link': {
          '': {}
        },
        '.blob': {
          '@apply relative w-full h-full bg-contain bg-center bg-no-repeat': {}
        },
        'error-input-msg': {
          '@apply text-danger-500 text-sm  px-2': {}
        }
      });
    }
  ],
}

