import { useState } from "react";
import QuoteContainer from "./QuoteContainer";

const Cookie = ({ data }) => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    if (!opened) {
      setOpened(true);
    } else {
      setOpened(false);
    }
  };

  return (
    <button
      className={
        `bg-transparent block mt-16 mb-0 mx-auto w-80 h-72 focus:outline-transparent` +
        opened
          ? " w-[26em] h-[6em]"
          : " pop-in"
      }
      type="button"
      onClick={handleClick}
    >
      {/* left */}
      <div
        className={
          `absolute top-0 w-32 h-72 z-2 bg-current text-[#efaa5d]` + opened
            ? " break-left"
            : ""
        }
        style={{
          borderRadius: "7em 1em 1em 7em / 50%",
          boxShadow:
            "0.5em 0 0 inset,0.5em 0.2em 0 inset,1em 0.2em 0 #fff6 inset,-0.75em 0 0 #0002 inset",
          clipPath: "polygon(0% 0%, 68% 0%, 100% 30%, 100% 100%, 0% 100%)",
          left: "calc(50% - 5.4em)",
          transform: "rotate(25deg)",
          transformOrigin: "68% 0",
        }}
      ></div>
      {/* right */}
      <div
        className={
          `absolute top-0 w-32 h-72 z-2 bg-current text-[#efaa5d]` + opened
            ? " break-right"
            : ""
        }
        style={{
          borderRadius: "1em 7em 7em 1em / 50%",
          boxShadow:
            "-0.5em 0 0 inset,-0.5em 0.2em 0 inset,-1em 0.2em 0 #fff6 inset,0.75em 0 0 #0002 inset",
          clipPath: "polygon(0% 30%, 32% 0%, 100% 0, 100% 100%, 0% 100%)",
          right: "calc(50% - 5.4em)",
          transform: "rotate(-25deg)",
          transformOrigin: "32% 0",
        }}
      ></div>
      <div className="absolute top-0 left-[calc(50%-0.4em)] w-[0.8em] h-[6em] z-1">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute top-0 w-[0.5em] h-[0.5em] rounded-[50%] bg-current text-[#efaa5d]  ${
              i === 0
                ? "top-[4%] left-[15%]"
                : i === 1
                ? "top-[20%] right-[15%]"
                : i === 2
                ? "top-[30%] left-[25%]"
                : i === 3
                ? "top-[45%] right-[25%]"
                : i === 4
                ? "top-[55%] left-[5%]"
                : i === 5
                ? "top-[65%] right-[5%]"
                : i === 6
                ? "top-[75%] left-[30%]"
                : "top-[90%] right-[35%]"
            }`}
          ></div>
        ))}
      </div>
      <div
        className={`absolute top-0 bg-[linear-gradient(#fff0_.75em,#fff_0_5.25em,#fff0_0)] bg-[linear-gradient(90deg,curretColor_3em,#fff_0_25.25em,currentColor_0)] text-[#00c] flex flex-col justify-center p-[0.75em_1.5em_0.75em_3.75em] text-center w-[26em] h-[6em] l-0 scale-[0,1] origin-[50%_32%]`}
      >
        <div className="font-serif">
          <QuoteContainer data={data} />
        </div>
      </div>
    </button>
  );
};

export default Cookie;
