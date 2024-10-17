/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      xs: "375px",
    },
    extend: {
      animation: {
        "pop-in": "popIn 0.3s linear",
        "break-left": "breakLeft 0.7s ease-in forwards",
        "break-right": "breakRight 0.7s ease-in forwards",
        "fall-out": "fallOut 0.7s ease-in forwards",
        "fold-out": "foldOut 0.7s ease-in forwards",
      },
      keyframes: {
        popIn: {
          "0%": {
            transform: "scale(0)",
          },
          "75%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
          breakLeft: {
            0: {
              transform: "translateX(0) rotate(25deg)",
            },
            "30% ,40%": {
              transform: "translateX(0) rotate(55deg)",
            },
            "70%, 80%": {
              opacity: "1",
              transform: "translateX(-14em) rotate(50deg)",
            },
            "100%": {
              opacity: "0",
              transform: "translateX(-14em) rotate(50deg)",
            },
          },
          breakRight: {
            0: {
              transform: "translateX(0) rotate(-25deg)",
            },
            "30%, 40%": {
              transform: "translateX(0) rotate(-55deg)",
            },
            "70%, 80%": {
              opacity: "1",
              transform: "translateX(14em) rotate(-50deg)",
            },
            100: {
              opacity: "0",
              transform: "translateX(14em) rotate(-50deg)",
            },
          },
          fallOut: {
            "0%": {
              left: "calc(50% - 0.4em)",
              width: "calc(50% - 3em)",
              transform: "translateY(0)",
            },
            "30%": {
              opacity: "1",
            },
            "60%, 100%": {
              opacity: "0",
              left: "calc(50% - 3em)",
              width: "6em",
              transform: "translateY(24em)",
            },
          },
          foldOut: {
            0: {
              transform: "scale(0.23,0.7)",
            },
            "30% 40%": {
              transform: "scale(0.5,0.7)",
            },
            "69%": {
              transform: "scale(1,0.7)",
            },
            "74%, 100%": {
              transform: "scale(1,1)",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
