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
        "break-left-xl": "breakLeftXL 0.7s ease-in forwards",
        "break-right-xl": "breakRightXL 0.7s ease-in forwards",
        "break-left": "breakLeft 0.7s ease-in forwards",
        "break-right": "breakRight 0.7s ease-in forwards",
        "fall-out": "fallOut 0.7s ease-in forwards",
        "fold-out": "foldOut 0.5s ease-in forwards",
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
        },
        breakLeftXL: {
          "0%": {
            transform: "translateX(0) rotate(10deg)",
          },
          "70%": {
            transform: "translateX(-1200px) rotate(25deg)",
          },
          "80%": {
            opacity: "1",
            transform: "translateX(-1000px) rotate(50deg)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(-1000px) rotate(50deg)",
          },
        },
        breakLeft: {
          "0%": {
            transform: "translateX(0) rotate(10deg)",
          },
          "70%": {
            transform: "translateX(-80vw) rotate(25deg)",
          },
          "80%": {
            opacity: "1",
            transform: "translateX(-1000px) rotate(50deg)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(-1000px) rotate(50deg)",
          },
        },
        breakRightXL: {
          "0%": {
            transform: "translateX(0) rotate(-10deg)",
          },
          "70%": {
            transform: "translateX(1200px) rotate(-25deg)",
          },
          "80%": {
            opacity: "1",
            transform: "translateX(1000px) rotate(-50deg)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(1000px) rotate(-50deg)",
          },
        },
        breakRight: {
          "0%": {
            transform: "translateX(0) rotate(-10deg)",
          },
          "70%": {
            transform: "translateX(80vw) rotate(-25deg)",
          },
          "80%": {
            opacity: "1",
            transform: "translateX(1000px) rotate(-50deg)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(1000px) rotate(-50deg)",
          },
        },
        fallOut: {
          "0%": {
            left: "calc(50% - 0.4em)",
            width: "0.8em",
            transform: "translateY(0)",
          },
          "30%": {
            opacity: "1",
          },
          "60%,100%": {
            opacity: "0",
            left: "calc(50% - 3em)",
            width: "6em",
            transform: "translateY(24em)",
          },
        },
        foldOut: {
          "0%": {
            transform: "scale(0,0)",
          },
          "100%": {
            transform: "scale(1,1)",
          },
        },
      },
    },
  },
  plugins: [],
};
